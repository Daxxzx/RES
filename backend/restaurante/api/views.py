from statistics import mode
from django.shortcuts import render
from rest_framework import viewsets
from .import serializers
from .import models

# Create your views here.

class clientes(viewsets.ModelViewSet):
    queryset = models.Cliente.objects.all()
    serializer_class = serializers.ClienteSerializer

class menus(viewsets.ModelViewSet):
    queryset = models.Menu.objects.all()
    serializer_class = serializers.MenuSerializer

class pedidoclienteVS (viewsets.ModelViewSet):
    queryset = models.Pedido.objects.all()
    serializer_class = serializers.PedidoSerializer

    def get_queryset(self):
        id_cliente = self.request.query_params.get('id_cliente')
        cliente = models.Cliente.objects.get(id=id_cliente)
        pedidos = models.Pedido.objects.filter(cliente=cliente)
        return pedidos

class mesas(viewsets.ModelViewSet):
    queryset = models.Mesa.objects.all()
    serializer_class = serializers.MesaSerializer

class pedidos(viewsets.ModelViewSet):
    queryset = models.Pedido.objects.all()
    serializer_class = serializers.PedidoSerializer

class pagos(viewsets.ModelViewSet):
    queryset = models.Pago.objects.all()
    serializer_class = serializers.PagoSerializer

class reservaciones(viewsets.ModelViewSet):
    queryset = models.Reservacion.objects.all()
    serializer_class = serializers.ReservacionSerializer        