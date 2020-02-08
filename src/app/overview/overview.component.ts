import { Component, OnInit } from '@angular/core';
import { Education } from '../data/education.model';
import { EDUCATION } from '../data/education';
import { Experience } from '../data/experience.model';
import { EXPERIENCE } from '../data/experience';
import { Subsection } from '../section/subsection/subsection.model';
import { VOLUNTEER } from '../data/volunteer';
import { Affiliations } from '../data/Affiliations.model';
import { AFFILIATIONS } from '../data/affiliations';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  readonly education: Education[]= EDUCATION;
  educationSubsections: Subsection[];

  readonly experience: Experience[]= EXPERIENCE;
  experienceSubsections: Subsection[];

  readonly volunteer: Experience[]= VOLUNTEER;
  volunteerSubsections: Subsection[];

  readonly affiliations: Affiliations[]= AFFILIATIONS;
  affiliationsSubsections: Subsection[];

  constructor() { }

  ngOnInit() {
    this.experienceSubsections= this.experience.map(e=>e.toSubsection());
    this.educationSubsections= this.education.map(e=>e.toSubsection());
    this.volunteerSubsections= this.volunteer.map(e=>e.toSubsection());
    this.affiliationsSubsections= this.affiliations.map(e=>e.toSubsection());
  }

}
