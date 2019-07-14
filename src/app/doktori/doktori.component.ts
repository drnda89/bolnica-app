import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { ShareService } from '../share.service';

@Component({
  selector: 'app-doktori',
  templateUrl: './doktori.component.html',
  styleUrls: ['./doktori.component.css']
})
export class DoktoriComponent implements OnInit {
	// @Output() izDoktori = new EventEmitter()

	prikaz = true;
	ime = '';
	ime3 = [];
	doktor = {
		ime1: 'Bojan Drinic',
		spec1: 'Hirurg'
	};
	dr = '';

  constructor(private share: ShareService) { }

  ngOnInit() {
  }

  dodaj(forma) {
		this.prikaz = true;
		this.dr = forma.value;
		this.ime3.push(this.dr);
		console.log(this.doktor);
	 
  	if(this.doktor.ime1 === '' || this.doktor.spec1 === '') {
  		this.prikaz = false;
		this.ime3.splice(1);
		this.ime3.pop();
  		alert('polje je prazno')
		 }

		this.doktor.ime1 = '';
		this.doktor.spec1 = '';

    // this.ime3.forEach((ime) => ime)
    //  for(let i = 0; i < this.ime3.length; i++) {
    //    this.share.razmena.emit(this.ime3[i]);
    // }

    console.log(this.ime3);
  this.share.razmena.emit(this.ime3);  
    
  	console.log(forma);			
      }

}
