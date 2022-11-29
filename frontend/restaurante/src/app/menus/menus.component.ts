import { Component, OnInit } from '@angular/core';
import { menu } from 'src/modelos/menu.models';
import { ApiServicio } from 'src/servicio/apiServicio';
import {ConfirmationService} from 'primeng/api';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css'],
  providers: [ ApiServicio, ConfirmationService ],
})
export class MenusComponent implements OnInit {

  constructor(private api:ApiServicio, private conf: ConfirmationService) { }

  platos: menu[];
  mostrar: boolean = false;
  nuevoMN: menu = new menu();
  titulo: string = "";
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.cargarPlatos();
  }

  mostrardialogo(event:any) {
    this.modoEdicion = false;
    this.titulo = "Ingresar nuevo menu";
    this.nuevoMN = new menu();
    this.mostrar = true;
  }

  guardarPlato(event:any){
    if (!this.modoEdicion){
      this.api.postMenu(this.nuevoMN).subscribe(() => {
        this.cargarPlatos();
        this.mostrar=false;
      });
    } else {
      this.api.putMenu(this.nuevoMN).subscribe(() => {
        this.cargarPlatos();
        this.mostrar=false;
      });
    }
    
  }

  cargarPlatos(){
    this.api.getMenus().subscribe(resultado => {
      this.platos = resultado;
    });
  }

  editarPlato(event:any, tipo:menu){
    this.modoEdicion = true;
    this.titulo = "Editar tipo de vehículo";
    this.nuevoMN = tipo;
    this.mostrar=true;
  }

  eliminarPlato(event:any, tipo:menu){
    this.conf.confirm({
      message: 'Realmente deseas eliminar este elemento?',
      accept: () => {
        this.api.deleteMenus(tipo).subscribe(() => {
          this.cargarPlatos();
        });
      }
  });
  }

}