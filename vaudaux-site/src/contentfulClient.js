//Création de la variable qui permettera les actions avec le cms Headless contentfull
import * as contentful from 'contentful';
const SPACE_ID = "8mqhktxoiyqm";
const ACCESS_TOKEN = "pI1ytRCHGE60Hx83HQ_ivub6v-mHfydV5U1267xVhV8";


//Création du client qui contient le spaceId et le token
const contentfulClient  = contentful.createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });



  export default contentfulClient;
  