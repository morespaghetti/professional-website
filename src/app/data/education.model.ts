import { Subsection } from '../section/subsection/subsection.model';

export class Education {

  year: Date;
  institution: string;
  degree: string;
  notes: string[] | null;

  constructor(year: Date,
              institution: string,
              degree: string,
              notes: string[] | null){

    this.year= year;
    this.institution= institution;
    this.degree= degree;
    this.notes= notes;
  }

  toSubsection(): Subsection {
    return new Subsection(this.institution,
      this.degree,
      this.year,
      null,
      this.notes);
  }
}
