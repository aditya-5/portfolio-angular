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


  constructor() { }

  ngOnInit(): void {
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
}
