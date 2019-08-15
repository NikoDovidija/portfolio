import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ProjectModule } from './project/project.module';
import { FooterModule } from './footer/footer.module';

import { SuiModule } from 'ng2-semantic-ui';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PageNotFoundComponent,
  ],
  imports: [
    SuiModule,
    BrowserModule,
    AppRoutingModule,
    ProjectModule,
    FooterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
