Welcome to the E-Wallet project! This is an E-Wallet application with two main components: a client and a server. Please follow the instructions below to get started.

Prerequisites
Before you can run the E-Wallet project, you'll need to have the following installed on your system:
- Node.js (https://nodejs.org/en/download/)
- Docker (https://www.docker.com/get-started)

Project Structure
The E-Wallet project is organized into the following directories:
- client: Contains the front-end client code
- server: Contains the back-end server code
- sql: Contains the SQL files for setting up the database

Database Setup

To set up the database, follow these steps:
- Start your MySQL Server.
- Import the SQL files from the sql folder into your MySQL Server to create the necessary tables and schema.

Running the Application

You can choose to run the E-Wallet application using one of the following methods:

Option 1: Using Node.js and MySQL (as described in the original README)
- Follow the "Running the Server" and "Running the Client" sections in the original README to start the application using Node.js and MySQL.

Option 2: Using Docker Compose (Recommended)

To run the application using Docker Compose, follow these steps:
1. Open your terminal or command prompt.
2. Navigate to the project's root directory where the `docker-compose.yml` file is located.
3. Run the following command to start the application using Docker Compose:
   ```sh
   docker-compose up
