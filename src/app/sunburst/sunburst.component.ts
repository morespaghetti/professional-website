import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as d3 from 'd3';

import {SkillsData} from './skillsData';

@Component({
  selector: 'app-sunburst',
  templateUrl: './sunburst.component.html',
  styleUrls: ['./sunburst.component.scss']
})
export class SunburstComponent implements OnInit {
  @ViewChild('chart', {static: true}) chartContainer: ElementRef;

  chartNativeElement;

  data= SkillsData;

  constructor() { }

  private chartDraw(): void {

    const chartNativeElement= this.chartContainer.nativeElement;

    const width= 100;
    const height= 200;
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
      return d3.interpolateWarm( (d.x0 + d.x1)/2 );
    };

    // opacity scale
    const opacity= (d) => {
      const opacityScale= d3.scaleLinear().range([1, 0.2]);
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

    const svg= d3.select(chartNativeElement).append('svg')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('viewBox', `${-width} ${-height/2} ${width} ${height}`)
        .attr('preserveAspectRatio', 'xMaxYMid meet');

    const root= d3.hierarchy(this.data[0]);
    root.sum(d=>d.size);

    const slice = svg.selectAll('g.slice')
        .data(partition(root).descendants());

    const newSlice = slice.enter()
        .append('g').attr('class', 'slice');

    newSlice.append('title')
        .text(d => d.data.name);

    newSlice.append('path')
        .attr('class', 'main-arc')
        .style('fill', d => color(d))
        .style('opacity', d=>opacity(d))
        .attr('d', arc)
        .attr('transform', `translate(${0}, 0)`);

    newSlice.append('path')
        .attr('class', 'hidden-arc')
        .attr('id', (_, i) => `hiddenArc${i}`)
        .attr('d', radiusLine)
        .attr('transform', `translate(${0},0)`);

    const text = newSlice.append('text')
        .attr('class', 'text-label')
        .attr('display', null);

    text.append('textPath')
        .attr('startOffset','50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
        .attr('class', 'text-path')
        .text(d => d.data.name);
  }

  ngOnInit() {
    this.chartDraw();
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

  constructor(domain: number[], domainT: number, range: number[], rangeT: number){
    this.domainSet(domain, domainT);
    this.rangeSet(range, rangeT);
    this.scaleSet();
  }

  domainSet(domain: number[], domainT: number){
    this.domain[0]= domain[0];
    this.domain[2]= domain[1];
    this.domainT= domainT;
    this.domain[1]= this.domain[0] + (this.domain[2]-this.domain[0])*this.domainT;
  }

  rangeSet(range: number[], rangeT: number){
    this.range[0]= range[0];
    this.range[2]= range[1];
    this.rangeT= rangeT;
    this.range[1]= this.range[0] + (this.range[2]-this.range[0])*this.rangeT;
  }

  scaleSet(){
    this.scaleLower= d3.scaleLinear()
                        .domain(this.domain.slice(0,2))
                        .range(this.range.slice(0,2));

    this.scaleUpper= d3.scaleLinear()
                        .domain(this.domain.slice(1,3))
                        .range(this.range.slice(1,3));
  }

  scale(x: number) : number{
    if( x<this.domain[1] ){
      return this.scaleLower(x);
    }else{
      return this.scaleUpper(x);
    }
  }
}
