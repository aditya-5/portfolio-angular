import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  private cont: string[] = ["Namaste","Hello","Bună ziua","Hola","Nǐ hǎo"
                            ,"Zdraveite","Bonjour","Guten tag","Salve","Salam",
                            "Marhaba"];
  content: string;
  private index: number = 0;
  private count: number = 0;
  private up: boolean = true;
  constructor() { }

  ngOnInit(): void {
    this.type();
  }

  private type(){

    let word: string = this.cont[this.count];

    if(this.up){
    this.content = word.slice(0,this.index);
    this.index +=1;
  }

    if(this.index == word.length +1){
      this.up = false;
    }

    if(!this.up){
      this.content = this.content.slice(0,this.index);
      this.index-=1;
    }

    if(this.index==0){
      this.up = true;
      this.count+=1;
    }

    if(this.count == this.cont.length){
      this.count=0;
    }

    setTimeout(() => {
      this.type();
    }, 200);
  }








}
