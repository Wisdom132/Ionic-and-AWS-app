import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})
export class EventService {
	constructor(private http: HttpClient) {}

	readonly rootURL: string = 'https://localhost:4000';

	getAllEvents() {
		return this.http.get(`${this.rootURL}/event`);
	}

	addEvent(payload) {
		return this.http.get(`${this.rootURL}/event`, payload);
	}
}
