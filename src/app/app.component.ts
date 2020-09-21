import { NodeWithI18n } from '@angular/compiler';
import { Component, Input , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'londonclock';
  Title = 'London Clock'; 
  hours:number;
  minutes:number;
  seconds:number;
  am: Boolean;
 
  htf: boolean = true;
  mtf: boolean = true;
  stf: boolean = true;
  pause: boolean = false;


  
  ngOnInit() {
    let now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
    this.am = true;
    if (this.hours >=12){this.am = !this.am;
      this.hours = 0;}
   

    setInterval(() => {
      if(this.pause ==false){
      // this.seconds ++;
      // if( this.seconds >= 60){
      //   this.seconds -= 60;
      //   this.minutes++;
      // }
      // if (this.minutes >= 60){
      //   this.minutes -= 60;
      //   this.hours++;
      // }
      // if (this.hours >=12){
      //     this.am = !this.am;
      this.fly();
      }
   
    }, 1000);
  }
 
    fly= () =>{

      this.seconds ++;
      if( this.seconds >= 60){
        this.seconds -= 60;
        this.minutes++;
      }
      if (this.minutes >= 60){
        this.minutes -= 60;
        this.hours++;
      }
      if (this.hours >=12){
        this.hours -=12;
          this.am = !this.am;
    }
  }


    k(event,inputhh?,inputmm?,inputss?){
      if(event.keyCode  ===13 ){
        if (this.htf == false) {this.hours  = Math.round(inputhh.value)}
        if (this.mtf == false) {this.minutes = Math.round(inputmm.value);}
        if (this.stf == false) {this.seconds = Math.round(inputss.value);};

        if(inputhh.value >12|| inputhh.value < 0 ){this.hours = 0;alert("please enter number between 0 - 12")}
        if(inputmm.value >60|| inputmm.value < 0 ){this.minutes = 0;alert("please enter number between 0 - 60")}
        if(inputss.value >60|| inputss.value < 0 ){this.seconds = 0;alert("please enter number between 0 - 60")}
        this.pause = false;
        this.htf = true;
        this.mtf = true;
        this.stf = true;
      }
    }
 
  }



 
     
