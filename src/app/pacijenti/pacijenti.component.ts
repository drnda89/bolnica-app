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
  ime1 = 'Marko Markovic';
  jmbg1 = '445566778899';
  bzk1 = '1234';
  prikaz = false;
  imeDoktora = [];
  show = true;
  pc;

  constructor(private share: ShareService) {
    this.share.razmena.subscribe((forma) => this.imeDoktora = forma);
   }

  ngOnInit() {
  }
  
  pacijenti(forma) {
  	this.spisakPacijenata.push(forma.value);
  	this.prikaz = true;
  	if(this.ime1 === '' || this.jmbg1 === '' || this.bzk1 === '') {
      this.prikaz = false;
      this.spisakPacijenata.splice(1);
			this.spisakPacijenata.pop();
      alert('prazno polje');
   } else if(!this.imeDoktora) {
   		alert('Nema slobodnog doktora!');
   		this.prikaz = false;
   }
   	this.ime1 = '';
  	this.jmbg1 = '';
    this.bzk1 = '';
    console.log(forma);
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
