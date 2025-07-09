import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LoaderService} from './loader.service'
import { Observable } from 'rxjs';
@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {
  loader: Observable<boolean>;

  constructor(public loaderService:LoaderService) {
    this.loader = loaderService.loader$;
   }

  ngOnInit(): void {
  }


}
