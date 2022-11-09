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
  postIpv4(pngName: string) {

    if (pngName != '') {
      this.http.post<string>(this.ip.baseUrl + 'api/Ipv4/', { pngName: pngName }).subscribe(data => {
        window.location.replace('/draw')
      })
    }
    else if (pngName == '') {
      alert('Scegli il nome del tuo personaggio')
    }
  }

}
