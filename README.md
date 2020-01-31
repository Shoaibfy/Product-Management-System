# Product-Management-System
Application for managing the product with their brands.

# Cab Allocation System
Real time rides can be requested by customers on the system,
which can be accepted by available drivers (who don’t have an ongoing trip). Whichever
driver picks up gets to serve the user. Ride is completed after the customer ends it.

### Further explanation and assumptions:
1. Each customer can request only one ride at a time.
2. Each driver can accept / serve only one ride at a time.
3. Every ride has 3 status - requested, accepted & done.

### Prerequisites

You need to install the following packages for backend:

```
asgiref==3.2.3
Django==3.0.1
django-cors-headers==3.2.0
django-jsonfield==1.4.0
djangorestframework==3.11.0
pkg-resources==0.0.0
pytz==2019.3
six==1.13.0
sqlparse==0.3.0
psycopg2==2.7.4

```
### Installation

Clone the repository

```
git clone https://github.com/Shoaibfy/Cab-Booking/.git
```

Setting up your virtual environment:

```
python3 -m venv .evnv
```

Activating Virtual  Environment

```
source .env/bin/activate
```
Once the repository is cloned and virtual environment set up, go to the directory where the requirements.txt(Catalogue-management-system/backend/) is and type the following code in your terminal:

```
pip install -r requirements.txt
```


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
Go to '/product' and type the following code in the terminal:
```

"npm install", 

```
Then to run the react server, type the code:
```
npm start
```


