# Little Lemon Web Application 🍋

A vibrant Django-based web application designed to manage the Little Lemon Restaurant's menus and table bookings.

## 🚀 Prerequisites

Ensure you have the following installed on your local machine:

- [Python](https://www.python.org/) (3.7+ recommended)
- [Django](https://www.djangoproject.com/) (4.2.5 recommended)
- [Django REST framework](https://www.django-rest-framework.org/)
- [MySQL](https://www.mysql.com/)
- [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm)
- [React](https://reactjs.org/) (17.0.0+ recommended)

### 🛠️ Setup & Installation

#### Backend (Django)

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Waariss/Little_Lemon.git 
   ```
2. **Navigate to the Backend Project Directory**
   ```sh
   cd Little_Lemon/backend
   ```
3. **Install Required Packages**
   ```sh
   pip install -r requirements.txt
   ```
4. **Configure Database**
   - Update `settings.py` with your MySQL database credentials.
5. **Run Migrations**
   ```sh
   python manage.py migrate
   ```
6. **Start the Server**
   ```sh
   python manage.py runserver
   ```
   
#### Frontend (React)

1. **Navigate to the Frontend Project Directory**
   ```sh
   cd Little_Lemon/frontend
   ```
2. **Install Required Packages**
   ```sh
   npm install
   ```
3. **Start the React App**
   ```sh
   npm start
   ```
4. **Access the Application**
   - Open a browser and navigate to [http://localhost:3000](http://localhost:3000).


## 📌 API Endpoints

### Menu Management
- **List & Create Menu Items**
  - Endpoint: `/api/menu/`
  - Methods: 
    - `GET`: Retrieve all menus.
    - `POST`: Create a new menu item.

### Booking Management
- **List & Create Bookings**
  - Endpoint: `/api/bookings/`
  - Methods: 
    - `GET`: Retrieve all bookings.
    - `POST`: Create a new booking.
- **Manage Table Bookings**
  - Endpoint: `/api/bookings/<booking_id>/`
  - Methods: 
    - `GET`: Retrieve a specific booking.
    - `PUT`: Update an existing booking.
    - `DELETE`: Delete a booking.

### 🔄 Integrating Frontend with Backend

1. **API Calls**: Use a library like [Axios](https://axios-http.com/) to make HTTP requests from your React app to your Django API.
   
   Install Axios:
   ```sh
   npm install axios
   ```
   
   Example API call from React:
   ```jsx
   import axios from 'axios';

   axios.get('http://127.0.0.1:8000/api/menu/')
        .then(response => {
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
        });
   ```
   
2. **CORS Headers**: Ensure that your Django API can handle requests from your React app by configuring CORS headers using [django-cors-headers](https://pypi.org/project/django-cors-headers/).

3. **Build & Deploy**: When you're ready to deploy your application, build your React app and configure Django to serve the static files.

   Build React app:
   ```sh
   npm run build
   ```
## 🧪 Testing

Utilize the [Insomnia REST Client](https://insomnia.rest/) or a similar tool to test the API endpoints.

## 📜 License

This project is licensed under the MIT License
