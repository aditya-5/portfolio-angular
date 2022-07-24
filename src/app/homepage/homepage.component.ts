import { Component, OnInit, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit, OnDestroy {

  private cont: string[] = ["Namaste","Hello","Bună ziua","Hola","Nǐ hǎo"
                            ,"Zdraveite","Bonjour","Guten tag","Salve","Salam",
                            "Marhaba"];
  content: string;
  private index: number = 0;
  private count: number = 0;
  private up: boolean = true;
  constructionTimerr: string;
  private constructionInterval;


  constructor() { }

  ngOnInit(): void {
    this.type();
    this.constructionTime();
  }

  ngOnDestroy(): void {
    clearInterval(this.constructionInterval)
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

  private constructionTime(){
    // Set the date we're counting down to
    var countDownDate = new Date("Apr 5, 2021 15:37:25").getTime();

    // Update the count down every 1 second
    this.constructionInterval = setInterval(()=>{

      // Get today's date and time
      var now = new Date().getTime();
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.abs(Math.floor(distance / (1000 * 60 * 60 * 24)));
      var hours = Math.abs(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
      var minutes = Math.abs(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
      var seconds = Math.abs(Math.floor((distance % (1000 * 60)) / 1000));
        
      // Output the result in an element with id="demo"
      this.constructionTimerr = days + " days " + hours + " hours "
      + minutes + " minutes " + seconds + " seconds ";

      }, 1000);
  }








}
