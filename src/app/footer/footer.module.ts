import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SuiPopupModule } from 'ng2-semantic-ui';


@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SuiPopupModule
  ],
  exports:[FooterComponent]
})
export class FooterModule { }
