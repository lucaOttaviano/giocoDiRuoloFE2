import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-create-png',
  templateUrl: './create-png.component.html',
  styleUrls: ['./create-png.component.scss']
})
export class CreatePngComponent implements OnInit {

  constructor(private http: HttpClient, private ip: IpService) { }

  ngOnInit(): void {
  }

  // controlla i campi nome png e nome azienda e manda l'Ipv4 al server
  postIpv4(pngName: string, agencyName: string) {
    
    if (pngName != '' && agencyName != '') {
      this.http.post<any>(this.ip.baseUrl, { pngName: pngName, agencyName: agencyName }).subscribe(data => {        
      })
    }
    else if (pngName == '' ) {
      alert('Scegli il nome del tuo personaggio')
    }
    else if(agencyName == '') {
      alert('Scegli il nome della tua azienda')
    }
  }

}
