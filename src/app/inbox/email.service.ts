import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from './email';
 
interface EmailSummary{
  id: string,
  subject: string,
  form: string
}
// interface Email {
//   id: string,
//   subject: string,
//   form: string,
//   text: string,
//   html: string
// }

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) {}

  rootUrl = 'https://api.angular-email.com/';

  getEmails(){
    return this.http.get<EmailSummary[]>(`${this.rootUrl}emails`);
  }

  getEmail(id: string){
    return this.http.get<Email>(`${this.rootUrl}emails/${id}`)
  }

  sendEmail(email: Email){
    return this.http.post(`${this.rootUrl}emails`, email);
  }
}
