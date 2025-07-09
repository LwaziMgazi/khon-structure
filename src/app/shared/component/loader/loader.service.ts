import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoaderService {

     loaderSubject$ = new BehaviorSubject<boolean>(false);
    loader$ = this.loaderSubject$.asObservable();

    constructor() { }

    startLoader(){
      this.loaderSubject$.next(true);
    }

    stopLoader(){
      this.loaderSubject$.next(false);
    }

}
