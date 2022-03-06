import { Component, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TimestampApiService } from '@shared/services/timestamp-api.service';

@Component({
  selector: 'app-digital-watch',
  templateUrl: './digital-watch.component.html',
  styleUrls: ['./digital-watch.component.scss']
})
export class DigitalWatchComponent implements OnInit{

  @Input() state: string = '';
  $stateTime: Observable<any> = new Observable();

  constructor(private api: TimestampApiService) {

  }

  ngOnInit(): void {
    this.$stateTime = this.api.getTimeStamp(this.state);
  }
}
