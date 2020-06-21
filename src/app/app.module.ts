import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HomeComponent } from './home/home.component';
import { ReadsComponent } from './reads/reads.component';
import { AmazonComponent } from './amazon/amazon.component';
import { ToolsComponent } from './tools/tools.component';
import { TextEncryptComponent } from './tools/text-encrypt/text-encrypt.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ResumeComponent } from './resume/resume.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DetailsComponent,
    HomeComponent,
    ReadsComponent,
    AmazonComponent,
    ToolsComponent,
    TextEncryptComponent,
    ResumeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    SharedModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TextEncryptComponent]
})
export class AppModule { }
