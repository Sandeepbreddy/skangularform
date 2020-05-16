import { HttpClient } from '@angular/common/http';
import { AccusedModel } from './models/accusedModel';
import { WitnessModel } from './models/witnessModel';
import { FormDetails } from './models/formDetails';
import { DataTransportService } from './Services/data-transport.service';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'sample-form';
  public formValues: FormDetails;
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  url = 'www.google.com'; // Enter URL here

  constructor(
    private http: HttpClient,
    private dataTransportService: DataTransportService
  ) {
    this.formValues = new FormDetails();
  }
  ngOnInit() {
    this.dataTransportService.witnessesInfo$.subscribe((response) => {
      this.formValues.Witnesses = response;
    });
    this.dataTransportService.accusersInfo$.subscribe((response) => {
      this.formValues.Accusers = response;
    });
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our ACT
    if ((value || '').trim()) {
      this.formValues.Act.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(act): void {
    const index = this.formValues.Act.indexOf(act);

    if (index >= 0) {
      this.formValues.Act.splice(index, 1);
    }
  }

  addSection(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our Section
    if ((value || '').trim()) {
      this.formValues.Sections.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  removeSection(section): void {
    const index = this.formValues.Sections.indexOf(section);

    if (index >= 0) {
      this.formValues.Sections.splice(index, 1);
    }
  }

  generateJson() {
    console.log(this.formValues);
    this.http
      .post(this.url, this.formValues)
      .toPromise()
      .then((data) => {
        console.log(data);
      });
  }
}
