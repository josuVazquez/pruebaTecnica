import { Component, OnInit } from '@angular/core';

export interface TabItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent {
  tabs: TabItem[] = [
    {
      label: 'Stopwatch',
      icon: 'alarm_on',
      route: '/stop-watch',
    },
    {
      label: 'Time Zone',
      icon: 'date_range',
      route: '/zone',
    }
  ];

}
