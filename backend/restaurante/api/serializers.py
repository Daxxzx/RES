from dataclasses import fields
from rest_framework import serializers
from .import models

class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Cliente
        fields = '__all__'

class MenuSerializer(serializers.ModelSerializer):

    class Meta:
        model = models.Menu
        fields = '__all__'

class MesaSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Mesa
        fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Pedido
        fields = '__all__'

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Pago
        fields = '__all__'

class ReservacionSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Reservacion
        fields = '__all__'