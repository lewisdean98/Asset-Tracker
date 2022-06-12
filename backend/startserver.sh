cd ./web
python3 manage.py makemigrations assets
python3 manage.py migrate 

gunicorn web.wsgi