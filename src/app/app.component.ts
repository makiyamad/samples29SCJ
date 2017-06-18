import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  mundo = "Terra";
  name = "valor do typescript";
  idade = 20;
  id=5;
  deveMostrar = false;

  ngOnInit() {

  }

  clicou(evt) {
    alert(evt.toElement.innerText);
    this.deveMostrar = !this.deveMostrar;
  }

}



import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[meuDestaque]' })
export class DestaqueDirective {

  constructor(private el: ElementRef) { 
    this.el.nativeElement.style.backgroundColor = 'yellow';
  }
}

import { TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[toggle]' })
export class ToggleDirective {

constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

    @Input() set toggle(condicao) {

    if (condicao) { this.viewContainer.createEmbeddedView(this.templateRef);
    } else { this.viewContainer.clear(); }
  }
}