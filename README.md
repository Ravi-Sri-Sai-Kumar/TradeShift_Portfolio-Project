## API Usage Examples in Postman Tool

---

### 1. User Registration

**POST** http://localhost:8080/api/auth/register
**Headers:**
| Key          | Value             |
|--------------|-------------------|
| Content-Type | application/json  |

**Sample JSON Body:**
{
  "username": "SAI KUMAR",
  "email": "saikumar1@gmail.com",
  "password": "1234567890"
}
                                                                  200 OK Response 
---

### User Login
**POST** http://localhost:8080/api/auth/login

**Headers:**
| Key          | Value             |
|--------------|-------------------|
| Content-Type | application/json  |
                                                                200 OK Response
---


**Sample JSON Body:**
{
  "username": "SAI KUMAR",
  "password": "1234567890"
}
                                                                200 OK Response
---

### Get Portfolio
**GET** http://localhost:8080/api/portfolio
--No Body
                                                                200 OK Response
---

### Create Portfolio
**POST**  http://localhost:8080/api/portfolio

**Headers:**
| Key          | Value             |
|--------------|-------------------|
| Content-Type | application/json  |
| Authorization| Bearer <jwt token>|

JSON(Body)
{
  "name": "My Portfolio"
}
                                                                200 OK Response
---

### Add Asset to Portfolio
**POST** http://localhost:8080/api/portfolio/8/assets

**Headers:**
| Key          | Value             |
|--------------|-------------------|
| Content-Type | application/json  |
| Authorization| Bearer <jwt token>|


Json(Body)
{
  "symbol": "AAPL",
  "quantity": 10
}
or
{
  "symbol": "AAPL",
  "type": "BUY",
  "quantity": 5,
  "price": 100
}
                                                                200 OK Response 
---

### Place an Order
**POST** http://localhost:8080/api/portfolio/8/orders

**Headers:**
| Key          | Value             |
|--------------|-------------------|
| Content-Type | application/json  |
| Authorization| Bearer {token}    |

JSON Body:

{
  "symbol": "AAPL",
  "type": "BUY",
  "quantity": 5,
  "price": 100
}
                                                                200 OK Response
---
                            






