import { AccusedModel } from './../models/accusedModel';
import { WitnessModel } from './../models/witnessModel';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransportService {
  private witnessesData = new Subject<WitnessModel[]>();
  private accusersData = new Subject<AccusedModel[]>();

  witnessesInfo$ = this.witnessesData.asObservable();
  accusersInfo$ = this.accusersData.asObservable();

  constructor() {}

  sendWitnessData(witnessData: WitnessModel[]) {
    this.witnessesData.next(witnessData);
  }

  sendAccusedData(accuserData: AccusedModel[]) {
    this.accusersData.next(accuserData);
  }
}
