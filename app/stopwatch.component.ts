import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: '<h2>{{counter}}</h2>'
})
export class StopwatchComponent {
	shouldRun:boolean = false;
	counter:number = 0;
	timer:number = 1000;
	interval : any;
	start() {
	      this.shouldRun = true;
		  this.interval = setInterval(() =>
  	      {  
			if(this.shouldRun === false){
			   clearInterval(this.interval);
			}
		    this.counter = this.counter + 1;			
	      }, this.timer);
	}
	stop() {
	   this.shouldRun = false;
	}
	restart(){
		this.counter = 0;
		this.start();
	}
	faster(){
		if(this.timer > 1000)
		{
			this.stop()
			clearInterval(this.interval);
			this.timer = this.timer - 1000;
			this.start();
		}
	}
	slower(){
		this.stop();
		clearInterval(this.interval);
		this.timer = this.timer + 1000;
		this.start();
	}
}    