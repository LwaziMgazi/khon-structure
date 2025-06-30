import { Component, OnInit, Inject } from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-chamber',
  templateUrl: './chamber.component.html',
  styleUrl: './chamber.component.scss'
})
export class ChamberComponent implements OnInit  {
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
