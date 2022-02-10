## CARD

Card generator API

## Routes

## /cards (POST)

Create the card:

Request Body:


-req.body.productName: Name of the Card

-req.body.productDescription: Description of the Card

Response Body:


res.data = {
{
  "message": "string",
  "data": [
    {
      "_id": 0,
      "productName": "string",
      "productDescription": "string"
    }
  ]
}
}

## /cards (GET)


Get the content

Request:

req.body.productName

Response:

{
  "message": "string",
  "data": [
    {
      "_id": 0,
      "productName": "string",
      "productDescription": "string"
    }
  ]
}

Swagger: http://localhost:5000/api-docs/

