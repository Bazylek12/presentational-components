import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponentModule } from './components/header/header.component-module';
import { AvatarComponentModule } from './components/avatar/avatar.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderComponentModule,
    AvatarComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
