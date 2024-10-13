
# Tech IT API Documentation

This is the documentation for the Tech IT web application API, which handles products, cart management, wishlist management, user authentication, and more.

## Table of Contents
- [Base URL](#base-url)
- [Authentication](#authentication)
- [Product Endpoints](#product-endpoints)
  - [Add Product](#add-product)
  - [Edit Product](#edit-product)
  - [Delete Product](#delete-product)
- [Cart Endpoints](#cart-endpoints)
  - [Add to Cart](#add-to-cart)
  - [Remove from Cart](#remove-from-cart)
  - [Fetch Cart](#fetch-cart)
- [Wishlist Endpoints](#wishlist-endpoints)
  - [Add to Wishlist](#add-to-wishlist)
  - [Remove from Wishlist](#remove-from-wishlist)
  - [Fetch Wishlist](#fetch-wishlist)
- [Auth Endpoints](#auth-endpoints)
  - [Register](#register)
  - [Login](#login)

---

## Base URL
All requests will be made to the following base URL:

```
http://localhost:4004/
```

## Authentication
JWT (JSON Web Token) is used for authentication across the API. The token must be included in the Authorization header of any request requiring authentication.

### Example:
```
Authorization: Bearer <your_token>
```

---

## Product Endpoints

### Add Product
- **URL:** `/products/add/:id`
- **Method:** `POST`
- **Authentication:** Admin JWT token required
- **Description:** Adds a new product to the catalog.
- **Request Body:**
  ```json
  {
    "name": "Product Name",
    "price": 100,
    "description": "Product Description",
    "categories": ["category1", "category2"],
    "mainImage": "url_to_image",
    "images": ["url_to_image1", "url_to_image2"]
  }
  ```
- **Response:**
  - `201 Created`: Product successfully added
  - `400 Bad Request`: Missing or invalid fields

### Edit Product
- **URL:** `/products/edit/:id`
- **Method:** `PATCH`
- **Authentication:** Admin JWT token required
- **Description:** Updates the product with the given ID.
- **Request Body:** Only provide the fields to be updated.
  ```json
  {
    "id": "ProductID",
    "name": "New Name",
    "price": 200
  }
  ```
- **Response:**
  - `201 Created`: Product successfully updated
  - `400 Bad Request`: Product not found or invalid request

### Delete Product
- **URL:** `/products/delete/:id`
- **Method:** `DELETE`
- **Authentication:** Admin JWT token required
- **Description:** Deletes the product with the given ID.
- **Response:**
  - `202 Accepted`: Product successfully deleted
  - `400 Bad Request`: Product not found or invalid request

---

## Cart Endpoints

### Add to Cart
- **URL:** `/cart/add/:id`
- **Method:** `POST`
- **Authentication:** User JWT token required
- **Description:** Adds an item to the user’s cart.
- **Request Body:**
  ```json
  {
    "productId": "ProductID",
    "quantity": 2
  }
  ```
- **Response:**
  - `201 Created`: Item added to cart
  - `400 Bad Request`: User or product not found

### Remove from Cart
- **URL:** `/cart/delete/:id`
- **Method:** `DELETE`
- **Authentication:** User JWT token required
- **Description:** Removes an item from the user’s cart.
- **Request Body:**
  ```json
  {
    "productId": "ProductID"
  }
  ```
- **Response:**
  - `200 OK`: Item removed from cart
  - `400 Bad Request`: User or item not found

### Fetch Cart
- **URL:** `/cart/all/:id`
- **Method:** `GET`
- **Authentication:** User JWT token required
- **Description:** Retrieves all items in the user’s cart.
- **Response:**
  ```json
  {
    "userCart": [
      {
        "productId": "ProductID",
        "quantity": 2
      }
    ]
  }
  ```

---

## Wishlist Endpoints

### Add to Wishlist
- **URL:** `/wishlist/add/:id`
- **Method:** `PATCH`
- **Description:** Adds a product to the user’s wishlist.
- **Request Body:**
  ```json
  {
    "productId": "ProductID"
  }
  ```
- **Response:**
  - `200 OK`: Product added to wishlist
  - `400 Bad Request`: User or product not found

### Remove from Wishlist
- **URL:** `/wishlist/delete/:id`
- **Method:** `DELETE`
- **Description:** Removes a product from the user’s wishlist.
- **Request Body:**
  ```json
  {
    "productId": "ProductID"
  }
  ```
- **Response:**
  - `200 OK`: Product removed from wishlist
  - `400 Bad Request`: User or product not found

### Fetch Wishlist
- **URL:** `/wishlist/fetch/:id`
- **Method:** `GET`
- **Authentication:** User JWT token required
- **Description:** Retrieves all products in the user’s wishlist.
- **Response:**
  ```json
  {
    "wishlist": [
      "ProductID1",
      "ProductID2"
    ]
  }
  ```

---

## Auth Endpoints

### Register
- **URL:** `/auth/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  - `201 Created`: User account created
  - `400 Bad Request`: Email already in use or invalid data

### Login
- **URL:** `/auth/login`
- **Method:** `POST`
- **Description:** Logs in a user and returns a JWT.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  - `200 OK`: Login successful, returns JWT
  - `400 Bad Request`: Invalid username or password
