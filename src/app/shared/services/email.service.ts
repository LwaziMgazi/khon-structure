import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {IEmailInterface} from '../interfaces'
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient ) { }

  sendEmailToClient(payLoad: IEmailInterface){
    return this.http.post<any>(`https://api.lcubedsolutions.co.za/email/client`,payLoad)
  }
}
