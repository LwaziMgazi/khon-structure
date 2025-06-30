import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit {
  activeRoute:any;
 constructor(private router: Router) {}

 ngOnInit(): void {
    this.router.events.subscribe(()=>{
      this.activeRoute = this.router.url;
    })
}

}
