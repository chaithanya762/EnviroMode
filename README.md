
# EnviroMODE

EnviroMODE is a web application focused on environmental awareness and community engagement. It allows users to register for environmental activities, make donations, and share their experience to support green initiatives.

---

## Features

- **User Registration:** Collects detailed user information including name, email, phone number, Aadhar number, date of birth, and experience.
- **Activity Selection:** Users can select multiple environmental activities to participate in.
- **Donations:** Users can specify donation amounts to support initiatives.
- **Responsive Frontend:** Clean, aesthetic, and mobile-friendly registration form built with HTML and CSS.
- **Static Assets:** Organized serving of static files like HTML, CSS, and images.
- **Backend API:** Built with Node.js and Express to handle form submissions and data processing.
- **MongoDB Integration:** Uses Mongoose to store user data securely in MongoDB Atlas.
- **Environment Variable Configuration:** Uses `dotenv` to securely manage sensitive credentials.
- **Error Handling:** Proper handling of database connection errors and form submission errors.
**Best viewed on desktop for optimal layout and experience**
---

## Tech Stack

- **Frontend:** HTML, CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose ODM
- **Environment management:** dotenv

---

## Getting Started

### Prerequisites

- Node.js (version 18.x recommended)
- MongoDB Atlas account (or local MongoDB instance)
- npm (Node package manager)

### Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/chaithanya762/enviroMODE.git
   cd enviroMODE
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your MongoDB connection URI and optional port:
   ```
   MONGO_URI=your_mongodb_atlas_connection_string
   PORT=3000
   ```

4. Start the server:
   ```bash
   npm start
   ```

5. Open your browser and visit:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
/EnviroMODE
│
├── public/
│ ├── index.html # Home page
│ ├── about.html # About page
│ ├── gallery.html # Gallery page
│ ├── registration.html # Registration form page
│ └── images/ # Image assets
│
├── server.js # Express server and backend logic
├── package.json # Project metadata and dependencies
├── .env # Environment variables (not committed)
└── README.md # Project documentation
```

---

## API Endpoints

- `GET /` or `/register`  
  Serves the registration form.

- `POST /register`  
  Receives registration form data and saves it in MongoDB.

---

## Environment Variables

| Variable  | Description                         | Example                                         |
| --------- | --------------------------------- | ----------------------------------------------- |
| MONGO_URI | MongoDB Atlas connection string   | mongodb+srv://username:password@cluster0.mongodb.net/dbname |
| PORT      | Port for the Express server (optional) | 3000                                         |

---

## Deployment

This application is deployed and hosted on **Render**.

You can access the live app at:

**[https://enviromode.onrender.com](https://enviromode.onrender.com)**


## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests for improvements.

---

## License

This project is open-source and available under the MIT License.

---

## Contact

For any inquiries or support, please contact

**Chaithanya S**  
Email: chaithanyagowda762@gmail.com
GitHub: https://github.com/chaithanya762

---

Thank you 🌿
