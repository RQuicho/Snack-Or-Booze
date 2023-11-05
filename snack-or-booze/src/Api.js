import axios from "axios";

const BASE_API_URL = "http://localhost:5000";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/snacks`);
      return result.data;
    }
    catch(e) {
      console.log(e);
    }
  }
  static async getDrinks() {
    try {
      const result = await axios.get(`${BASE_API_URL}/drinks`);
      return result.data;
    }
    catch(e) {
      console.log(e);
    }
  }

}

export default SnackOrBoozeApi;
