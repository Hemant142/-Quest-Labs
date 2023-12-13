import React from 'react'
import "./Home.css"
import { BiSolidSend } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { color } from 'framer-motion';

export default function Home() {
  const navigate = useNavigate()
  const handleSearch = () =>{
navigate("/help")
  }
  return (
    <div className="home-page blue-top" >
   
    <div className="content-container">
      <h1 className="page-title">Hello There</h1>
      <h1 className="sub-title">How can we help?</h1>
      <div className="message-box">
        <h1 className="box-text">Send us a message</h1>
        <div className='send-icon'><Link to={"/messages"}><BiSolidSend /></Link></div>
        
        <p className="reply-text">We typically reply within a day</p>

      </div>
      
    </div>

    <Box width={"90%"} margin={"auto"} marginBottom={"20px"}>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src='https://downloads.intercomcdn.com/i/o/798705491/802ac1eb4c72711c6a270831/Join%20the%20New%20Intercom%20Community.png?resize=568x'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
  </CardBody>
  <Divider />
  <CardFooter className="card-footer">
  <Stack mt='1' spacing='3'>
      <Heading size='sm' className='heading'>The Intercom Community</Heading>
      <Text>
        Be sure to check out the Intercon Community for support, plus tips & tricks from Intercom users and much more
      </Text>
    </Stack>
    
  </CardFooter>
</Card>
    </Box>

    <Box  width={"90%"} margin={"auto"} marginBottom={"20px"} borderRadius={"10px"} >
    <Card maxW='sm'>
     
    <CardHeader display={"flex"} justifyContent={"space-between"} alignItems={"center"} background={"#f2f2f2"} _hover={{color:"blue", background:"white"}} borderRadius={"10px"} onClick={handleSearch} padding={"10px"}>
   
      <Heading size='sm' >Search for help</Heading>
      <CiSearch color='blue' width={"90px"} height={"90px"} /> 
    </CardHeader>
   
    <CardBody>
      <Text  _hover={{color:"blue"}} display={"flex"} alignItems={"center"} justifyContent={"space-between"} >Send Custom user attributes to Intercom   <IoIosArrowForward color='blue' />
</Text> 
<Text  _hover={{color:"blue"}} marginTop={"8px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>Tracking user data in Intercom   <IoIosArrowForward color='blue' />
</Text>
<Text  _hover={{color:"blue"}} marginTop={"8px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>custimize the pre-made email template   <IoIosArrowForward color='blue' />
</Text> 

<Text  _hover={{color:"blue"}} marginTop={"8px"} display={"flex"} alignItems={"center"} justifyContent={"space-between"}>Forward your email to your team inbox   <IoIosArrowForward color='blue' />
</Text> 

    </CardBody>
   
  </Card>
    </Box>
    
  </div>
  )
}