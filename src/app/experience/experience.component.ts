import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

  experienceType: boolean[] = [false, true, false];


  constructor() { }

  ngOnInit(): void {
  }

  changeExpType(n : number){
    for(let i=0;i<this.experienceType.length;i++){
      this.experienceType[i] = !this.experienceType;
    }

    this.experienceType[n] = true
  }

}
