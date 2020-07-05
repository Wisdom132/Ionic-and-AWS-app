import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EventService } from '../../app/api/event.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
	selector: 'app-tab2',
	templateUrl: 'tab2.page.html',
	styleUrls: [ 'tab2.page.scss' ]
})
export class Tab2Page {
	fileToUpload: File = null;

	eventForm = new FormGroup({
		name: new FormControl(''),
		description: new FormControl('')
	});

	handleFileInput(files: FileList) {
		this.fileToUpload = files.item(0);
		console.log(this.fileToUpload);
	}

	addEvent() {
		const formData: FormData = new FormData();
		formData.append('image', this.fileToUpload, this.fileToUpload.name);
		formData.append('name', this.eventForm.value.name);
		formData.append('description', this.eventForm.value.description);
		this.Event.addEvent(formData).subscribe(
			(data: any) => {
				console.log(data);
			},
			(err: HttpErrorResponse) => {
				console.log({ error: err });
			}
		);
	}
	constructor(private Event: EventService) {}
}
