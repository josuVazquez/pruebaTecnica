import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TimestampApiService } from '@shared/services/timestamp-api.service';

@Component({
  selector: 'app-time-zone-page',
  templateUrl: './time-zone-page.component.html',
  styleUrls: ['./time-zone-page.component.scss']
})
export class TimeZonePageComponent {

  states: Array<string> = [];
  selectedStates: Array<string> = [];
  stateTimeStamps: Array<any> = [];
  filteredStates: Array<string> = [];
  multiSelect = new FormControl('');
  searchInput = new FormControl('');


  constructor(private api: TimestampApiService) {
    this.api.getTimeZone().subscribe( states => {
      this.states = states;
      this.filteredStates = states;
    });
  }

  onKey(event: any) { 
    this.filteredStates = this.search(event.target.value);
  }
    
  search(value: string) {
    const filter = value.toLowerCase();
    return this.states.filter(option => option.toLowerCase().includes(filter));
  }

  selectChange() {
    this.stateTimeStamps = [];
    this.selectedStates = [...this.multiSelect.value];
  }

  alreadySelected(state: string) {
    return this.selectedStates.find(st => st === state)
  }

}
