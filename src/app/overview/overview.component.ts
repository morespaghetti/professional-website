import { Component, OnInit } from '@angular/core';
import { Subsection } from '../section/subsection/subsection.model';
import { SunburstData } from '../sunburst/sunburst.model';

import { SkillsService } from '../services/skills.service';
import { BackgroundService } from '../services/background.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  public affiliationsSubsection: Subsection[];
  public educationSubsection: Subsection[];
  public experienceSubsection: Subsection[];
  public volunteerSubsection: Subsection[];
  public sunburstData: SunburstData[];

  constructor( private backgroundService: BackgroundService,
    private skillsService: SkillsService ) { }

  ngOnInit() {

    // Affiliations data
    this.backgroundService.affiliationsGet().subscribe(( affiliation )=>{
      this.affiliationsSubsection= affiliation.map(e=>e.toSubsection());
    });

    // Education data
    this.backgroundService.educationGet().subscribe(( education )=>{
      this.educationSubsection= education.map(e=>e.toSubsection());
    });

    // Experience data
    this.backgroundService.experienceGet().subscribe((experience)=>{
      this.experienceSubsection= experience.map(e=>e.toSubsection())
    });

    // Volunteer data
    this.backgroundService.volunteerGet().subscribe((volunteer)=>{
      this.volunteerSubsection= volunteer.map(e=>e.toSubsection())
    });

    // Skills data for sunburst
    this.skillsService.skillsGet().subscribe(( skillData )=>{
      this.sunburstData= skillData;
      SunburstData.defaultSizeSet(this.sunburstData);
    });
  }

}
