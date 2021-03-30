import { Component, OnInit , OnDestroy} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ContactService} from './contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy {
  msg: Subscription
  sent: boolean= false;
  error: boolean = false;

  constructor(private contactservice : ContactService ) {

 }

  ngOnInit(): void {
      this.msg = this.contactservice.msg.subscribe(msg=>{
        if(msg){
          this.sent = msg;
          setInterval(()=>{
            this.sent=false;
          },5000)
        }
        else{
          this.error = true;
          setInterval(()=>{
            this.error=false;
          },5000)
        }
      });
  }
  ngOnDestroy(){
    this.msg.unsubscribe();
  }


  onSubmit(f:NgForm){
    const fname = f.value.fname;
    const lname = f.value.lname;
    const email = f.value.email;
    const comments = f.value.comments;

    this.contactservice.submit(fname,lname,email,comments);
    f.reset();
  }

}
