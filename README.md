
WikiBands Frontend Documentation

Welcome to the WikiBands project! This documentation will guide you through the features and usage of the frontend application developed with React, Next.js, and Tailwind CSS.

Table of Contents

Getting Started
Features
Usage
Mocked Login
Bands Overview
Filtering Bands
Band Details
Logout
Development
Deployment
Resources


Getting Started
To run the development server, follow these steps:

bash
Copy code
npm run dev

Open http://localhost:3000 in your browser to see the result. You can start editing the page by modifying app/page.js. The page auto-updates as you edit the file.

This project uses next/font to optimize and load Inter, a custom Google Font.


Features

Mocked Login: Log in with a predefined user (admin@mail.com, admin).

Bands Overview: View information about twelve bands displayed in cards with pictures.

Filtering Bands: Filter bands by name, genre, or year of origin.

Band Details: Click on a band card to view detailed information about the band, including members, origin, and albums.

Logout: Use the navbar to log out and return to the home page.


Usage

Mocked Login
Use the following credentials for the mocked login:
Username: admin@mail.com
Password: admin

Bands Overview
Upon successful login, you will land on the Bands Overview page, displaying cards for twelve bands. Each card includes a picture to enhance visual appeal.

Filtering Bands
Use the provided filter options to narrow down bands based on name, genre, or year of origin.

Band Details
Click on a band card to navigate to a detailed page for that band. This page provides information such as members, place of origin, and albums. Use the "Back" button to return to the Bands Overview page.

Logout
In the navbar, find the "Logout" button to end the session and return to the home page.

Development
For local development, follow the instructions in the "Getting Started" section. Feel free to explore and modify the code in the app directory.

Deployment
The recommended way to deploy your WikiBands app is by using the Vercel Platform. Refer to the Next.js deployment documentation for detailed instructions.

Resources
Next.js Documentation - Learn about Next.js features and API.
Learn Next.js - Interactive Next.js tutorial.
Tailwind CSS Documentation - Explore Tailwind CSS features and customization.
For contributions or feedback, visit the WikiBands GitHub repository.

