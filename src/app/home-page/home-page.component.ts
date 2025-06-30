import { AfterViewInit, Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
// @ts-ignore
import * as $ from 'jquery';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
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

}
