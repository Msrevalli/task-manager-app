# task-manager-app

python3 -m venv venv
source venv/bin/activate

django-admin startproject backend
cd backend
django-admin startapp tasks

npx create-react-app frontend
cd frontend
npm install axios react-router-dom
