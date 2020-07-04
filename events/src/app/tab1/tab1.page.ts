import { Component } from '@angular/core';
import { EventService } from '../../app/api/event.service';

@Component({
	selector: 'app-tab1',
	templateUrl: 'tab1.page.html',
	styleUrls: [ 'tab1.page.scss' ]
})
export class Tab1Page {
	constructor(private Event: EventService) {}

	getEvents() {
		console.log('hello');
		this.Event.getAllEvents().subscribe((data: any) => {
			console.log(data);
		});
	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		this.getEvents();
	}
}
