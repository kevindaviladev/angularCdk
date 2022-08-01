import {
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  OverlayPositionBuilder,
} from '@angular/cdk/overlay';
import { ComponentPortal, TemplatePortalDirective } from '@angular/cdk/portal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '../observer/card/card.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
})
export class OverlayComponent implements OnInit {
  isOpen = false;
  @ViewChild('overlayTemplate') overlayTemplate: any;
  constructor(private overlay: Overlay) {}

  ngOnInit(): void {}

  openFromComponent() {
    const overlayRef = this.overlay.create({
      hasBackdrop: true,
      // backdropClass: 'overlay-backdrop',
      panelClass: 'overlay-panel',
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
    });
    const dialogPortal = new ComponentPortal(CardComponent);
    overlayRef.attach(dialogPortal);
    overlayRef.backdropClick().subscribe(() => overlayRef.detach());
  }

  openFromTemplate() {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      panelClass: 'overlay-panel',
      positionStrategy,
    });

    overlayConfig.hasBackdrop = true;

    const overlayRef = this.overlay.create(overlayConfig);

    overlayRef.attach(this.overlayTemplate);
    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });
  }
}
