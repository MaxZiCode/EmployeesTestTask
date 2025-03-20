# Employee Test Task

## Project Description

This project allows you to:

- View a list of employees.
- Add new employees.
- Edit existing employees.
- Delete employees (including batch deletion).

The project consists of two parts:

1. **Backend**: Built on .NET 8, provides a REST API for managing employees.
2. **Frontend**: Built on React with Redux for state management and Material-UI for the interface. Uses Vite as the build tool.

---

## Requirements

### Backend

- [.NET 8 SDK](https://dotnet.microsoft.com/download).
- SQL Server Express with LocalDB (ensure it is installed and running).

### Frontend

- [Node.js](https://nodejs.org/) (version 16 or higher).
- Package manager (npm or yarn).

---

## Setup and Run Instructions

### 1. Backend (Using Command Line)

1. **Ensure SQL Server LocalDB is running**:
    - No additional database setup is required. Just make sure SQL Server Express with LocalDB is installed and running.

2. **Open command line and navigate to the backend folder**.

    ``` bash
    cd ./sources/Backend
    ```

3. **Restore dependencies and run the server**:

    ```bash
    dotnet restore
    dotnet run
    ```

The backend will start at <http://localhost:5018/swagger>.

### 2. Frontend (Using Command Line)

1. **Open command line and navigate to the backend folder:**

    ``` bash
    cd ./sources/Frontend
    ```

2. **Install dependencies:**

    ``` bash
    npm install
    or
    yarn install
    ```

3. **Run the frontend:**

    ```bash
    npm run dev
    or
    yarn dev
    ```

The frontend will start at <http://localhost:5173>.