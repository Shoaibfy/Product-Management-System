# Product-Management-System
Application for managing the product with their brands.



### Prerequisites

You need to install the following packages for backend:

``
Django==3.0.1
django-cors-headers==3.2.0
djangorestframework==3.11.0



```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Product-Management-System/.git
```

Setting up your virtual environment:

```
python3 -m venv .evnv
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory and type the following code in your terminal:

To create a database for our Django project
```
python3 manage.py createsuperuser
```
Create a database user which we will use to connect to and interact with the database. Set the password.
```
CREATE USER admin WITH PASSWORD 'admin';


Before running server make sure all migrations done. To exucute all migration
```
python3 manage.py migrate
python3 manage.py makemigrations

```



Then to run the server, go to the directory '/Product-Management-System/' and type the following code in terminal:

```
python3 manage.py runserver
```

For Frontend which is ReactJS,
Dependencies are: 
```

"npm":"^6.13.4",
"react": "^16.12.0",
"react-dom": "^16.12.0",
"react-router-dom": "^5.1.2",


```
Go to 'UI/product' and type the following code in the terminal:
```

"npm install", 

```
Then to run the react server, type the code:
```
npm start
```


