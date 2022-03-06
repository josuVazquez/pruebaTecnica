import { Component } from '@angular/core';

@Component({
  selector: 'app-stop-watch-page',
  templateUrl: './stop-watch-page.component.html',
  styleUrls: ['./stop-watch-page.component.scss']
})
export class StopWatchPageComponent {

  counterList: Array<any> = [];
  reverse = false;

  startStop(obj: any) {
    this.counterList.push(obj);
  }

  resetList() {
    this.counterList = [];
  }
}
