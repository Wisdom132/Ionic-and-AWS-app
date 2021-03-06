import { Component } from '@angular/core';
import { EventService } from '../../app/api/event.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page {
	constructor(private Event: EventService) {}
	events = [];

	getEvents() {
		console.log('hello');
		this.Event.getAllEvents().subscribe((data: any) => {
			this.events = data.data.reverse();

			//the reverse method will get from the latest event added
		});
	}

	doRefresh(e) {
		this.getEvents();
	}
	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.getEvents();
	}
}
