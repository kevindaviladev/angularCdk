import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccordionComponent } from './accordion/accordion.component';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { CollectionsComponent } from './collections/collections.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import { ObserverComponent } from './observer/observer.component';
import { CardComponent } from './observer/card/card.component';
import { ObserversModule } from '@angular/cdk/observers';
import { OverlayComponent } from './overlay/overlay.component';
import { FullscreenOverlayContainer, OverlayContainer, OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { PopupComponent } from './overlay/popup/popup.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AccordionComponent,
    CollectionsComponent,
    LayoutComponent,
    ObserverComponent,
    CardComponent,
    OverlayComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkAccordionModule,
    LayoutModule,
    ObserversModule,
    OverlayModule,
    PortalModule,
    NoopAnimationsModule
  ],
  providers: [{provide: OverlayContainer, useClass: FullscreenOverlayContainer}],
  bootstrap: [AppComponent],
})
export class AppModule {}
