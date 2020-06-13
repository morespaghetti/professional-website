import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

import {SkillsData} from './skillsData';
import { Sunburst } from './sunburst.model';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {
  @ViewChild('chart', {static: true}) chartContainer: ElementRef;

  chartNativeElement;

  data: Sunburst[]= SkillsData;

  constructor() {
  }

  ngOnInit() {
    this.skillsDataSort(this.data);
    this.chartDraw();
  }

  private chartDraw(): void {

    const chartNativeElement= this.chartContainer.nativeElement;

    const width= 100;
    const height= 200*0.85;
    const maxRadius= height/2;

    // theta scale
    const thetaScale= d3.scaleLinear()
        .range([Math.PI, 2*Math.PI])
        .clamp(true);

    // radius scale
    const radiusScale= new ScaleMultiLinear([0, 1], 0.75, [0, maxRadius], 0.66);

    // x & y coordinates of polar coordinate
    const xCoord= (r, theta)=>{
      return r*Math.cos(theta);
    };

    const yCoord= (r, theta)=>{
      return r*Math.sin(theta);
    };

    // Color scale
    const color= (d) => {
      return d3.interpolateCool( (d.x0 + d.x1)/2 );
    };

    // opacity scale
    const opacity= (d) => {
      const opacityScale= d3.scaleLinear().range([0.3, 0.3]);
      return opacityScale( (d.y0 + d.y1)/2 );
    };

    // Fun stuff...
    const partition= d3.partition();

    const arc= d3.arc()
        .startAngle(d => thetaScale(d.x0))
        .endAngle(d => thetaScale(d.x1))
        .innerRadius(d => Math.max(0, radiusScale.scale(d.y0)))
        .outerRadius(d => Math.max(0, radiusScale.scale(d.y1)));

    // Returns path of middle radius vec
    const radiusLine= d => {
      const r= [radiusScale.scale(d.y0), radiusScale.scale(d.y1)];
      const theta= Math.max(0, (thetaScale(d.x0) + thetaScale(d.x1) - Math.PI)/2);

      const path= d3.path();
      path.moveTo(xCoord(r[1], theta), yCoord(r[1], theta));
      path.lineTo(xCoord(r[0], theta), yCoord(r[0], theta));
      return path.toString();
    };

    // Determines if the text should be displayed or not
    const textDisplay= d => {
      const deltaAngle= Math.abs(thetaScale(d.x1) - thetaScale(d.x0));
      if( deltaAngle>0.00001 ) {
        return null;
      } else {
        return 'none';
      }
    };

    const svg= d3.select(chartNativeElement).append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `${-width} ${-height/2} ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMaxYMid meet')
        .on('click', () => focusOn());

    const root= d3.hierarchy(this.data[0]);
    root.sum(d=>d.size);

    var focusOnLastData= root;

    const slice = svg.selectAll('g.slice')
        .data(partition(root).descendants());

    const newSlice = slice.enter()
        .append('g').attr('class', 'slice')
        .on('click', d => {
          d3.event.stopPropagation();
          focusOn(d);
        });

    newSlice.append('title')
        .text(d => d.data.name);

    newSlice.append('path')
        .attr('class', 'main-arc')
        .style('fill', d => color(d))
        .style('opacity', d => opacity(d))
        .attr('d', arc)
        .attr('transform', `translate(${0}, 0)`);

    newSlice.append('path')
        .attr('class', 'hidden-arc')
        .attr('id', (_, i) => `hiddenArc${i}`)
        .attr('d', radiusLine)
        .attr('transform', `translate(${0},0)`);

    const text = newSlice.append('text')
        .attr('class', 'text-label')
        .attr('display', d => textDisplay(d));

    text.append('textPath')
        .attr('startOffset', '50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
        .attr('class', 'text-path')
        .text(d => d.data.name);

    function focusOn( d= {x0: 0, x1: 1, y0: 0, y1: 1}) {

      if( d===focusOnLastData ) {
        // Same segment that was previously clicked, lets reset it
        d= {x0: 0, x1: 1, y0: 0, y1: 1};
      }

      const transition= svg.transition()
          .duration(750)
          .tween('scale', () => {
            const xd= d3.interpolate(thetaScale.domain(), [d.x0, d.x1]);
            const yd= d3.interpolate(radiusScale.domainGet(), [d.y0, 1]);

            return t=> {
                          thetaScale.domain(xd(t));
                          radiusScale.domainSet(yd(t));
                          radiusScale.scaleSet();
                          radiusScale.scale(t);
                        };
          });

      transition.selectAll('path.main-arc')
          .attrTween('d', d => () => arc(d));

      transition.selectAll('path.hidden-arc')
          .attrTween('d', d => () => radiusLine(d));

      transition.selectAll('text')
          .attrTween('display', d => () => textDisplay(d));

      moveStackToFront(d);

      function moveStackToFront(elD) {
        svg.selectAll('.slice').filter(d => d === elD)
            .each(function(d) {
                this.parentNode.appendChild(this);
                if( d.parent ) { moveStackToFront(d.parent); }
            })
      }

      focusOnLastData= d;
    }

  }

  // Sorts each node in reverse alphabetical order
  private skillsDataSort(root: Sunburst[]): void {
    root.sort((a, b) => (a.name>b.name) ? -1 : 1);

    root.forEach( (e) => {
      if( e.children ){
        this.skillsDataSort(e.children);
      }
    });
  }
}

// Two d3 linear scales to make a continuous scale and range
class ScaleMultiLinear {
  private range: number[]= [];
  private rangeT: number;

  private domain: number[]= [];
  private domainT: number;

  private scaleLower;
  private scaleUpper;

  constructor(domain: number[], domainT: number, range: number[], rangeT: number) {
    this.domainSet(domain, domainT);
    this.rangeSet(range, rangeT);
    this.scaleSet();
  }

  domainGet() {
    return [this.domain[0], this.domain[2]];
  }

  domainSet(domain: number[], domainT?: number) {

    if(!domainT) {
      domainT= this.domainT;
    }

    this.domain[0]= domain[0];
    this.domain[2]= domain[1];
    this.domainT= domainT;
    this.domain[1]= this.domain[0] + (this.domain[2]-this.domain[0])*this.domainT;
  }

  rangeSet(range: number[], rangeT: number) {
    this.range[0]= range[0];
    this.range[2]= range[1];
    this.rangeT= rangeT;
    this.range[1]= this.range[0] + (this.range[2]-this.range[0])*this.rangeT;
  }

  scaleSet() {
    this.scaleLower= d3.scaleLinear()
                        .domain(this.domain.slice(0,2))
                        .range(this.range.slice(0,2));

    this.scaleUpper= d3.scaleLinear()
                        .domain(this.domain.slice(1,3))
                        .range(this.range.slice(1,3));
  }

  scale(x: number) : number {
    if( x<this.domain[1] ) {
      return this.scaleLower(x);
    } else {
      return this.scaleUpper(x);
    }
  }
}
