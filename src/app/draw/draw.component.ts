import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Agency } from '../interfaces/agency';
import { Player } from '../interfaces/player';
import { AgenciesService } from '../services/agencies.service';
import { IpService } from '../services/ip.service';

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.scss']
})
export class DrawComponent implements OnInit {

  players: Player[] = [];
  agencies: Agency[] = [];
  drawing: boolean = false;

  constructor(private http: HttpClient, private ip: IpService, private agenciesService: AgenciesService) { }
  ngOnInit(): void {
    this.draw();
    this.getPlayers();
  }

  getPlayers() {
    this.http.get<Player[]>(this.ip.baseUrl + 'api/getPlayers').subscribe(data => {
      this.players = data;
      this.draw();
    })
  }

  draw() {
    this.agencies = this.agenciesService.agencies;
    // for (let i = 0; i < this.players.length; i++) {
    //   let x = Math.floor((Math.random() * 4) + 1);
    //   console.log(x);
    //   console.log(this.agenciesService.agencies[x - 1])
    // }
  }

  actives: boolean[] = [false, false, false, false];
  selectAgency(i: number) {
    for (let a = 0; a < 4; a++) {
      if (i == a) {
        this.actives[a] = !this.actives[a];
        document.getElementById('agencyCard' + a)!.classList.add('selected')
      }
      else {
        this.actives[a] = false;
        document.getElementById('agencyCard' + a)!.classList.remove('selected')
      }
    }
  }
}

