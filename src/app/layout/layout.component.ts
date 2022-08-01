import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentScreenSize = '';
  orientation = '';
  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
    ['(orientation: portrait)', 'Portrait'],
    ['(orientation: landscape)', 'Landscape'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log(query);
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });

    breakpointObserver
      .observe(['(orientation: portrait)', '(orientation: landscape)'])
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            console.log(query);
            this.orientation = this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnInit(): void {}
}
