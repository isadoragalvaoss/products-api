# API Products

This is a simple RESTful API for managing products and managing a cart, built with Node.js and Firebase.
<br>
<br>

## Technologies

- Node.js
- Express
- Firebase Realtime Database
  <br>
  <br>

## Endpoints

### GET /products

Get all products.

### GET /products/:id

Get a single product by ID.

### POST /products

Create a new product.

### PUT /products/:id

Update a product by ID.

### DELETE /products/:id

Delete a product by ID.

<br>

### GET /cart

Get all cart.

### POST /cart

Add a product to the cart.

### PUT /cart/:id

Update a product from cart.

### DELETE /cart/:id

Delete a product from cart.

<br>
<br>

## Installation

To run this API on your local machine, you'll need to have Node.js and Firebase tools installed.

<br>

### Clone the repository:

```
git clone https://github.com/isadoragalvaoss/api-products.git
```

<br>

### Install dependencies:

```
cd api-products
yarn
```

<br>

### Credentials:

Add your Firebase service account credentials to <b>FIREBASE_CONFIG</b> and <b>FIREBASE_PROJECT_ID</b> in the file .env root directory of the project.

<br>

### Start the server

```
yarn start
```

<br>
<br>

## Contributing

Contributions are welcome! If you find a bug or want to add a new feature, please open an issue or submit a pull request.
