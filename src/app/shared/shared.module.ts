import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TouchSliderComponent } from './touch-slider/touch-slider.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, AboutComponent, TouchSliderComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [HeaderComponent, FooterComponent, TouchSliderComponent],
  entryComponents: [AboutComponent]
})
export class SharedModule { }
