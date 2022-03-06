import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss']
})
export class StopWatchComponent {
  
  @Output() startStop: EventEmitter<any> = new EventEmitter();

  counter: Date = new Date();
  running = false;
  iconText = 'play_arrow';
  timerRef: any;

  constructor() {
    this.resetTimer();
  }

  toggleTimer() {
    this.running = !this.running;
    if (this.running) {
      this.iconText = 'stop';
      const startTime = Date.now() - this.counter.getTime();
      this.timerRef = setInterval(() => {
        this.counter = new Date(Date.now() - startTime);
      });
    } else {
      this.iconText = 'play_arrow';
      clearInterval(this.timerRef);
    }
    this.startStop.emit({time: this.counter, event: this.iconText})
  }

  resetTimer() {
    const now = new Date();
    now.setHours(0);
    now.setMinutes(0);
    now.setSeconds(0);
    now.setMilliseconds(0);
    this.counter = now;
  }

}
