from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Cliente)
admin.site.register(models.Pedido)
admin.site.register(models.Pago)
admin.site.register(models.Reservacion)
admin.site.register(models.Mesa)
admin.site.register(models.Menu)
