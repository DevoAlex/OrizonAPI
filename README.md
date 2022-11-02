# :airplane: MeditAPI

REST API for a sustainable travel agency application.

## :question: Why

This project is the final practice for start2impact Node.js course.

## :bulb: How it works

This API has three data Schemas:

- Users: data of the subscripted users
- products: the trips available in the agency
- Orders: the orders already booked by the users

Using the correct [endpoints](#endpoints) you can Create, Read, Update ore Delete (CRUD) users,products and orders.
You can search for the orders using the id, the date they were created and the products they contain.
For this project I used Node.js (with Express) and MongoDB database.

## :books: Libraries

- Express
- dotenv
- Helmet
- Morgan
- Mongoose
- Date-fns

## :floppy_disk: Installation

First of all, you need Node.js installed.  
If you don't have it, you can download it here:
[Node.js](https://nodejs.org/it/download/)  
After the installation, you're ready to go.

### 1 - Clone the repository

`git clone https://github.com/DevoAlex/OrizonAPI.git`

### 2 - Install the dependencies

`npm install`

### 3 - Start it

`npm start`

### 4 - Connect your MongoDB database

Create, if doesn't exist, a `.env` file and then insert an enviroment variable named `DB_URI`with your MongoDB connection string.  
Example:
`DB_URI="mongodb+srv://...`

### 5 - Test it with a client

Using something like Postman, Thunderclient or Insomnia, you can start using this API on the port 3000.

## :open_file_folder: Endpoints

### Users

You can get the entire users list with a GET request:

`/users`

or GET data for a specific user:

`/users/:userId`

:userID must be a valid MongoDB id.  
You can PATCH or DELETE user data with the same endpoint.

Finally, you can add a new user with a POST request:

`/users`

```json
{
    "firstName": "insert an alphanumeric string",
    "lastName": "insert an alphanumeric string",
    "email": "insert an email"
}
```

### Products

You can get the entire products list with a GET request:

`/products`

or GET data for a specific target:

`/products/:productId`

:productId must be a valid MongoDB id.  
You can PATCH or DELETE a product with the same endpoint.

Finally, you can add a new product with a POST request:

`/products`

```json
{
    "name": "insert an alphanumeric string",
    "price": "insert a number"
}
```

### Orders

You can get all the orders with a GET request

`/orders`

or GET data for a specific order:

`/orders/:orderId`

You can PATCH or DELETE an order with the same endpoint.

For a new order, use a POST request:

`/orders`

```json
{
  "product": "insert a valid mongoID that represents the products ordered",
  "user": "insert the userId of the owner of the order",
  "createdOn": "defaults to the date when the order has been made"
}
```

You can search for orders with a certain date or product:

`/orders/createdOn/:date` for getting orders made in a certain date,
`/orders/containsProduct/:productId"` for getting orders that contain a certain product,


## :page_with_curl: License

[MIT](https://choosealicense.com/licenses/mit/)

## :e-mail: Contact Me

Any questions? Send me an e-mail here: alexpeluso.dev@gmail.com <br>
You can find my Linkedin profile here: https://www.linkedin.com/in/alex-peluso-a42347227/