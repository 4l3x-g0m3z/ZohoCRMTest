# Zoho CRM Contact Test

This project allows you to create a new contact in **Zoho CRM** using their API with **OAuth2 authentication**. It includes two scripts:

- `index.js`: Generates a **refresh token**.
- `createContact.js`: Uses the stored refresh token to **create a contact**.

---

## Prerequisites

- Node.js installed
- Zoho CRM account with API access
- A registered Zoho OAuth2 client to get `CLIENT_ID`, `CLIENT_SECRET`, etc.

---

##  Setup

1. **Clone the repository**:

   ```bash
   git clone https://github.com/4l3x-g0m3z/ZohoCRMTest.git
   cd ZohoCRMTest
   ```
2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a .env file with the following**
    ```env
    CLIENT_ID=
    CLIENT_SECRET=
    SCOPE=
    PORT=
    REFRESH_TOKEN=
    REDIRECT_URL=
    ```

##  Run 
    ```bash
    //to generate a refresh token
    node index.js 

    //creates a contact 
    node createContact.js
    ```

