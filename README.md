# Little Lemon Web Application 🍋

A vibrant Django-based web application designed to manage the Little Lemon Restaurant's menus and table bookings.

## 🚀 Prerequisites

Ensure you have the following installed on your local machine:

- [Python](https://www.python.org/) (3.7+ recommended)
- [Django](https://www.djangoproject.com/) (4.2.5 recommended)
- [Django REST framework](https://www.django-rest-framework.org/)
- [MySQL](https://www.mysql.com/)

## 🛠️ Setup & Installation

1. **Clone the Repository**
   ```sh
   git clone [(https://github.com/Waariss/Little_Lemon.git )]
   ```
2. **Navigate to the Project Directory**
   ```sh
   cd [YOUR_PROJECT_DIRECTORY]
   ```
3. **Install Required Packages**
   ```sh
   npm install
   ```
4. **Configure Database**
   - Update `settings.py` in the `LittleLemon` directory with your MySQL database credentials.
5. **Run Migrations**
   ```sh
   python manage.py migrate
   ```
6. **Start the Server**
   ```sh
   python manage.py runserver
   ```
7. **Access the Application**
   - Open a browser and navigate to [http://127.0.0.1:8000/](http://127.0.0.1:8000/).

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

## 🧪 Testing

Utilize the [Insomnia REST Client](https://insomnia.rest/) or a similar tool to test the API endpoints.

## 📜 License

This project is licensed under the MIT License
