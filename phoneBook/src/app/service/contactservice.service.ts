import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactserviceService {

  url="http://localhost:8000/";

  constructor(private http:HttpClient) { }

  httpOptions ={
    headers : new HttpHeaders({
      'content-type' : 'application/json'
    })
  };

  getAllContact(){
    return this.http.get<any>(this.url+'api/contact/'); 
  }

  addContact(data:any):Observable<any>{
    return this.http.post(this.url+'api/contact/',data,this.httpOptions)
  }

  findConatct(id:number):Observable<any>{
    return this.http.get<any>(this.url+'api/contact/'+id);
  }
  
  updateContact(id:number,data:any):Observable<any>{
    return this.http.put<any>(this.url+'api/contact/'+id,data,this.httpOptions);
  }
  deleteContact(id:number):Observable<any>{
    return this.http.delete<any>(this.url+'api/contact/'+id,this.httpOptions);
  }
}
