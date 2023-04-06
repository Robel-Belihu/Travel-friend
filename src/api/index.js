import axios from "axios";

const options = {
  method: "GET",
  url: "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary",
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": "6365561879msh5c18928be701c6cp1012b2jsn282cc0ac48f6",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

const getPlacesData = async () => {
  try {
    //this is the part where we write the request code

    const response = await axios.get();
  } catch (error) {
    // this will execute when it runs to an error
  }
};
