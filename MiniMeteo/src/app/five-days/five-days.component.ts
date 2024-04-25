import { Component } from '@angular/core';
import { APICallsService } from '../apicalls.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-five-days',
  templateUrl: './five-days.component.html',
  styleUrls: ['./five-days.component.css']
})
export class FiveDaysComponent {
  query: string;
  title = 'first-routed-app';
  obsCW: Observable<Object>;
  results: any;
  selectedIndex: number = 0;

  constructor(public call: APICallsService) { }

  submit(query: HTMLInputElement): void {
    if (!query.value) {
      return;
    }
    this.query = query.value;
    this.obsCW = this.call.search5D(this.query);
    this.obsCW.subscribe((data) => {
      this.results = data;
      this.selectedIndex = 0; // Reset selectedIndex when new data is fetched
    });
  }

  nextItem() {
    this.selectedIndex = (this.selectedIndex === this.results.list.length - 1) ? 0 : this.selectedIndex + 1;
  }

  prevItem() {
    this.selectedIndex = (this.selectedIndex === 0) ? this.results.list.length - 1 : this.selectedIndex - 1;
  }
}
