export class Subsection {
  startDate: Date | null;
  endDate: Date | null;

  title: string | null;
  subtitle: string | null;
  notes: string[] | null;

  constructor(title: string | null,
                subtitle: string | null,
                startDate: Date | null,
                endDate: Date | null,
                notes: string[] | null){

    this.title= title;
    this.subtitle= subtitle;

    this.startDate= startDate;
    this.endDate= endDate;

    this.notes= notes;
  }
}
