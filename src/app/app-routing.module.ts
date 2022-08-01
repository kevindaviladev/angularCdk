import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccordionComponent } from './accordion/accordion.component';
import { CollectionsComponent } from './collections/collections.component';
import { LayoutComponent } from './layout/layout.component';
import { ObserverComponent } from './observer/observer.component';
import { OverlayComponent } from './overlay/overlay.component';

const routes: Routes = [
  { path: '', redirectTo: 'accordion', pathMatch: 'full' },
  { path: 'accordion', component: AccordionComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'layout', component: LayoutComponent },
  { path: 'observer', component: ObserverComponent },
  { path: 'overlay', component: OverlayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
