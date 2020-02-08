import { Component, OnInit, Input } from '@angular/core';
import { Subsection } from './subsection.model';

@Component({
  selector: 'app-subsection',
  templateUrl: './subsection.component.html',
  styleUrls: ['./subsection.component.scss']
})
export class SubsectionComponent implements OnInit {

  @Input() data: Subsection;

  @Input() endDateEnable: boolean= true;

  startDateString: string;
  endDateString: string;

  readonly MONTHS: string[]= ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  constructor() { }

  ngOnInit() {

    this.startDateString= this.dateFormat(this.data.startDate);

    if( this.data.endDate===null ){
      this.endDateString= 'Present';
    }else{
      this.endDateString= this.dateFormat(this.data.endDate);
    }

  }

  private dateFormat(date: Date): string {
    return this.MONTHS[date.getMonth()] + ' ' + date.getFullYear();
  }

}
