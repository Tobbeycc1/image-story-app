import  { useEffect, useState } from 'react';
import axios from 'axios'

function Detail(props) {
    useEffect(() => {
        getData()
    },[]);

    async function getData() {
        try {
            const res= await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=7c2e7519f8dc402bae031afd63e17297')
            const data = await res.data.articles
            console.log(data); 
            setValues(data)
         } catch (err) {
          console.log(err); 
         
         }
    }

    const [values, setValues]= useState('')
    return(
        <div>
            {
               values!='' && values.map((val)=>(
                    <div key={val.title}>
                        <p>{val.title}</p>
                    </div>
                ))
            }
        </div>
    )
}
export default Detail