import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ValidateService } from '../validate.service';
@Component({
  selector: 'app-irenew',
  templateUrl: './irenew.component.html',
  styleUrls: ['./irenew.component.css']
})
export class IrenewComponent implements OnInit {

  policyNo:number = 0;
  mobileNo:string = '';
  mail:string= '';
  constructor(private router:Router,private vs:ValidateService) {

   }

  ngOnInit(): void {

  }

  submit(policyNo:number,mobileNo:string,email:string){
    this.policyNo = policyNo;
    this.mobileNo = mobileNo;
    this.mail = email;

    this.vs.getValidate(this.policyNo,this.mobileNo,this.mail).subscribe(()=>{
      alert('Validated policy.....');
      this.router.navigate(['Renew/',this.policyNo])
    })

    
  }

}
