from django.contrib import admin
from django.urls import path,include
from rest_framework import routers
from api import views

router = routers.DefaultRouter()

router.register('clientes',views.clientes)
router.register('menus',views.menus)
router.register('mesas',views.mesas)
router.register('pedidos',views.pedidos)
router.register('pagos',views.pagos)
router.register('reservaciones', views.reservaciones)
router.register('pedidoclienteVS', views.pedidoclienteVS, basename='pedidoclienteVS')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]