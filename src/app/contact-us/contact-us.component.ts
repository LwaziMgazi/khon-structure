import { Component , Inject, OnInit} from '@angular/core';
import {DOCUMENT} from '@angular/common';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent implements OnInit{
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
