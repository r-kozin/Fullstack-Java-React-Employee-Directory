# Full Stack Employee Directory

Welcome to the Full Stack Employee Directory project! This comprehensive web application streamlines the management of employee information by merging frontend and backend technologies to create a feature-rich directory for employees.

## Project Summary

This project aims to provide a comprehensive Employee Directory web application that simplifies employee information management. It brings together the power of both frontend and backend technologies to create a robust directory for employees.

## Functionality

The Employee Directory offers a range of features, including:

- Easily adding new employees to the system.
- Effortlessly modifying existing employee details.
- Accessing a complete list of all employees.
- Viewing detailed information on each employee through individual employee cards.
- Searching the list of employees for a specific individual.
- Deleting employees from the system.

## Technologies Used

### Frontend

- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
- ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
- ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
- ![Material UI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)

### Backend

- ![Java](https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white)
- ![Spring Framework](https://img.shields.io/badge/spring-%236DB33F.svg?style=for-the-badge&logo=spring&logoColor=white)
- ![Hibernate](https://img.shields.io/badge/Hibernate-59666C?style=for-the-badge&logo=Hibernate&logoColor=white)

### Database

- ![MySQL](https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white)

### Development Tools

- ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

## Hosting and Docker

This live version is hosted on Netlify and connects to a MySQL database in the cloud. The backend operates within Docker containers, professionally hosted on Render.com. To optimize resource utilization, the server may take up to 2 minutes to initialize during the initial load. Please be patient!

![Netlify](https://img.shields.io/badge/Netlify-%2300C7B7.svg?style=for-the-badge&logo=netlify&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-%232496ED.svg?style=for-the-badge&logo=docker&logoColor=white)
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Setup

To clone and set up this project on your local machine, follow these steps:

1. Clone this GitHub repository:

   ```
   git clone https://github.com/r-kozin/Fullstack-Java-React-Employee-Directory.git
   ```

2. Run your MySQL server and enter your password.
```
mysql -u root -p
```

3. Make sure to update the username and password within the application.properties file with your own information. (Java-Backend/src/main/resources/application.properties)
```
spring.datasource.username=${DB_USERNAME}
spring.datasource.password=${DB_PASSWORD}
```

4. Create a database 'ems' or update the datasource line to whichever database you choose:
```
CREATE DATABASE ems;
```
or
```
spring.datasource.url=jdbc:mysql://localhost:3306/ems?useSSL=false
```

5. Run the Java Spring Backend

6. Navigate to the React Frontend and install the required packages:
```
npm install
```

7. Run the React Frontend
```
npm run dev
```

8. Open your web browser and navigate to `http://localhost:5173` to access the Employee Directory.

Enjoy exploring and managing employee information with the Employee Directory!