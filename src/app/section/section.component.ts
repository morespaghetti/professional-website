import { Component, OnInit, Input } from '@angular/core';
import { Subsection } from './subsection/subsection.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() title: string;
  @Input() subsections: Subsection[];

  @Input() endDateEnable: boolean= true;

  constructor() { }

  ngOnInit() {
  }

}
