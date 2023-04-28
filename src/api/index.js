import axios from "axios";

const URL =
  "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "11.847676",
    tr_latitude: "12.838442",
    bl_longitude: "109.095887",
    tr_longitude: "109.149359",
  },
  headers: {
    "X-RapidAPI-Key": "6365561879msh5c18928be701c6cp1012b2jsn282cc0ac48f6",
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    //this is the part where we write the request code

    const {
      data: { data },
    } = await axios.get(URL, options);
    return data;
  } catch (error) {
    // this will execute when it runs to an error
    // console.log(error);
  }
};
