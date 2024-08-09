# 📄 Resume Management System

## 🛠️ Overview

The **Resume Management System** is a comprehensive solution designed to manage employee resumes effectively. It comprises two main components:

- **🌐 Front-End Resume Management**: A React-based web application that provides an intuitive interface for managing employee details, projects, skills, and certifications.
- **🔧 Back-End Resume Management**: A Node.js-based server that handles API requests, data management, and PDF resume storage using PostgreSQL as the database.

This system is designed to be highly modular, allowing for easy customization and expansion. It is fully responsive and provides a seamless user experience across different devices.

## ✨ Features

### 🌐 Front-End

- 🔒 **User Authentication**: Secure login mechanism for accessing the application.
- 📝 **Employee Personal Details Management**: Add, update, and manage personal details of employees.
- 📊 **Project Details Management**: Track and manage employee projects.
- 🏆 **Skills and Certifications Management**: Maintain a record of employee skills and certifications.
- 📄 **PDF Resume Generation**: Generate and download resumes in PDF format.
- 📱 **Responsive Design**: Optimized for both mobile and desktop devices.

### 🔧 Back-End

- 🌐 **RESTful API Services**: Provides endpoints for managing employee data, projects, skills, and certifications.
- 🗃️ **PostgreSQL Database Integration**: Efficiently handles data storage and retrieval.
- 📄 **PDF Storage**: Store and retrieve PDF resumes from the database.
- 🔄 **Data Integrity**: Ensures data consistency and reliability with Sequelize ORM.

## 🛠️ Technologies Used

### 🌐 Front-End

- **⚛️ React**: JavaScript library for building user interfaces.
- **🛠️ Redux Toolkit**: State management for complex application state.
- **🔄 React Router DOM**: Handles navigation between different components.
- **📡 Axios**: Facilitates communication with the back-end API.
- **🎨 Bootstrap** & **Material UI (MUI)**: Provides a consistent and responsive design.
- **📄 HTML2PDF.js** & **JSPDF**: Generates PDF documents from HTML content.

### 🔧 Back-End

- **🟢 Node.js**: JavaScript runtime for building scalable network applications.
- **🚀 Express.js**: Web framework for handling HTTP requests and routing.
- **🗃️ Sequelize**: ORM for managing database interactions with PostgreSQL.
- **🐘 PostgreSQL**: Relational database system for storing and retrieving data.
- **📁 Multer** & **PDFKit**: Handles file uploads and PDF generation.

## 📁 Project Structure

### 🌐 Front-End Project Structure



```
/front-end-resume-management
│
├── /public
│ ├── index.html # Main HTML file
│ └── favicon.ico # Application icon
│
├── /src
│ ├── /components # React components
│ │ ├── EmpPersonalDetailsForm.js
│ │ ├── LoginPage.js
│ │ ├── Navbar.js
│ │ ├── EmployeeSearchTable.js
│ │ ├── EmpProjectDetailsForm.js
│ │ ├── EmpSkillsCertificationForm.js
│ │ ├── SuccessPage.js
│ │ └── ErrorPage.js
│ │
│ ├── /redux # Redux setup
│ │ ├── /slices
│ │ │ ├── employeeSlice.js
│ │ │ ├── projectSlice.js
│ │ │ ├── certificateSlice.js
│ │ │ └── skillSlice.js
│ │ └── store.js # Redux store configuration
│ │
│ ├── /styles # CSS styles
│ │ ├── index.css
│ │ └── App.css
│ │
│ ├── App.js # Main application component
│ ├── index.js # Entry point for React application
│ ├── reportWebVitals.js # Web Vitals reporting
│ └── setupTests.js # Setup file for testing
│
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
└── README.md # This file
```

### 🔧 Back-End Project Structure

