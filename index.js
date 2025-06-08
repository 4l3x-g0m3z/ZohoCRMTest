//The following script creates a local server and the required steps to generate the refresh token
require('dotenv').config();
const express = require('express');

const app = express();
const axios = require('axios');

const {CLIENT_ID,CLIENT_SECRET,SCOPE,REDIRECT_URL,PORT} = process.env;

app.get("/",(req,res) =>{
    res.send(`<a href="https://accounts.zoho.com/oauth/v2/auth?response_type=code&client_id=${CLIENT_ID}&scope=${SCOPE}&redirect_uri=${REDIRECT_URL}&access_type=offline">Log in</a>`);
});

app.get("/redirect", async (req,res)=>{
    const {code} = req.query;

    if (!code){
        res.status(400).send("invalid code");
    }
    try{
        const response = await axios.post('https://accounts.zoho.com/oauth/v2/token',null,
            {
                params : {
                    grant_type : "authorization_code",
                    client_id:CLIENT_ID,
                    client_secret:CLIENT_SECRET,
                    redirect_uri:REDIRECT_URL,
                    code
                }
            }
        );
        console.log(response.data);
        res.status(200).send(response.data);
    }catch(error){
        console.error(error);
        res.status(500).send(error);
    }
});



app.listen(PORT,()=>{
    console.log(`server running on port: ${PORT}`);
})

 
