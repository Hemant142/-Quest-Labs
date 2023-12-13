import { Box, Card, CardBody, CardFooter, Center, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./News.css"
const initialData= [
  {
    "id":1,
    "image":"https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    "title":"Support customers with Fin in 45 languages—join the open beta👇",
    "tags":["New","AI", "Support"],
    "description":"Support your customers with Fin in 45 languages—with no extra setup required."
  },
  {
    "id":2,
    "image":"https://downloads.intercomcdn.com/i/o/850964865/8d1717b98563f4697ea8945a/Cover.png",
    "title":"Streamline external collaboration with side conversations",
    "tags":["Inbox", "New"],
    "description":"Start a conversation with external partners from within the context of a conversation or ticket."
  },
 
  {
    "id":3,
    "image":"https://downloads.intercomcdn.com/i/o/861417391/6794b48e891b5e19cdc713ba/Screenshot+2023-10-25+at+09.22.37.png",
    "title":"Give your customers a centralized view of their tickets with the tickets portal",
    "tags":["Inbox","New"],
    "description":"When using Intercom tickets in a b2b support use case, the tickets portal enables an external view of all tickets grouped by company."
  },
  {
    "id":4,
    "image":"https://downloads.intercomcdn.com/i/o/850163797/25179da748b8ed586e93d154/Cover.png",
    "title":"Set the right expectations by customising the Start Conversation button in the Messenger 💬",
    "tags":["New feature", "Messenger"],
    "description":"Customize the Start Conversation button in your Messenger 🪄"
  },
  {
    "id":5,
    "image":"https://downloads.intercomcdn.com/i/o/819938559/ea4a2f7a922012859a9273d2/Fin-Multilingual-beta-GTM-landscape.png",
    "title":"Support customers with Fin in 8 more languages—join the open beta👇",
    "tags":["New","AI", "Support"],
    "description":"Support your customers with Fin in 8 languages—with no extra setup required."
  },
  {
    "id":6,
    "image":"https://downloads.intercomcdn.com/i/o/822176016/29594894d4dc8ee9a23cdf8c/+New-Item-Cover.png",
    "title":"Better tickets for your team and your customers",
    "tags":["Inbox", "New"],
    "description":"We’ve redesigned tickets to help your team solve any type of complex issue faster and more effectively than ever before."
  },
  {
    "id":7,
    "image":"https://downloads.intercomcdn.com/i/o/803905487/57fa467841895c05912197de/Cover+%281%29.png",
    "title":"Fin just got a whole lot faster with AI Answer streaming 🏎️💨",
    "tags":["AI", "Messenger","Bots"],
    "description":"Fin is now streaming AI answers in the web Messenger!"
  },
  {
    "id":8,
    "image":"https://downloads.intercomcdn.com/i/o/793593325/cc75755990fb2b76932ebc8c/redirect+cover+image.png",
    "title":"Automatically redirect URLs with Zendesk Articles migration",
    "tags":["Support", "New feature"],
    "description":"When you migrate your articles to Intercom using our Zendesk migration tool – we'll now automatically create URL redirects from your previous URLs to your new Intercom articles."
  },
  {
    "id":9,
    "image":"https://downloads.intercomcdn.com/i/o/682705579/008a3abde8ef60281464e425/Cover+New.png",
    "title":"Guide your customers to success with our new Checklists features",
    "tags":["Feature update" ,"Outbound Messaging"],
    "description":"Our new features are designed to streamline your onboarding process by making it easier for your customers to complete all necessary checklist steps."
  },
  {
    "id":10,
    "image":"https://downloads.intercomcdn.com/i/o/763211142/26ebe616052617c0426b76c7/Messenger_News_Cover.png",
    "title":"The State of AI in Customer Service: 2023 Report",
    "tags":["Support", "New"],
    "description":"AI is fundamentally changing the customer service industry—so we asked 1,000+ global support professionals how they’re making the most of this once-in-a-generation shift."
  }
]
export default function News() {
  const [data, setData] = useState(initialData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/news');
      // console.log(response.data.news)
      setData(response.data.news);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  console.log(data,"data")
  return (
    <div className='news-page' >

<div className="news-container" >
      <h1 className="page-title">News</h1>
    </div>


{data.length>0&&data.map((ele)=>(
  <Box>
 <Box width={"90%"} margin={"auto"} marginBottom={"20px"}>
    <Card maxW='sm'>
  <CardBody>
    <Image
      src={ele.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
   
  </CardBody>
  {/* <Divider /> */}
  <CardFooter className="card-footer">
  <Stack mt='1' spacing='3'>
      <Heading size='sm' className='heading'>{ele.title}</Heading>
      <Text color='blue'>
        {ele.tags +" "}
      </Text>
      <Text>
        {ele.description}
      </Text>
    </Stack>
    
  </CardFooter>
</Card>
    </Box>
  </Box>
))}
     


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
    </div>
  )
}
