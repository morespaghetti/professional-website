import { Subsection } from '../section/subsection/subsection.model';

export class Experience {

  startDate: Date;
  endDate: Date | null;

  position: string;
  company: string;
  companyTagLine: string;

  constructor(  startDate: Date,
                endDate: Date | null,
                position: string,
                company: string,
                companyTagLine: string){

    this.startDate= startDate;
    this.endDate= endDate;
    this.position= position;
    this.company= company;
    this.companyTagLine= companyTagLine;
  }

  toSubsection(): Subsection {
    return new Subsection(this.position + ' | ' + this.company,
      this.companyTagLine,
      this.startDate,
      this.endDate,
      null);
  }
}
