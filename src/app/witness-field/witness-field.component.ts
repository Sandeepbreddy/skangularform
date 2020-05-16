import { DataTransportService } from './../Services/data-transport.service';
import { Component, OnInit } from '@angular/core';
import { WitnessModel } from '../models/witnessModel';
import { Relation } from '../models/generalModels';

@Component({
  selector: 'app-witnessfield',
  templateUrl: './witness-field.component.html',
  styleUrls: ['./witness-field.component.css']
})
export class WitnessFieldComponent implements OnInit {
  relations: Relation[] = [
    { value: 'son-of', viewValue: 'S/o' },
    { value: 'wife-of', viewValue: 'W/o' },
    { value: 'daughter-of', viewValue: 'D/o' }
  ];

  genders: string[] = ['male', 'female'];

  witness = new WitnessModel();
  witnessArray = [];

  constructor(private dataTransportService: DataTransportService) {}

  ngOnInit() {
    this.witnessArray.push(this.witness);
  }
  addWitness() {
    this.dataTransportService.sendWitnessData(this.witnessArray);
  }
  addWitnessView() {
    this.witness = new WitnessModel();
    this.witnessArray.push(this.witness);
  }
  deleteWitness(i: number) {
    this.witnessArray.splice(i);
  }
}
