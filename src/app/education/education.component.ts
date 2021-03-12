import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
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
