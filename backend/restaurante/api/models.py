from django.db import models

# Create your models here.

class Cliente(models.Model):
    
    nombres = models.CharField(max_length=50)
    apellidos = models.CharField(max_length=50)
    dni = models.CharField(max_length=8)
    direccion = models.CharField(max_length=40)
    telefono = models.CharField(max_length=15)

class Menu(models.Model):
    plato = models.CharField(max_length=20)
    precio = models.DecimalField(max_digits=12, decimal_places=2)

class Mesa(models.Model):
    numero = models.IntegerField()
    comensales = models.IntegerField()

class Pedido(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    cantidad = models.IntegerField()
    total = models.DecimalField(max_digits=12, decimal_places=2)

DATE_CHOICES = (('Efectivo', "Efectivo"),
            ('Tarjeta', "Tarjeta"),
            )

class Pago(models.Model):
    pago = models.CharField(max_length = 10, choices=DATE_CHOICES)
      
DATE_CHOICES = (('12:00 M', "12:00 M"),
            ('1:00 PM', "1:00 PM"),
            ('2:00 PM', "2:00 PM"),
            ('3:00 PM', "3:00 PM"),
            ('4:00 PM', "4:00 PM"),
            ('5:00 PM', "5:00 PM"),
            ('6:00 PM', "6:00 PM"),
            ('7:00 PM', "7:00 PM"),
            ('8:00 PM', "8:00 PM"),
            ('9:00 PM', "9:00 PM"),
            ('10:00 PM', "10:00 PM"),
            ('11:00 PM', "11:00 PM")
            )

class Reservacion(models.Model):
    fecha = models.DateField()
    inicio = models.CharField(max_length = 10, choices=DATE_CHOICES)
    fin = models.CharField(max_length = 10, choices=DATE_CHOICES)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    mesa = models.ForeignKey(Mesa, on_delete=models.CASCADE)