import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { C1Component } from './c1/c1.component';
import { C2Component } from './c2/c2.component';
import { VmenuComponent } from './vmenu/vmenu.component';
import { CounterComponent } from './counter/counter.component';
import { DestaqueDirective, ToggleDirective } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    C1Component,
    C2Component,
    VmenuComponent,
    CounterComponent,
    DestaqueDirective,ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
