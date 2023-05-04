import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HeaderComponentModule } from './components/header/header.component-module';
import { AvatarComponentModule } from './components/avatar/avatar.component-module';
import { CardComponentModule } from './components/card/card.component-module';
import { RatingViewComponentModule } from './components/rating-view/rating-view.component-module';
import { ReadMorePanelComponentModule } from './components/read-more-panel/read-more-panel.component-module';
import { HeroComponentModule } from './components/hero/hero.component-module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderComponentModule,
    AvatarComponentModule,
    CardComponentModule,
    RatingViewComponentModule,
    ReadMorePanelComponentModule,
    HeroComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
