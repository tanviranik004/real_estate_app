import axios from 'axios'



export const baseUrl='https://bayut.p.rapidapi.com'


export const fetchApi = async(url)=>{
    const { data } = await axios.get((url),{
        headers: {
            'X-RapidAPI-Key': '063b67b542msh79863bc695c794ep1a32e1jsn1af89ec42e5a',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
          }

    })
 return data;
}