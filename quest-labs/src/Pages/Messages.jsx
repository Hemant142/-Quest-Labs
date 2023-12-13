import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { BiSolidSend } from 'react-icons/bi';

export default function Messages() {
  const [data, setData] = useState([]);
  const [text, setText] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/messages');
      console.log(response.data.help,"help")
      setData(response.data.messages);
    
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sendMessage=()=>{
    
  }
 
  return (
    
    <div style={{maxHeight:"65vh"}}>
 <div className='help-page ' style={{}}>
     
     <div className="news-container" >
     <h1 className="page-title">Message</h1>
  

       <input
     type="text"
     style={{border:"1px solid #0576f0",height:"1px", width:"100%"}}
     
     
    
   />
  </div>
   
 
<div>
   {data.length>0?
   ( <div>
    {   data.map((item, index) => (
     <div key={index}>
       <div>
         <hr></hr>
         <h2>{item.text}</h2>
        
       </div>
      
     </div>
   ))}
   </div>):(<div> Please send a message</div>)
}
   </div>


   
 </div>

 
 <div className='input-Serach' style={{bottom:0}}>
<InputGroup size='md'>
      <Input
        pr='4.5rem'
        variant='filled' placeholder='Message' 
        onChange={(e) => setText(e.target.value)}
      
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' color={"blue"}   >
           
        <BiSolidSend />
        </Button>
      </InputRightElement>
    </InputGroup>


</div>


    </div>
      
 

    
  )
}
