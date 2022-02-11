import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  rutas = [
    {
      name:"Articulos",
      path:"/productos"
    },
    {
      name:"¿Quienes somos?",
      path:"/quienes-somos"
    },
    {
      name:"Saber mas",
      path:"/sabermas"
    },
    {
      name:"Post",
      path:"/post"
    },
    {
      name:"Contacto",
      path:"/contactanos"
    }

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
