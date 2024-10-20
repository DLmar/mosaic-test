# Company Info Mosaic Dashboard

This project is a dashboard built with React and TypeScript that displays company information using the React Mosaic library. The data is fetched from a fake API.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- React Mosaic
- Axios
- Docker

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js (version 14 or later)
- npm (Node Package Manager)
- Docker (if you plan to use Docker)

### Installation

1. Clone the repository:

   - git clone https://github.com/DLmar/mosaic-test
   - cd company-info-mosaic

2. Install the dependencies:
    - npm install

Running the Project
You can run the project locally in two ways: using npm or Docker.

Option 1: Run with npm:

Start the development server:
 - npm start
Open your browser and go to http://localhost:3000.

Option 2: Run with Docker

1) Build the Docker image:
 - docker build -t company-info-mosaic .

2) Run the Docker container:
 - docker run -d -p 3000:3000 company-info-mosaic
   