```
/back-end-resume-management
│
├── /config
│ └── db.config.js # Database configuration
│
├── /src
│ ├── /controllers # Controller functions
│ │ ├── employee.controller.js
│ │ ├── project.controller.js
│ │ ├── certification.controller.js
│ │ ├── user.controller.js
│ │ └── pdf.controller.js
│ │
│ ├── /models # Sequelize models
│ │ ├── employee.model.js
│ │ ├── project.model.js
│ │ ├── certification.model.js
│ │ ├── user.model.js
│ │ └── index.js # Model index file
│ │
│ ├── /routes # Express routes
│ │ ├── employee.routes.js
│ │ ├── project.routes.js
│ │ ├── certification.routes.js
│ │ ├── user.routes.js
│ │ └── pdf.routes.js
│ │
│ ├── /services # Service layer for business logic
│ │ ├── employee.service.js
│ │ ├── project.service.js
│ │ ├── certification.service.js
│ │ ├── user.service.js
│ │ └── pdf.service.js
│ │
│ ├── /utils # Utility functions
│ └── /middleware # Middleware functions
│
├── .gitignore # Git ignore file
├── package.json # Project metadata and dependencies
├── server.js # Main entry point for the server
└── README.md # This file
```
## 🚀 Installation

### Prerequisites

- **🟢 Node.js** (v12 or higher)
- **🐘 PostgreSQL** (v9.5 or higher)
- **📦 npm** (Node Package Manager)

### 🌐 Front-End Setup

1. **Clone the Front-End Repository:**

   ```bash
   git clone https://github.com/htrap5283/Front-end-Resume-Management.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Front-end-Resume-Management
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Start the Development Server:**

   ```bash
   npm start
   ```

   The application will be accessible at [http://localhost:3000](http://localhost:3000).


### 🔧 Back-End Setup

1. **Clone the Back-End Repository:**

   ```bash
   git clone https://github.com/htrap5283/Back-end-Resume-Management.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Back-end-Resume-Management
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Set Up PostgreSQL:**

   - Ensure PostgreSQL is installed and running.
   - Create a new database named `resumes`.
   - Update the database configuration in `config/db.config.js` if necessary.

5. **Run Database Migrations:**

   ```bash
   sequelize db:migrate
   ```

6. **Start the Server:**

   ```bash
   node server.js
   ```

   The server will be accessible at [http://localhost:8080](http://localhost:8080).

## 🚀 Usage
### Accessing the Application

1. **Start Both Servers:**

   - 🌐 Front-End: Run `npm start` in the front-end directory.
   - 🔧 Back-End:  Run `node sever.js` in the back-end directory.

2. **Open the Application:**

   - Visit [http://localhost:3000](http://localhost:3000) in your web browser.

3. **Log In:**

   - Use the provided login form to authenticate and access the application.

4. **Manage Data:**

   - Navigate through the application to manage employee details, projects, skills, and certifications.

5. **Generate PDFs:**
   - Use the PDF generation feature to create and download resumes in PDF format.

### 🔧 API Endpoints

The back-end provides several RESTful API endpoints for managing employee data:

- **GET /employees**: Retrieve all employees.
- **POST /employees**: Add a new employee.
- **GET /employees/:id**: Retrieve a specific employee by ID.
- **PUT /employees/:id**: Update an employee by ID.
- **DELETE /employees/:id**: Delete an employee by ID.
- **POST /projects**: Add new project details.
- **POST /certifications**: Add new certification and skill details.
- **GET /resume/:id**: Retrieve a stored PDF resume by employee ID.

Refer to the specific route files in the back-end repository for more details.


## 🤝 Contribution

Contributions are welcome! To contribute:

1. **Fork the Repository**.
2. **Create a New Branch** (`git checkout -b feature-branch`).
3. **Commit Your Changes** (`git commit -am 'Add new feature'`).
4. **Push the Branch** (`git push origin feature-branch`).
5. **Create a New Pull Request**.

## 📄 License

This project is licensed under the MIT License. See the LICENSE file for more information.

## 🙌 Acknowledgements

- **⚛️ React**: For building dynamic user interfaces.
- **🛠️ Redux Toolkit**: For state management.
- **🚀 Express.js**: For the robust backend framework.
- **🗃️ Sequelize**: For ORM and seamless database interactions.
- **🐘 PostgreSQL**: For reliable and scalable data storage.
- **📁 Multer** & **📄 PDFKit**: For handling file uploads and PDF creation.

## 📬 Contact

For questions or further information, please contact [parthjp5283@gmail.com](mailto:parthjp5283@gmail.com).