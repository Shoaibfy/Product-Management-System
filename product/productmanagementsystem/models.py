from django.db import models
from django.forms.utils 
from json_field import JSONField
# import jsonfield
# Create your models here.
class Categories(models.Model):
    name=models.CharField(max_length=100,unique=True)
    parent_category=models.ForeignKey('Categories',null=True,blank=True,on_delete=models.CASCADE)
    data_created=models.DateTimeField(auto_now_add=True)
    last_modified=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
        
    def get_breadcrumbs(self):
        breadcrumbs =[]
        category=self
        while category.parent_category is not None:
            breadcrumbs.append(category.name)
            category=category.parent_category
        breadcrumbs.append(category.name)
        breadcrumbs.reverse()
        return breadcrumbs

class Brand(models.Model):
    name=models.CharField(max_length=100,unique=True)
    data_created=models.DateTimeField(auto_now_add=True)
    last_modified=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name

class Product(models.Model):
    name=models.CharField(max_length=100,unique=True)
    brand=models.ForeignKey(Brand,on_delete=models.CASCADE)
    category=models.ForeignKey(Categories,on_delete=models.CASCADE)
    data_created=models.DateTimeField(auto_now=True)
    last_modified=models.DateTimeField(auto_now=True)
    specification=jsonfield.JSONField()