import { WitnessModel } from './witnessModel';
import { AccusedModel } from './accusedModel';
import { Time } from '@angular/common';

export class FormDetails {
  NameOfPoliceStation?: string;
  NameOfCourt?: string;
  CaseRegisterNumber?: string;
  City?: string;
  Act?: string[] = [];
  Sections?: string[] = [];
  Description?: string;
  RegisteredBy?: string;
  ChargeSheetedBy?: string;
  Doctor?: string;
  DateOfOccurance?: Date;
  TimeOfOccurance?: Time;
  PlaceOfOccurance?: string;
  DateOfReport?: Date;
  TimeOfReport?: Time;
  SceneOfOffenceDescription?: string;
  public Witnesses?: WitnessModel[];
  public Accusers?: AccusedModel[];
}
