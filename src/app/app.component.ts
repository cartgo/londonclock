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
  // now: Date;
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
    if (this.hours >=12){this.am = false;
      if(this.hours>12){this.hours -=12;}}else{
        this.am = true;
    }

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
          this.am = !this.am;
    }
  }


    k(event){
      if(event.keyCode  ===13 ){
        this.pause = false;
        this.htf = true;
        this.mtf = true;
        this.stf = true;
      }
    }
 
  }



 
     
