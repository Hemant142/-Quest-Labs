import React from 'react'
import "./Home.css"
import { BiSolidSend } from "react-icons/bi";
import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, CardHeader, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
export default function Home() {
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

    <Box  width={"90%"} margin={"auto"} marginBottom={"20px"}>
    <Card maxW='sm'>
    <CardHeader>
      <Heading size='sm'>Search for help</Heading>
    </CardHeader>
    <CardBody>
      <Text>Send Custom user attributes to Intercom   
</Text>
    </CardBody>
    <CardFooter>
      <Button>View here</Button>
    </CardFooter>
  </Card>
    </Box>
    
  </div>
  )
}
