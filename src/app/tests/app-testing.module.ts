import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { appRoutes } from '../app.routes';
import { AddressFormTestComponent } from './address-form.test-component';
import { AvatarTestComponent } from './avatar.test-component';
import { CardTestComponent } from './card.test-component';
import { HeaderTestComponent } from './header.test-component';
import { HeroTestComponent } from './hero.test-component';
import { ProductFormTestComponent } from './product-form.test-component';
import { RatingViewTestingComponent } from './rating-view.test-component';
import { ReadMorePanelTestComponent } from './read-more-panel.test-component';
import { HeaderComponentModule } from '../components/header/header.component-module';

@NgModule({
  declarations: [
    HeaderTestComponent,
    AvatarTestComponent,
    CardTestComponent,
    HeroTestComponent,
    AddressFormTestComponent,
    ProductFormTestComponent,
    ReadMorePanelTestComponent,
    RatingViewTestingComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
    HeaderComponentModule,
  ],
  providers: [],
})
export class AppTestingModule {}
