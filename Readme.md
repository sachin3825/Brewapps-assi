# BrewApps - Book Management API

BrewApps is a Node.js-based RESTful API for managing books. It allows users to create, read, update, and delete book entries.

## Table of Contents

- [Project Setup](#project-setup)
- [Routes](#routes)
- [Deployment](#deployment)

## Project Setup

Follow these steps to set up the BrewApps project:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/brewapps.git
```

### 2. Navigate to the Project Folder

```bash
cd brewapps
```

### 3. Install Project Dependencies

```bash
npm install
```

### 4. Environment Variables

Create a `.env` file in the project root and add your environment variables, including your MongoDB connection string:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=4000
```

### 5. Start the Server

- For development (with nodemon):

  ```bash
  npm run dev
  ```

- For production:

  ```bash
  npm start
  ```

## Routes

The API provides the following routes:

- `POST /api/v1/books/create-book`: Create a new book.
- `GET /api/v1/books/getAllBooks`: Get a list of all books.
- `PUT /api/v1/books/updateBook/:id`: Update a specific book by its ID.
- `GET /api/v1/books/getBook/:id`: Get details of a specific book by its ID.
- `DELETE /api/v1/books/deletebook/:id`: Delete a specific book by its ID.

Please ensure you include the necessary request payloads when making requests to the API for creating and updating books.

## Deployment

### Deploying on Render

To deploy your BrewApps API on Render, follow these steps:

1. Sign up for an account on [Render](https://render.com/) if you haven't already.

2. Create a new web service on Render.

3. Connect your Render service to your GitHub repository by providing the repository name and selecting your preferred branch.

4. Set up the following environment variables in Render:

   - `MONGODB_URI`: Your MongoDB connection string.
   - `PORT`: The port you want to use (e.g., `4000`).

5. Click "Save Changes" to trigger a new deployment.

6. Render will automatically build and deploy your API. You can access it using the URL provided in the Render dashboard.

That's it! Your BrewApps API is now deployed and accessible on Render.
