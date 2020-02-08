import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview/overview.component';
import { SunburstComponent } from './sunburst/sunburst.component';
import { SectionComponent } from './section/section.component';
import { SubsectionComponent } from './section/subsection/subsection.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    SunburstComponent,
    SectionComponent,
    SubsectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
