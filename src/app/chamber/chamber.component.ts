import { Component, OnInit, Inject } from '@angular/core';
import{ EmailService } from '../shared/services/email.service'
import {DOCUMENT} from '@angular/common';
import { BehaviorSubject } from 'rxjs';
@Component({
  selector: 'app-chamber',
  templateUrl: './chamber.component.html',
  styleUrl: './chamber.component.scss'
})
export class ChamberComponent implements OnInit  {
  viewPort: 'all' | 'tipper' | 'exca'| 'water' = 'all';
  viewPortSubject = new BehaviorSubject<any>('all');

  chosenView! : {
     startDate: string;
     closingDate: string;
     price: number;
  };

  waterData = {
     startDate : '2025-09-09',
     closingDate : '2025-09-10',
     price : 900000,
  }

  tipperData = {
      startDate :'2025-09-07',
      closingDate : '2025-09-08',
      price : 1000000,
  }
  excData ={
       startDate : '2025-07-06',
       closingDate : '2025-08-09',
       price : 1000000,
  }
    constructor(@Inject(DOCUMENT) private readonly document: Document) {
        }

    ngOnInit(): void {
      this.addScript('assets/js/script.js');
    }

    private addScript(scriptSrc: string) {
          const script = this.document.createElement('script');
          script.type = 'text/javascript';
          script.src = scriptSrc;
          script.async = true;
          this.document.head.appendChild(script);
      }

      setView(input: 'all' | 'tipper' | 'exca'| 'water') {
        this.viewPort = input;
        this.viewPortSubject.next(input);
        if(input === 'tipper') {
          this.chosenView = this.tipperData;
        } else if (input === 'exca') {
          this.chosenView = this.excData
        } else if ( input === 'water') {
           this.chosenView = this.waterData;
        }
      }

      changetoAllView(){
        this.addScript('assets/js/script.js');
        this.viewPort  =  'all';
        this.viewPortSubject.next('all')
      }
}
