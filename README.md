# 🔗 URL Shortener

A simple URL shortener web service built with **Node.js**, **Express**, **MongoDB**, and **shortid**. This service allows users to shorten long URLs and access them via a short, unique URL.

---

## 🚀 Features

- 🔗 Shortens any valid URL
- 💾 Stores mappings in MongoDB
- ↪️ Redirects from short URL to original URL
- 🧠 Prevents duplicate entries for the same URL
- 🌐 CORS enabled for frontend integration
- 📁 Serves static frontend files (optional)

---

## 📁 Project Structure

url-shortener/
├── index.js # Main backend server
├── package.json
├── public/ # Optional: Frontend static files (HTML/CSS/JS)
└── README.md # Project documentation

---

## 🛠️ Technologies Used

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [shortid](https://www.npmjs.com/package/shortid)
- [CORS](https://www.npmjs.com/package/cors)

---

## 📦 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/url-shortener.git
cd url-shortener

2. **Install dependencies**

npm install
Start MongoDB

Make sure MongoDB is running locally on your machine:
mongod

Run the server
nodemon index.js
Or:
node index.js
The server will start at http://localhost:5000

🔄 API Endpoints
1. Shorten a URL
Endpoint: POST /shorten

Headers: Content-Type: application/json

Body:
{
  "originalUrl": "https://www.example.com"
}

Response:
{
  "shortUrl": "http://localhost:5000/Hvh32_kqg"
}

2. Redirect to original URL
Endpoint: GET /:shortId

Example:
GET http://localhost:5000/Hvh32_kqg
→ Redirects to: https://www.example.com
