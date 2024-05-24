import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule]

@NgModule({
  declarations: [Component, ListaAlumnosComponent
  ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [Component],
})
export class AppModule {}
