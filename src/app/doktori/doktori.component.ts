import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doktori',
  templateUrl: './doktori.component.html',
  styleUrls: ['./doktori.component.css']
})
export class DoktoriComponent implements OnInit {
	
	prikaz = false;
	
	ime = '';
	ime3 = [];
	doktor = {
		ime1: '',
		ime2: ''
	};

  constructor() { }

  ngOnInit() {
  }

  dodaj(bla) {
  	this.prikaz = true;
  	this.ime = bla;
  	this.ime3.push(this.doktor.ime1, this.doktor.ime2);
  	if(this.doktor.ime1 === '' || this.doktor.ime2 === '') {
  		this.prikaz = false;
  		this.ime3.splice(2);
  		alert('polje je prazno')
  	 }
  	 this.doktor.ime1 = '';
  	 this.doktor.ime2 = '';
  	
  	console.log(bla.value);
  			
  }

}
