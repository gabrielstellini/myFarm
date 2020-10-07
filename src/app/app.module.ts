import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [ AppComponent ],
    imports: [
        BrowserModule,
        AppRoutingModule,

        // Own modules
        SharedModule
    ],
    bootstrap: [ AppComponent ],
    providers: [ { provide: LOCALE_ID, useValue: 'de' } ],
})
export class AppModule {
}
