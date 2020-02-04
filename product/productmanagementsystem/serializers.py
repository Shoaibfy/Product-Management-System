from rest_framework import serializers
from .models import Categories,Brand,Product
from .models import jsonfield


class ParentCategoriesSerializer(serializers.ModelSerializer):
    

    class Meta:
        model=Categories
        fields=('id','name',)

class CategoriesSerializer(serializers.ModelSerializer):
    parent_category = ParentCategoriesSerializer()

    class Meta:
        model=Categories
        fields=('id','name','parent_category',)


class BrandSerializer(serializers.ModelSerializer):
   

    class Meta:
        model=Brand
        fields=('id','name',)

class ProductSerializer(serializers.ModelSerializer):
    specification=serializers.JSONField()
    brand = BrandSerializer()
    category = CategoriesSerializer()
    class Meta:
        model=Product
        fields=('id','name','brand','category','specification',)
