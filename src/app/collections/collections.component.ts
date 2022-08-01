import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss'],
})
export class CollectionsComponent implements OnInit {
  selection = new SelectionModel<any>(
    true, // multiple selection or not
    [] // initial selected values
  );

  optionList = [
    { id: 1, title: 'Hacer ejemplo' },
    { id: 2, title: 'Grabar video' },
    { id: 3, title: 'Editar video' },
    { id: 4, title: 'Hacer miniatura' },
    { id: 5, title: 'Subir video' },
  ];

  constructor() {}

  ngOnInit(): void {}

  get allSelected(): boolean {
    return (
      !!this.optionList.length &&
      this.selection.selected.length === this.optionList.length
    );
  }

  toggleMasterSelection() {
    if (this.allSelected) {
      this.selection.clear();
    } else {
      this.selection.select(...this.optionList);
    }
  }
}
