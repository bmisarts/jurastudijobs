import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';
import { JobDetailComponent } from './job/detail/detail.component';



@NgModule({
  declarations: [
    HomeComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LandingRoutingModule,
    SharedModule
  ]
})
export class LandingModule { }
