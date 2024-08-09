# Front-End Resume Management

## Overview

**Front-End Resume Management** is a modern web application developed with React, designed to simplify the management of employee resumes. The app features a clean user interface and leverages Redux for state management, Axios for API interactions, and React Router for seamless navigation.

## Features

- ![🔒](https://img.icons8.com/ios-filled/50/000000/lock.png) **User Authentication**: Secure login to access the application.
- ![📝](https://img.icons8.com/ios-filled/50/000000/edit.png) **Employee Personal Details Form**: Form to enter and manage employee details.
- ![📊](https://img.icons8.com/ios-filled/50/000000/project.png) **Project Details Form**: Add and manage information about projects.
- ![🏆](https://img.icons8.com/ios-filled/50/000000/award.png) **Skills and Certifications Form**: Manage skills and certifications related to employees.
- ![🔍](https://img.icons8.com/ios-filled/50/000000/search.png) **Search and Display**: Search for employees and view detailed information.
- ![📄](https://img.icons8.com/ios-filled/50/000000/file.png) **PDF Generation**: Generate and download resumes in PDF format.
- ![📱](https://img.icons8.com/ios-filled/50/000000/phone.png) **Responsive Design**: Fully responsive design for mobile and desktop devices.

## Technologies Used

- **Frontend:**

  - ![React](https://img.icons8.com/ios-filled/50/000000/react.png) **React**: JavaScript library for building user interfaces.
  - ![Redux Toolkit](https://img.icons8.com/ios-filled/50/000000/redux.png) **Redux Toolkit**: For state management.
  - ![React Router](https://img.icons8.com/ios-filled/50/000000/route.png) **React Router DOM**: For routing and navigation.
  - ![Axios](https://img.icons8.com/ios-filled/50/000000/axios.png) **Axios**: For making HTTP requests.
  - ![Bootstrap](https://img.icons8.com/ios-filled/50/000000/bootstrap.png) **Bootstrap**: For styling and responsive design.
  - ![MUI](https://img.icons8.com/ios-filled/50/000000/material-ui.png) **MUI (Material UI)**: For additional UI components and styling.
  - ![React-Quill](https://img.icons8.com/ios-filled/50/000000/editor.png) **React-Quill**: Rich text editor for text inputs.
  - ![React Tags Input](https://img.icons8.com/ios-filled/50/000000/tag.png) **React Tags Input**: Manage tags and keywords.
  - ![HTML2PDF](https://img.icons8.com/ios-filled/50/000000/pdf.png) and ![JSPDF](https://img.icons8.com/ios-filled/50/000000/pdf.png) **HTML2PDF.js** and **JSPDF**: Generate PDF documents from HTML content.

- **Development Tools:**

  - ![React Scripts](https://img.icons8.com/ios-filled/50/000000/script.png) **React Scripts**: Scripts for managing the React application lifecycle.
  - ![ESLint](https://img.icons8.com/ios-filled/50/000000/lint.png) **ESLint**: For linting JavaScript code and ensuring code quality.

## Project Structure

The project is organized as follows:

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

## Installation

To get started with the project:

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/front-end-resume-management.git
```

Navigate to the project directory:

```bash
cd front-end-resume-management
```

Install dependencies:

```bash

npm install
```

Start the development server:

```bash

npm start
```

This will start the application at http://localhost:3000.
Configuration
API Endpoints: Ensure that your backend server is running at http://localhost:8080 or adjust API URLs in the service files as needed.
Usage
Access the Application: Open your web browser and go to http://localhost:3000.
Log In: Use the login page to authenticate.
Navigate Through Sections: Use the navigation bar to access different forms and features.
Fill Out Forms: Input employee details, project information, and manage skills and certifications.
Generate PDFs: Use the provided features to create and download resumes in PDF format.
Contribution
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
React: For building user interfaces.
Redux Toolkit: For managing application state.
Bootstrap: For styling and responsive layout.
MUI: For Material Design components.
React-Quill: For rich text editing capabilities.
and
HTML2PDF.js and JSPDF: For PDF generation.
Contact
For questions or further information, please contact parthjp5283@gmail.com.
