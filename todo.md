# To Do List for API Development

### 1. Test if JWT Middleware Works
- Ensure that the JWT authentication middleware works properly before proceeding.
- Test it by adding, deleting, and viewing user data that requires authentication.
- Ensure that protected routes respond correctly to valid and invalid tokens.

### 2. Create Routes for User Cart Management
- **Add to Cart Route (POST)**: Create a route that allows users to add items to their cart. This will include sending the product ID and quantity (if needed).
  - URL: `/cart/add`
  - Method: `POST`
  - Protected Route: Yes (JWT required)
  
- **Delete from Cart Route (DELETE)**: Create a route that allows users to remove items from their cart by product ID.
  - URL: `/cart/delete/:productId`
  - Method: `DELETE`
  - Protected Route: Yes (JWT required)
  
- **View Cart Route (GET)**: Create a route that allows users to view their current cart with all product details (populate with product info).
  - URL: `/cart/view`
  - Method: `GET`
  - Protected Route: Yes (JWT required)

### 3. Implement Error Handling Middleware
- Create custom error-handling middleware to catch and return appropriate error messages for all routes.
- Example:
  ```js
  app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    res.status(statusCode).json({ message: err.message || "Server Error" });
  });
