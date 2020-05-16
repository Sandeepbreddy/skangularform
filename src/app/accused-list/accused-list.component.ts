import { AccusedModel } from './../models/accusedModel';
import { Component, OnInit } from '@angular/core';
import { DataTransportService } from '../Services/data-transport.service';

@Component({
  selector: 'app-accused-list',
  templateUrl: './accused-list.component.html',
  styleUrls: ['./accused-list.component.css'],
})
export class AccusedListComponent implements OnInit {
  accused = new AccusedModel();
  accusedArray = [];
  constructor(private dataTransportService: DataTransportService) {}

  ngOnInit(): void {
    this.accusedArray.push(this.accused);
  }
  addAccuser() {
    this.dataTransportService.sendAccusedData(this.accusedArray);
  }
  addAccuserView() {
    this.accused = new AccusedModel();
    this.accusedArray.push(this.accused);
  }
  deleteAccuser(i: number) {
    this.accusedArray.splice(i);
  }
}
