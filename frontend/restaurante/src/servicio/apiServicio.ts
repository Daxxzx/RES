import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { cliente } from "src/modelos/cliente.model";
import { menu } from "src/modelos/menu.models";
import { pedido } from "src/modelos/pedido.models";


@Injectable({
  providedIn: "root"
})

export class ApiServicio {
    private ApiUrl = "http://127.0.0.1:8000/api/"; // URL to web api
    private httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
    };
    constructor(private http: HttpClient) {
    }

    //Cliente

    //Get
    public getClientes(): Observable<cliente[]> {
        return this.http.get<cliente[]>(this.ApiUrl + 'clientes/');
      }
  
      //Post
    public postCliente(cliente: cliente): Observable<void> {
      let objJSON = JSON.stringify(cliente);
      return this.http.post<void>(this.ApiUrl + 'clientes/', objJSON, this.httpOptions);
    }
  
    //Put
    public putCliente(cliente: cliente): Observable<void> {
      let objJSON = JSON.stringify(cliente);
      return this.http.put<void>(this.ApiUrl + 'clientes/' + cliente.id.toString() + '/', objJSON, this.httpOptions);
    }
  
    //Delete
    public deleteCliente(cliente: cliente): Observable<void> {
      return this.http.delete<void>(this.ApiUrl + 'clientes/' + cliente.id.toString() + '/');
    }


    //Pedidos

    //Get
    public getPedidosCliente(cliente: cliente): Observable<pedido[]> {
      return this.http.get<pedido[]>(this.ApiUrl + 'pedidoclienteVS/?id_cliente=' + cliente.id.toString());
    }

    //Post
    public postPedido(pedido: pedido): Observable<void> {
      let objJSON = JSON.stringify(pedido);
      return this.http.post<void>(this.ApiUrl + 'pedidos/', objJSON, this.httpOptions);
    }

    //Put
    public putPedido(pedido: pedido): Observable<void> {
      let objJSON = JSON.stringify(pedido);
      return this.http.put<void>(this.ApiUrl + 'pedidos/' + pedido.id.toString() + '/', objJSON, this.httpOptions);
    }

    //Delete
    public deletePedido(pedido: pedido): Observable<void> {
      return this.http.delete<void>(this.ApiUrl + 'pedidos/' + pedido.id.toString() + '/');
    }



    //Menus Platos

    //Get
    public getMenus(): Observable<menu[]> {
      return this.http.get<menu[]>(this.ApiUrl + 'menus/');
    }

    //Post
    public postMenu(plato: menu): Observable<void> {
      let objJSON = JSON.stringify(plato);
      return this.http.post<void>(this.ApiUrl + 'menus/', objJSON, this.httpOptions);
    }

    //Put
    public putMenu(plato: menu): Observable<void> {
      let objJSON = JSON.stringify(plato);
      return this.http.put<void>(this.ApiUrl + 'menus/' + plato.id.toString() + '/', objJSON, this.httpOptions);
    }

    //Delete
    public deleteMenus(plato: menu): Observable<void> {
      return this.http.delete<void>(this.ApiUrl + 'menus/' + plato.id.toString() + '/');
    }













}