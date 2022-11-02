import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IpService {

  baseUrl: string = 'http://192.168.1.179:3000/api/Ipv4/'


  constructor() { }
}
