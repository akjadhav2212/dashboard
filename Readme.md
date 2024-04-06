# Product Sales Dashboard

Product Sales Dashboard is a full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. It provides a user-friendly interface for visualizing product sales data.

## Live Link 
- Note: Wait for 50secs to load.
- Website:[https://dashboard-b5yd.onrender.com/](https://dashboard-b5yd.onrender.com/)

## Tech Stack

- Frontend: React.js, Recharts, Chart.js
- State Management: Recoil
- Backend: Node.js, Express.js,
- Database: MongoDB
- Authentication: JSON Web Tokens (JWT)
- Library/Packages: Zod,dotenv,axios

## Features

- **Retrieve Sales Data:** View product sales data 
- **Product Details:** Get detailed information about each product, including description, reviews, price of last 5 months and sales history

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- MongoDB database with products data inside

### Installation

1. Clone the repository:
<pre><code>
git clone https://github.com/akjadhav2212/dashboard.git
</pre></code>

2. Build the docker image:
<pre><code>
docker build -t salesdash .
</pre></code>

3. Run the docker container:

Provide a MongoDB connection string in the MONGO_DB_URI environment variable, PORT is set to 3000 and JWT_SECRET set as per your choice.

<pre><code>
docker run -d -e PORT=3000 -e MONGO_DB_URI="mongodb+srv://akjadhav2212:Aakash2212@cluster0.qhmsgk5.mongodb.net/dashboard" -e JWT_SECRET="ITISECRET" -p 3000:3000 salesdash
</pre></code>

8. Access the application at `http://localhost:3000` in your browser.

## API Documentation

For detailed information about the API endpoints and usage, refer to the [API Documentation](./backend/docs/apidocumentation.md).

## Contributing

Contributions are welcome! 

## Contact

For any inquiries or feedback, please contact [yourname](mailto:akjadhav2212@gmail.com).
