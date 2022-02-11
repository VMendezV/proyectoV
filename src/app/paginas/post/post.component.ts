import { Component, OnInit } from '@angular/core';
import { DatosService } from 'src/app/servicio/datos.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  mensajes: any;

  constructor(private datosService: DatosService ) { }

  ngOnInit(): void {
     console.log('INIT');
    this.mensajes= this.datosService.obtenerPosts();

}
}