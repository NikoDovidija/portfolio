import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { SuiPopupModule } from '../../../node_modules/ng2-semantic-ui/dist/modules/popup/popup.module';

@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    SuiPopupModule,
  ],
  exports: [FooterComponent],
  providers: []
})
export class FooterModule { }
