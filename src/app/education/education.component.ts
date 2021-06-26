import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(10%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(10%)'}))
      ])
    ])
  ]
})
export class EducationComponent implements OnInit {

  MANC:boolean= false;
  DPS:boolean= false;
  IIT:boolean= false;
  informalBool: boolean= false;
  formalBool: boolean= true;
  informalList: boolean[] = new Array();

  constructor() {
      for(let i=0;i<=this.informalList.length-1;i++){
    this.informalList[i] = false;
    }
}

  ngOnInit(): void {
  }

  // switch(){
  //   this.switchBool = !this.switchBool;
  // }

  switchToFormal(){
    this.informalBool = false;
    this.formalBool = true;
  }

  switchToInformal(){
    this.informalBool = true;
    this.formalBool = false;
  }

  toggleManc(){
    if(this.MANC){
      this.MANC = false;
    }
    else{
      this.MANC = true;
    }

  }

  toggleIIT(){
    if(this.IIT){
      this.IIT = false;
    }
    else{
      this.IIT = true;
    }
  }

  toggleDPS(){
    if(this.DPS){
      this.DPS = false;
    }
    else{
      this.DPS = true;
    }
  }


  toggleInformal(x:Number){
    this.informalList[+x] = !this.informalList[+x];
  }


}
