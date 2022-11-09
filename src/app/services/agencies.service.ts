import { Injectable } from '@angular/core';
import { Agency } from '../interfaces/agency';

@Injectable({
  providedIn: 'root'
})
export class AgenciesService {

  agencies: Agency[] = [
    {
      agencyName: 'Aerospaziale',
      agencyIndex: 1,
      agencyIcon: 'bi-robot'
    }, {
      agencyName: 'Automobilistica',
      agencyIndex: 2,
      agencyIcon: 'bi-robot'
    }, {
      agencyName: 'Bellica',
      agencyIndex: 3,
      agencyIcon: 'bi-robot'
    }, {
      agencyName: 'Robotica',
      agencyIndex: 4,
      agencyIcon: 'bi-robot'
    }
  ]

  constructor() { }
}
