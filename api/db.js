import axios from 'axios';
import {RAPID_API_KEY} from '../images/constantimages';
const baseUrl = 'https://exercisedb.p.rapidapi.com';

const key = RAPID_API_KEY



const apiCall = async (url, params) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,
      headers: {
        'X-RapidAPI-Key':'aac91ca5e9mshd7d4f1a1df7975ep1b21d7jsn8b23ea097c60',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchExercises = async (bodyPart) => {
  let data = await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
  return data;
};
