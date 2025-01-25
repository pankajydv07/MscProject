# MSC Project

## Project Description
This project is a web-based application built with Node.js, Express, and MongoDB. It is designed to manage and host events with features like event details, prizes, announcements, and application tracking. The application supports a user-friendly interface and connects to a MongoDB database for data storage.

---

## Features
- **Event Management**: Add and manage events with detailed descriptions, rules, and deadlines.
- **Prizes & Tracks**: Define event prizes and tracks with associated details.
- **Announcements**: Post updates and announcements via Discord links or other messages.
- **Database Integration**: MongoDB is used for efficient and scalable data storage.
- **Responsive Design**: Built with EJS for dynamic content rendering and static files in the public directory.

---

## Project Structure
```
D:\msc
├── init               # Initialization files (optional)
├── models             # Mongoose schemas for database models
├── public             # Static assets (CSS, JS, images)
├── views              # EJS templates for rendering HTML
├── index.js           # Main application entry point
├── package.json       # Project dependencies and metadata
├── .env               # Environment variables
```

---

## Installation and Setup

### Prerequisites
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **MongoDB** (local or cloud-based, e.g., MongoDB Atlas)

### Steps to Run the Project

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd msc
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Setup Environment Variables**
   Create a `.env` file in the root directory and add:
   ```env
   DATABASE_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<dbname>?retryWrites=true&w=majority
   PORT=3000
   ```

4. **Run the Application**
   - For production:
     ```bash
     node index.js
     ```
   - For development (with auto-restart):
     ```bash
     npx nodemon index.js
     ```

5. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Dependencies
- **Express**: Web framework
- **Mongoose**: MongoDB object modeling
- **dotenv**: Environment variable management
- **EJS**: Embedded JavaScript templating
- **Body-parser**: Request body parsing (optional)
- **Nodemon**: Development tool for auto-restarting the server

To install all dependencies:
```bash
npm install
```

---

## Database Setup
This project uses MongoDB for database operations. Ensure your MongoDB instance is running and update the connection string in the `.env` file.

Example schema (Event model):
```javascript
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  date: {
    start: { type: Date, required: true },
    end: { type: Date, required: true },
  },
  venue: { type: String, required: true },
  // More fields as per requirements
});

const Event = mongoose.model('Event', eventSchema);
module.exports = Event;
```

---

## Deployment
### Using Vercel
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
2. Deploy the project:
   ```bash
   vercel
   ```
3. Configure the root directory (if prompted) and environment variables in the Vercel dashboard.

### Note:
Ensure your MongoDB connection string is accessible from Vercel's server.

---

## Future Enhancements
- Add user authentication for event organizers.
- Include real-time updates using WebSocket.
- Create an admin panel for managing events and announcements.

---

## Author
Pankaj Yadav

