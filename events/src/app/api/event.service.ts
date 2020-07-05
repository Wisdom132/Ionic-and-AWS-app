import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	constructor(private http: HttpClient) {}

	readonly rootURL: string = 'http://localhost:4000';

	getAllEvents() {
		return this.http.get(`${this.rootURL}/event`);
	}

	addNewEvent(payload) {
		return this.http.post(`${this.rootURL}/event`, payload);
	}
}
