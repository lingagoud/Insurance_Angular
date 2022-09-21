import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  mail:string=''
 // captcha:string=''
 captcha1:number = 0
  password:string='abc'
  customer:Customer={
    id:0,
    name:'',
    email:'',
    contactNumber:'',
    address:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:''
  }
   randNumber:number = 0;
  constructor(private cs:CustomerService,private router:Router) { 
   // this.captcha=''
    this.password = 'bcd'
    this.randNumber = Math.round(Math.random()*10000000000);
  }

  ngOnInit(): void {
  }
  submit(captcha1:number,email:string){
    this.mail = email;
    if(captcha1 == this.randNumber){
      this.router.navigate(['reset/',this.mail]);
    }

    //this.captcha1 = captcha;
    //this.cs.getUser(this.mail).subscribe((data:Customer)=>(this.customer=data))
    //this.password=this.customer.password
  }
  resolved(captchaResponse:string){
   // this.captcha=captchaResponse;
  }

}