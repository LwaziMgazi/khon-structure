import { Component, Input, OnInit } from '@angular/core';
import  dayjs from 'dayjs';

@Component({
  selector: 'app-single-assets',
  templateUrl: './single-assets.component.html',
  styleUrl: './single-assets.component.scss'
})
export class SingleAssetsComponent implements OnInit {
  daysToStart:any;
  daysToClose: any;
  duration: any
  @Input() assetName!: string;
  @Input() assestData!: {
     startDate: string;
     closingDate: string;
     price: number;
  }
   constructor(){}
   ngOnInit(): void {

     this.daysToStart = dayjs(this.assestData.startDate).startOf('day').diff(dayjs(),'day');
     this.duration = dayjs(this.assestData.closingDate).startOf('day').diff(dayjs(this.assestData.startDate).startOf('day'),'day')
   }
}
