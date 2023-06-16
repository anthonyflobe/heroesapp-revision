import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout-page',
  templateUrl: './layout-page.component.html',
  styles: [
  ]
})
export class LayoutPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public sidevarItems = [
    { label: 'Listado', icon: 'label', url: './list'},
    { label: 'Añadir', icon: 'add', url: './new-heroe'},
    { label: 'Buscar', icon: 'search', url: './search'},
  ]

}
