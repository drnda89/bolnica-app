import { Component, OnInit, Input } from '@angular/core';

import { ShareService } from '../share.service';
import { Model } from '../model';

@Component({
  selector: 'app-pacijenti',
  templateUrl: './pacijenti.component.html',
  styleUrls: ['./pacijenti.component.css']
})
export class PacijentiComponent implements OnInit {
  // @Input() event;
  spisakPacijenata = [];
  ime1 = 'Marko Markovic';
  jmbg1 = 445566778899;
  bzk1 = 234;
  pc; 
  prikaz = false;
  imeDoktora = [];
  show = true;


  constructor(private share: ShareService) {
    this.share.razmena.subscribe(doktor => this.imeDoktora = doktor);
   }

  ngOnInit() {
  }
  
  pacijenti(forma) {
    this.spisakPacijenata.push(forma.value);
    new Model(this.ime1, this.jmbg1, this.bzk1, this.pc);
  	this.prikaz = true;
  	if(this.ime1 === '' || this.jmbg1 === null || this.bzk1 === null) {
      this.prikaz = false;
      this.spisakPacijenata.splice(1);
			this.spisakPacijenata.pop();
      alert('prazno polje');
   } else if(!this.imeDoktora) {
   		alert('Nema slobodnog doktora!');
   		this.prikaz = false;
   }
   	this.ime1 = '';
  	this.jmbg1 = null;
    this.bzk1 = null;
    this.pc = '';
    console.log(forma.value);
}

onChange(deviceValue) {
  this.pc = deviceValue;
  this.prikaz = true;
  // this.ime1 = '';
  // this.jmbg1 = '';
  // this.bzk1 = '';
  this.show = true;
  console.log(this.spisakPacijenata);
  console.log(deviceValue);
}

}
