import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  @Input() id: number;
  rangeStep: number = 1;
  rangeVal: number = 2;  
  rangeMin: number = 1;

  constructor() { 
  }

  ngOnInit() {
        this.rangeStep += this.id/2;
      this.rangeVal *= this.id;
      this.rangeMin = this.id;       
  }
}
