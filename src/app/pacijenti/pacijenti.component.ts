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
<<<<<<< HEAD
  prikazOpcije = false;
=======
  imeSelect;
  show = true;
>>>>>>> 64ffb2b870add92cf0e2685612197f2882989a27

  constructor(private share: ShareService) {
    this.share.razmena.subscribe((bla) => this.imeDoktora = bla);
   }

  ngOnInit() {
  	
  }
  

  pacijenti(ime, jmbg, bzk) {
  	this.spisakPacijenata.push(ime, jmbg, bzk);
  	this.prikaz = true;
  	if(this.ime1 === '' || this.jmbg1 === '' || this.bzk1 === '') {
 		this.prikaz = false;
 		alert('prazno polje');
 	}
  	this.ime1 = '';
  	this.jmbg1 = '';
    this.bzk1 = '';
    
   
    this.prikazOpcije = true;
  }
<<<<<<< HEAD
=======

  onChange(deviceValue) {
    this.imeSelect = deviceValue;
    this.spisakPacijenata.push(deviceValue);
  	this.prikaz = true;
  
  	this.ime1 = '';
  	this.jmbg1 = '';
  	this.bzk1 = '';
  	this.show = false;
}


>>>>>>> 64ffb2b870add92cf0e2685612197f2882989a27
}
