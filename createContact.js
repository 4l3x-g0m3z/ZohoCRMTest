require('dotenv').config();
const axios = require('axios');
const { json } = require('body-parser');

const {CLIENT_ID,CLIENT_SECRET,REFRESH_TOKEN} = process.env;




async function get_token(){
   try{
    const response_token = axios.post('https://accounts.zoho.com/oauth/v2/token',null,
        {
            params:{
                client_id:CLIENT_ID,
                client_secret:CLIENT_SECRET,
                grant_type:'refresh_token',
                refresh_token:REFRESH_TOKEN
            }
        }
    );
    return response_token;
   }catch(e){
    console.log(e)
    throw e;
   }
}

async function create_contact(){
    try {
        const token_data = await get_token();
        //console.log(token_data.data);
        const {access_token,api_domain} = token_data.data;
        const Contact = {
            data: [
            {
                Last_Name: "Rob",
                First_Name: "Williams"
            }
            ]
        }
        const response_contact = await axios.post(`${api_domain}/crm/v8/Contacts`,JSON.stringify(Contact),{
            headers:{
                'Content-Type' : 'application/json',
                'Authorization' : `Zoho-oauthtoken ${access_token}`
            }
            
        });
        console.log(`Response: ${JSON.stringify(response_contact.data)}` );
    } catch (error) {
        console.log("error: ",error);
    }
}

create_contact();