import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  spisakPacijenata = [];
  ime1 = 'Mitar Miric';
  jmbg1 = '445566778899';
  bzk1 = '1234';
  
  constructor() { }

  ngOnInit() {
  }

  pacijenti(ime, jmbg, bzk) {
  	this.spisakPacijenata.push(ime, jmbg, bzk);
  	this.ime1 = '';
  	this.jmbg1 = '';
  	this.bzk1 = '';
  }
}
