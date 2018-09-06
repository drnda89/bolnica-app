import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  @Input() event;
  spisakPacijenata = [];
  ime1 = 'Mitar Miric';
  jmbg1 = '445566778899';
  bzk1 = '1234';
  prikaz = false;
  constructor() { }

  ngOnInit() {
  }

  pacijenti(ime, jmbg, bzk) {
  	this.spisakPacijenata.push(ime, jmbg, bzk);
  	this.ime1 = '';
  	this.jmbg1 = '';
  	this.bzk1 = '';
  	this.prikaz = true;
  }


}
