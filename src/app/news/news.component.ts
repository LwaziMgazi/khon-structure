import { Component, Inject, OnInit } from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent implements OnInit {
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
