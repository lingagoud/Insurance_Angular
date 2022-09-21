import { Component, OnInit } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  mail:string=''
  password:string=''
  cpass:string=''
  customer:Customer={
    id:0,
    name:'',
    email:'',
    contactNumber:'',
    address:'',
    dateOfBirth:new Date(1000, 0, 0, 0, 0, 0, 0),
    password:''
  }
  constructor(private cs:CustomerService,private router:Router,private activatedroute:ActivatedRoute) {
    
   }

  ngOnInit(): void {
    const temail=this.activatedroute.snapshot.paramMap.get('email')
    
    this.mail=String(temail)
    this.cs.getUser(this.mail).subscribe((data:Customer)=>{this.customer=data})
    console.log(this.customer)
  }
  reset(pass:string,cpass:string){
    this.password=pass
    this.cpass=cpass
    //this.cs.getUser(this.mail).subscribe((data:Customer)=>{this.customer=data})
    

    if(this.password==this.cpass)
    {
      this.customer.password=this.password
      this.cs.editUser(this.mail,this.password).subscribe(()=>{
        alert("Record Updated Successfuly")
        this.router.navigate(['login'])
    })
  }
    else{
      alert("Please enter password again!!")
      this.router.navigate(['reset/',this.mail])
    }
}

}