# DriftMart

## Description

Welcome to the E-commerce Website Frontend repository. This project is a fully responsive e-commerce website built using React. It provides a seamless shopping experience with a modern and intuitive user interface.

<hr/>

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Demo

Check out the live demo of the project [here](https://prismatic-taffy-891d87.netlify.app/).

- Frontend Deployed Link(Netlify): [https://symphonious-lollipop-6048de.netlify.app/](https://symphonious-lollipop-6048de.netlify.app/)

- Backend Deployed Link(Render): [https://myindiaa-deployement.onrender.com/](https://myindiaa-deployement.onrender.com/)

- Demo Video Link: [https://drive.google.com/file/d/1crNo32fZ2CEEWfOo8to7u0XNJAvnrpij/view?usp=sharing](https://drive.google.com/file/d/1crNo32fZ2CEEWfOo8to7u0XNJAvnrpij/view?usp=sharing)

## Features

- User Authentication (Sign Up, Login, Logout)
- Product Listing
- Product Search
- Product For Men, Women and Electronics
- Search by product title or description
- Product Details
- Shopping Cart
- Checkout Process
- Address
- Payment
- Responsive Design

## Technologies Used

- **React**: JavaScript library for building user interfaces
- **Redux**: State management
- **React Router**: Declarative routing for React
- **Axios**: Promise-based HTTP client for API calls
- **Tailwind CSS**: For the Styling
- **Chakra UI**: For the Styling
- **React Hook Form**: Form validation and management

## Installation

### Prerequisites

- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.22.x)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/sumansauravmay/DriftMart.git
   ```

2. Navigate to the project directory:

```bash
   cd DriftMart
   cd frontend
```

3. Install dependencies:

```bash
   npm install
   # or
   yarn install
```

## Usage

### Running the App

```bash
  npm start
  # or
  yarn start
```

The application will start on http://localhost:3000.

### Building for Production

```bash
    npm i netlify-cli -g
    npm run build
```

The production-ready files will be in the build/ directory.
now add a new file inside build folder named \_redirects and write

```bash
    /* /index.html 200
```

## Project Structure

```bash
   frontend/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── AllRoutes/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── index.css
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   └── ...
├── tailwind.config.js
├── package.json
└── ...
```

## Contributing

Contributions are welcome! Please follow these steps to contribute:

```bash
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature/your-feature).
6. Create a new Pull Request.
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any inquiries, please contact:

```bash
    Name: Suman Saurav
    Email: sumansauravmay12345@gmail.com
    GitHub: https://github.com/sumansauravmay
    LinkedIn: https://www.linkedin.com/in/suman-saurav-06896b231/
```
