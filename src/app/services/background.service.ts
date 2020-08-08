import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

import { Education } from '../data/education.model';
import { Experience } from '../data/experience.model';
import { Affiliations } from '../data/Affiliations.model';

import { AFFILIATIONS } from '../dataMock/mock-affiliations';
import { EDUCATION } from '../dataMock/mock-education';
import { EXPERIENCE } from '../dataMock/mock-experience';
import { VOLUNTEER } from '../dataMock/mock-volunteer';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {

  constructor() { }

  affiliationsGet(): Observable<Affiliations[]>{
    return of(AFFILIATIONS);
  }

  educationGet(): Observable<Education[]>{
    return of(EDUCATION);
  }

  experienceGet(): Observable<Experience[]>{
    return of(EXPERIENCE);
  }

  volunteerGet(): Observable<Experience[]>{
    return of(VOLUNTEER);
  }
}
