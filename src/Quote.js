import  { useEffect, useState } from 'react';
import axios from 'axios'
import classes from './test.module.css'
import Modal from './Components/modal';
import { FiSearch } from 'react-icons/fi';



function Quote(props) {
    const [notes, getNotes]= useState([])
    const [big, getbig]= useState('')

   

    
    // const [views, setViews] = useState('')
    const [query, setQuery]= useState('')
    const [ourId, setOurId]= useState('')
    

    const key = 'odswiaW-xA2sP2PzaYKhmkgTLHYqLz395SNC5Xrejjw'
    
    
    async function dataGotten() {
        try {
            const res= await axios.get(`https://api.unsplash.com/search/photos/?client_id=${key}&query=${query}`)
            const data =  res.data.results
            console.log(data); 
            getNotes(data)
         } catch (err) {
          console.log(err); 
         
         }



    
    }
    
    async function idGotten() {
        try {
            const res= await axios.get(`https://api.unsplash.com/photos/${ourId}/?client_id=${key}`)
            const data =  res.data
            console.log(data); 
            getbig(data)
         } catch (err) {
          console.log(err); 
         
         }



    
    }


    function onChange(e) {
        setQuery (e.target.value)
       
         console.log(query);
    }

    function bigPic(e) {
        console.log(e.target.id)
        setOurId(e.target.id)
        
          
            
        
    }
    function goBack() {
        console.log('back');
        setOurId('');
        getbig('')
        
    }
    

    useEffect(() => {
        query !== '' && dataGotten()
        ourId !== '' && idGotten()
        ourId !== '' && goBack()
    },[query, ourId]);
  
    
    return(

        
        <div className={classes.bigBack} style={big !== '' ? {position: 'fixed'} : {position: 'relative'}}>

        <div className={classes.inputCon}>
<div className={notes.length>0 && query != '' ? classes.inputSubCon : classes.inputSubCOnRed}>

<FiSearch className={classes.searchIcon}/> 

{/* Input field */}
<input 
className={classes.input}  
type='text'  
onChange={onChange} 
/>

</div>

        </div>

        {
           query !== '' && big !== ''   ? <div>
            <Modal onClick={goBack}/>
            <div 
            className={classes.smallCon} 
            onClick={goBack}
            key={big.id}
            >
            <img src={big.urls.small} className={classes.small}  />
            
            </div>
        </div> : <p></p>
            
        }
      
           
            <div className={classes.flex}>
            {
                notes.length>0 && query != '' ? notes.map((item, index)=>(
                    
                    <div key={index} className={classes.imgCon} id={item.id} onClick={bigPic}>
            
                    
         <img src={item.urls.small}
         className={classes.img}
         id={item.id}
         />
                    </div>
                  

           
                    
                )) : <p className={classes.werey}>WEREY YOU NO GO TYPE SOMETHING, OLODO</p>
                
            }
            </div>
        </div>
    )
}
export default Quote