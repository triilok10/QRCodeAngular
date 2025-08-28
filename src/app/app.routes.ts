import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { HomeComponent } from '../Component/home-component/home-component';
import { PageNotFoundComponent } from '../Component/page-not-found-component/page-not-found-component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  //if path doesnt match any of the above, redirect to Page Not Found component
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
