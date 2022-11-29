import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { ApiServicio } from 'src/servicio/apiServicio';
import { cliente } from 'src/modelos/cliente.model';
import { pedido } from 'src/modelos/pedido.models';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ ApiServicio, ConfirmationService ],
})
export class ClientesComponent implements OnInit {

  constructor(private api:ApiServicio, private conf: ConfirmationService) { }

  clientes: cliente[];
  pedidos: pedido[];
  mostrar: boolean = false;
  mostrarP: boolean = false;
  nuevoCL: cliente = new cliente();
  clienteSel: cliente = new cliente();
  titulo: string = "";
  modoEdicion: boolean = false;

  ngOnInit(): void {
    this.cargarClientes();
  }

  mostrardialogo(event:any) {
    this.modoEdicion = false;
    this.titulo = "Crear cliente";
    this.nuevoCL = new cliente();
    this.mostrar = true;
  }

  guardarCliente(event:any){
    if (!this.modoEdicion){
      this.api.postCliente(this.nuevoCL).subscribe(() => {
        this.cargarClientes();
        this.mostrar=false;
      });
    } else {
      this.api.putCliente(this.nuevoCL).subscribe(() => {
        this.cargarClientes();
        this.mostrar=false;
      });
    }
    
  }

  cargarClientes(){
    this.api.getClientes().subscribe(resultado => {
      this.clientes = resultado;
    });
  }

  cargarPedidos(){
    this.api.getPedidosCliente(this.clienteSel).subscribe(resultado => {
      this.pedidos = resultado;
    });
  }

  editarCliente(event:any, cliente:cliente){
    this.modoEdicion = true;
    this.titulo = "Editar Cliente";
    this.nuevoCL = cliente;
    this.mostrar=true;
  }

  eliminarCliente(event:any, cliente:cliente){
    this.conf.confirm({
      message: 'Seguro que deseas eliminar?',
      accept: () => {
        this.api.deleteCliente(cliente).subscribe(() => {
          this.cargarPedidos();
        });
      }
    });
  }

  eliminarPedido(event:any, vehiculo:pedido){
    this.conf.confirm({
      message: 'Realmente deseas eliminar este elemento?',
      accept: () => {
        this.api.deletePedido(vehiculo).subscribe(() => {
          this.cargarClientes();
        });
      }
    });
  }

  mostrarPedidos(event:any,cliente:cliente){
    this.clienteSel = cliente;
    this.cargarPedidos();
    this.mostrarP = true;
  }

  agregarPedido(event:any){

  }

  actualizarPedido(event:any, vehiculo:pedido){
    
  }
}