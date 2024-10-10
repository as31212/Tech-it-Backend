
# Tech-IT API Documentation

## User Routes

### 1. Test Endpoint
- **URL**: `/test`
- **Method**: `GET`
- **Description**: A test endpoint to verify the API is working.
- **Response**: 
  - **Status**: `200 OK`
  - **Body**: `"this is a test"`

### 2. Register User
- **URL**: `/register`
- **Method**: `POST`
- **Description**: Endpoint for user registration.
- **Controller**: `registrationController`
- **Body**:
    ```json
    {
        "email": "required",
        "password": "required"
    }
    ```

### 3. Login User
- **URL**: `/login`
- **Method**: `POST`
- **Description**: Endpoint for user login.
- **Controller**: `loginController`
- **Body**:
    ```json
    {
        "email": "required",
        "password": "required"
    }
    ```
-
---

## Product Routes

### 1. Add Product
- **URL**: `/add`
- **Method**: `POST`
- **Description**: Endpoint to add a new product.
- **Controller**: `addProductController`
- **Body**:
    ```json
    {
        "name": "required",
        "price": "required",
        "description": "optional",
        "mainImage": "required",
        "images": ["optional"],
        "categories": ["optional"]
    }
    ```

### 2. Delete Product
- **URL**: `/delete`
- **Method**: `DELETE`
- **Description**: Endpoint to delete a product.
- **Controller**: `deleteProductController`
- **Body**:
    ```json
    {
        "id": "required"
    }
    ```

### 3. Edit Product
- **URL**: `/edit`
- **Method**: `PATCH`
- **Description**: Endpoint to edit product details.
- **Controller**: `editProductController`
- **Body**:
    ```json
    {
        "name": "optional",
        "price": "optional",
        "description": "optional",
        "mainImage": "required",
        "images": ["optional"],
        "categories": ["optional"]
    }
    ```

---

## Notes
- All endpoints use `JSON` for request and response bodies.
- Make sure to handle all necessary validation and error-handling within each controller.
