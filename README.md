# Todo List App

## Introduction

This is a simple Todo List application built with Express.js, Vue.js, Tailwind CSS, and PostgreSQL.
![Todo-list UI](https://scontent.fhph1-1.fna.fbcdn.net/v/t1.15752-9/415446047_1032123057893131_2072605942536484124_n.png?_nc_cat=104&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=3HoAcpqtIHwAX-5T5gv&_nc_ht=scontent.fhph1-1.fna&oh=03_AdRgmHCYURRj4h_Fule1MWow1lRCSoQuDkvt5As4tJMDPw&oe=65CDA15F)
## Features

- Add, edit, and delete tasks.
- Mark tasks as completed or incomplete.
- Responsive design using Tailwind CSS.
- Data stored in a PostgreSQL database.

## Technologies Used

- **Frontend:**
  - Vue.js: A JavaScript framework for building user interfaces.
  - Tailwind CSS: A utility-first CSS framework.

- **Backend:**
  - Express.js: A web application framework for Node.js.
  - PostgreSQL: A powerful, open-source relational database system.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/hieunn00/todo-list-web.git
   cd todo-list-web
2. **Install dependencies:**
    ```bash
    # Install backend dependencies
    cd server
    npm install
    
    # Install frontend dependencies
    cd ../client
    npm install
2. **Set up the database:**
  - Create a PostgreSQL database.
    ```sql
    CREATE TABLE todos (
    id BIGINT PRIMARY KEY,
    task TEXT NOT NULL,
    completed BOOLEAN DEFAULT FALSE);
    ```
- Update the database connection configuration in server/config/db.js.
3. **Run the application:**
    ```bash
    # Start the backend development server
    cd server
    npm run dev
    
    # Start the frontend development server
    cd ../client
    npm run dev
    ```
## Contribution
Feel free to contribute to this project by creating issues or submitting pull requests.
## License 
This project is licensed under the MIT License.
## Contact
For questions or feedback, you can reach at me hieunguyen7600@gmail.com
