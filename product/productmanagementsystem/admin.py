from django.contrib import admin

from .models import Categories,Brand,Product

# Register your models here.


class CategoriesAdmin(admin.ModelAdmin):
    list_display=('name','parent_category','data_created','last_modified',)



class BrandAdmin(admin.ModelAdmin):
    list_display=('name','data_created','last_modified',)

class ProductAdmin(admin.ModelAdmin):
    list_display=('name','brand','category','data_created','last_modified','specification',)
   

admin.site.register(Categories,CategoriesAdmin)
admin.site.register(Product,ProductAdmin)
admin.site.register(Brand,BrandAdmin)
