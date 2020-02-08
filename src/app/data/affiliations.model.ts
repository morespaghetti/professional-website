import { Subsection } from '../section/subsection/subsection.model';

export class Affiliations {

  date: Date;
  name: string;
  descriptor: string;

  constructor(  date: Date,
                name: string,
                descriptor: string){

    this.date= date;
    this.name= name;
    this.descriptor= descriptor;
  }

  toSubsection(): Subsection {
    return new Subsection(this.name,
      null,
      this.date,
      null,
      [this.descriptor]);
  }
}
