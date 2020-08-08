import { Injectable } from '@angular/core';

import {Skills} from '../data/skills.model';
import {SKILLS} from '../dataMock/mock-skills';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SkillsService {

  constructor() { }

  skillsGet(): Observable<Skills[]> {
    return of(SKILLS);
  }
}
