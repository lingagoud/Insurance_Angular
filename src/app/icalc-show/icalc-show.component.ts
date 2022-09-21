import { Component, OnInit } from '@angular/core';
import { Iplan } from '../iplan';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../plan.service';
@Component({
  selector: 'app-icalc-show',
  templateUrl: './icalc-show.component.html',
  styleUrls: ['./icalc-show.component.css']
})
export class IcalcShowComponent implements OnInit {

  plandata:Iplan={
    id:0,
    type:'',
    amount:0.00,
    typeofvehicle:'',
    term:0
  }
  typeofvehicle:string=''
  type:string=''
  duration:number=0
  age:number = 0;
  constructor(private router:Router,private activateroute:ActivatedRoute, private planService:PlanService) { }

  ngOnInit(): void {
    const ttype=this.activateroute.snapshot.paramMap.get('type')
    const tduration=this.activateroute.snapshot.paramMap.get('duration')
    const ttypeofvehicle=this.activateroute.snapshot.paramMap.get('typeofvehicle')
    const ageV = this.activateroute.snapshot.paramMap.get('age');
    this.typeofvehicle=String(ttypeofvehicle)
    this.type=String(ttype)
    this.duration=Number(tduration)
    this.age = Number(ageV)
    this.planService.GetPlanCalc(this.typeofvehicle,this.type,this.duration,this.age).subscribe((data:Iplan)=>{this.plandata=data})
     console.log(this.plandata)
  }
  BuyInsurance(){
    this.router.navigate(['Ibuy']) 
  }

  back(){
    this.router.navigate(['Icalc']);
  }

}
