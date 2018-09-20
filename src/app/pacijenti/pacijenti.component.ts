import { Component, OnInit, Input } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  // @Input() event;
  spisakPacijenata = [];
  ime1 = 'Mitar Miric';
  jmbg1 = '445566778899';
  bzk1 = '1234';
  prikaz = false;
  imeDoktora;
  imeSelect;
  show = true;
  pc;

  constructor(private share: ShareService) {
    this.share.razmena.subscribe((bla) => this.imeDoktora = bla);
   }

  ngOnInit() {
  
  }
  
  pacijenti(ime, jmbg, bzk) {
  	this.pc = ime + jmbg + bzk;
  	this.spisakPacijenata.push(this.pc);

  	this.prikaz = true;
  	if(this.ime1 === '' || this.jmbg1 === '' || this.bzk1 === '') {
      this.prikaz = false;
      alert('prazno polje');
 	}
  	this.ime1 = '';
  	this.jmbg1 = '';
    this.bzk1 = '';
  	console.log(this.imeDoktora);
}

onChange(deviceValue) {
  this.imeSelect = deviceValue;
  this.spisakPacijenata.push('Izabrani Lekar: '+ deviceValue);
  this.prikaz = true;
  this.ime1 = '';
  this.jmbg1 = '';
  this.bzk1 = '';
  this.show = false;
}

}
