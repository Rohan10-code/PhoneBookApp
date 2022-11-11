import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ContactserviceService } from '../service/contactservice.service';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-contact-add-update',
  templateUrl: './contact-add-update.component.html',
  styleUrls: ['./contact-add-update.component.css']
})
export class ContactAddUpdateComponent implements OnInit {

  contactData:any
  heading:string = 'Add Contact'
  userid:any

  contactForm = new FormGroup({
    fname: new FormControl('',Validators.required,),
    lname: new FormControl('',Validators.required),
    tel: new FormControl('',[Validators.required,Validators.maxLength(12),Validators.minLength(12),Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{4}')])
  });

  constructor(
    private service:ContactserviceService,
    private router:Router,
    private route:ActivatedRoute
  ) {}

  ngOnInit(): void {

    const routerParams = this.route.snapshot.paramMap;
    this.userid = Number(routerParams.get('id')) 


    if(this.userid != 0){
      this.heading='Edit Contact';
      this.find(this.userid);

    }else{
      sessionStorage.setItem('id','');
    }

  }

  onSubmit(){

    this.contactData={
      "firstName":this.contactForm.get('fname')?.value,
      "lastName":this.contactForm.get('lname')?.value,
      "phoneNumber":this.contactForm.get('tel')?.value
    }

    if(this.userid != 0){
      this.service.updateContact(this.userid as number , this.contactData as any).subscribe(data=>{
        alert(data.message);
        
      });

    }else{
      this.service.addContact(this.contactData as any).subscribe(data=>{
        if( typeof(data.id)!= undefined ){
          alert('Contact Added');
          this.contactForm.setValue({fname:'',lname:'',tel:''});
        }else{
          alert('There was an error while adding contact');
        }
      });
    }
  }

  find(id:number){
    this.service.findConatct(id as number).subscribe(data=>{
      console.log(data);
      this.contactForm.setValue({fname:data.firstName, lname:data.lastName, tel:data.phoneNumber });
    })
  }

}
