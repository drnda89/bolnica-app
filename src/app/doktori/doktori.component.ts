import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-doktori',
  templateUrl: './doktori.component.html',
  styleUrls: ['./doktori.component.css']
})
export class DoktoriComponent implements OnInit {
	// @Output() izDoktori = new EventEmitter()

	prikaz = false;
	ime = '';
	ime3 = [];
	doktor = {
		ime1: '',
		spec1: ''
	};

  constructor(private share: ShareService) { }

  ngOnInit() {
  }

  dodaj(bla) {
  	this.prikaz = true;
  	this.ime3.push(this.doktor);
  	// if(this.doktor.ime1 === '' || this.doktor.spec1 === '') {
  	// 	this.prikaz = false;
  	// 	this.ime3.splice(2);
  	// 	alert('polje je prazno')
		//  }
	// this.doktor.ime1 = '';
	// this.doktor.spec1 = '';

    this.share.razmena.emit(bla.value);	
  	console.log(bla.value);			
  }

}
