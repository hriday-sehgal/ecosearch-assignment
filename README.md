# EcoSearch - Green AI Search Engine

## Project Overview

EcoSearch is a Green AI-powered search engine designed to combat climate change with every search. This project is a responsive homepage for EcoSearch, developed as part of a software intern assignment.

The homepage includes:

- **A Navbar** for easy navigation
  
- **A Hero** section introducing EcoSearch

- **A Why Choose EcoSearch** section with four key features

- **A Join Waitlist form** integrated with Mailjet for email notifications

- **A Footer** with relevant links

## Features

- Fully Responsive Design using React.js (Vite) & Tailwind CSS 4

- Dynamic Waitlist Form that:

  - Sends an email to the admin when a user fills out the form

  - Sends a confirmation and welcome email to the user

- Netlify Functions Integration for backend email handling

- Smooth UI/UX with Tailwind CSS

- Deployed on Netlify for seamless accessibility

## Tech Stack

- **Frontend:** React.js (Vite), Tailwind CSS 4

- **Backend:** Netlify Functions

- **Email Service:** Mailjet

- **Deployment:** Netlify

## Project Structure
 ```
/ecosearch-assignment
│── src/
│   ├── components/
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── WaitlistForm.tsx
│   │   ├── Footer.tsx
│   │   ├── Features.tsx
│   ├── index.css
│   ├── App.tsx
│   ├── main.tsx
│── netlify/functions/
│   ├── submit-waitlist.ts
│── public/
│   ├── favicon.svg
│── package.json
│── tailwind.config.js
 ```

## Email Workflow
- User fills out the Join Waitlist form with name and email

- Mailjet API triggers two emails:

  - One to the admin with the user’s details. The admin email is currently set to my email. It can also be set to a mail used by EcoSearch Team.

  - One to the user confirming their waitlist registration.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

- Node.js (LTS version recommended)  
- npm or yarn  

### Installation

1. **Clone the repository:**  
   ```
   git clone https://github.com/hriday-sehgal/ecosearch-assignment.git
   ```

2. **Navigate to the project directory:**  
   ```
   cd ecosearch-assignment
   ```

3. **Install dependencies:**  
   ```
   npm install
   ```
   
4. **Set Up Environment Variables**
   
   Create a .env file in the root directory and add:
   ```
   MAILJET_API_KEY=your-mailjet-api-key
   MAILJET_SECRET_KEY=your-mailjet-secret-key
   ADMIN_EMAIL=your-admin-email@example.com
   ```

6. **Start the development server:**  
   ```
   npm run dev
   ```

   The application should now be running at `http://localhost:5173/`.

## Live Demo

EcoSearch is deployed on Netlify. You can access it here:  

[EcoSearch](https://ecosearchtaskhridaysehgal.netlify.app/)  

## Github Repo Link
GitHub Repository: https://github.com/hriday-sehgal/ecosearch-assignment

## Contact
For any queries, reach out at

- **Name:** Hriday Sehgal  
- **Email:** hriday.career@gmail.com

---

**This project was created as part of the hiring process for the Full Stack Intern position at EcoSearch.**  

## Copyright Notice

Copyright © 2025 Hriday Sehgal. 

This project and its source code are the intellectual property of Hriday Sehgal. Unauthorized copying, modification, distribution, or use of this code without explicit permission is strictly prohibited. All rights reserved.




