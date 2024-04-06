### Note
All routes are served under the `/api/v1/` prefix.
Bearer token should be passed under the `Authorization` header.(`"Bearer <token>"`)
### Health Check

- **Endpoint:** `GET /health`
- **Description:** Endpoint to check the health of the server.
- **Request Parameters:** None
- **Response:**
{
"success": true,
"message": "I am healthy"
}
- **Status Codes:**
- 200 OK: Server is healthy and responding.


### Authenticated User Check

- **Endpoint:** `GET /authuser`
- **Description:** Endpoint to check if the user is authenticated.
- **Authentication Required:** Yes (Bearer token)
- **Response:**
{
"success": true,
"message": "authenticated user"
}
- **Status Codes:**
- 200 OK: User is authenticated.
- 401 Unauthorized: User is not authenticated.


### User Signup

- **Endpoint:** `POST /signup`
- **Description:** Endpoint for user registration.
- **Request Body:**
{
"username": "example_user",
"firstname": "John",
"lastname": "Doe",
"password": "examplepassword"
}
- **Response:**
{
"success": true,
"message": "User created"
}
- **Status Codes:**
- 200 OK: User created successfully.
- 403 Forbidden: User already exists.
- 411 Length Required: Invalid input.

### User Login

- **Endpoint:** `POST /signin`
- **Description:** Endpoint for user authentication.
- **Request Body:**
{
"username": "example_user",
"password": "examplepassword"
}
- **Response:**
{
"success": true,
"message": "Login successful",
"token": "<JWT Token>"
}
- **Status Codes:**
- 200 OK: Login successful.
- 411 Length Required: Invalid input.
- 411 Length Required: Incorrect password.
- 411 Length Required: User does not exist.

### Update Password

- **Endpoint:** `PUT /updatepassword`
- **Description:** Endpoint to update user password.
- **Authentication Required:** Yes (Bearer token)
- **Request Body:**
{
"oldPassword": "oldpassword",
"newPassword": "newpassword"
}
- **Response:**
{
"success": true,
"message": "Password updated"
}
- **Status Codes:**
- 200 OK: Password updated successfully.
- 411 Length Required: Invalid input.
- 411 Length Required: Old Password doesn't match.
- 411 Length Required: User does not exist.

### Get Random Product

- **Endpoint:** `GET /getproduct`
- **Description:** Endpoint to retrieve a random product.
- **Authentication Required:** Yes (Bearer token)
- **Response:**
{
"success": true,
"product": {
// Product details
}
}
- **Status Codes:**
- 200 OK: Product retrieved successfully.
- 401 Unauthorized: User is not authenticated.
