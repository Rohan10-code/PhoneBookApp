import { Component, OnInit } from '@angular/core';
import { ContactserviceService } from '../service/contactservice.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactData:any
  contactSearch:string=''
  contactCopy:any

  constructor(
    private service:ContactserviceService
  ) {}
  
  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getAllContact().subscribe(data=>{
      this.contactData=data
      this.contactCopy=this.contactData
    });
  }

  deleteContact(id:any){
    this.service.deleteContact(id as number).subscribe(data=>{
      alert(data.message);
      if(data.code=='200'){
        this.contactData=this.contactData.filter( (a:any) => a.id != id );
        this.contactCopy=this.contactData
      }
    });
  }

  // onChangeSearch(){
  //   this.contactSearch

  //   this.contactData=this.contactCopy

  //   this.contactData=this.contactData.filter( (a:any) => a.id != id );
    


  // }


}
