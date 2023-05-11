import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "@core/core.module";
import {TranslateModule} from "@ngx-translate/core";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {TRANSLATION_CONFIG} from "./constants/translation.config";
import {NgSelectModule} from "@ng-select/ng-select";
import {INTERCEPTORS} from "@core/interceptors";
import {INITIALIZATION_PROVIDERS} from "@core/initialize/app.initialize";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    BrowserModule,
    AppRoutingModule,
    TranslateModule.forRoot(TRANSLATION_CONFIG),
    HttpClientModule,
    NgSelectModule,
    ReactiveFormsModule,
  ],
  providers: [
    ...INTERCEPTORS,
    ...INITIALIZATION_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
