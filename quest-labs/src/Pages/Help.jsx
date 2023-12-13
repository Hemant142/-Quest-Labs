import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Help.css"
import { FiSearch } from "react-icons/fi";
import { flexbox } from '@chakra-ui/react';

const initialData=[
  {
    "id":1,
    "title": "Intercom Overview",
    "subtitle": "See how your customer service solution works.",
    "articles":17
  },
  {
    "id":2,
    "title": "Getting Started",
    "subtitle": "Everything you need to know to get started with intercom",
    "articles":65
  },
  {
    "id":3,
    "title": "Help Desk",
    "subtitle": "Boost productivity with a workspace that connects your inbox, tickets, and help center",
    "articles":89
  },
  {
    "id":4,
    "title": "AI Chatbot",
    "subtitle": "Cut support volume and increase efficiency with an AI chatbot and automations",
    "articles":33
  },
  {
    "id":5,
    "title": "Proactive Support",
    "subtitle": "Get ahead of support volume with product tours, outbound messages, and more",
    "articles":610
  },
  {
    "id":6,
    "title": "Automation",
    "subtitle": "Automate simple processes, speed up your workflows and offer proactive support",
    "articles":34
  },
  {
    "id":7,
    "title": "Articles",
    "subtitle": "Use Articles in your Help Center to allow customer to self serv.",
    "articles":40
  },
  {
    "id":8,
    "title": "Reports",
    "subtitle": "Measuring  the performance of your teams, messages, articles and automations.",
    "articles":32
  },
  {
    "id":9,
    "title": "Contacts",
    "subtitle": "Tracking your customer in the Intercom platform for better relationships.",
    "articles":49
  },
  {
    "id":10,
    "title": "Messenger",
    "subtitle": "Setting up and customizing your Messenger to start chatting with customers",
    "articles":30
  },
  {
    "id":11,
    "title": "App Store",
    "subtitle": "Learn about Intercome's app store, adding app to your workspace and building your own custom apps.",
    "articles":50
  },{
    "id":12,
    "title": "Phone",
    "subtitle": "Make every call count. Solve customer problems faster with phone call, video calls, and screen sharing.",
    "articles":8
  },
  {
    "id":13,
    "title": "Switch",
    "subtitle": "Reduce hold times for your customers move phone conversations to Messenger.",
    "articles":6
  },
  {
    "id":14,
    "title": "Custom Actions & Objects",
    "subtitle": "Boost your bots effectiveness and resolve more customer questions automatically.",
    "articles":18
  },
  {
    "id":15,
    "title": "Intercom in youor App",
    "subtitle": "Everything you need to know about installing and using Intercom in your mobile app.",
    "articles":20
  },
  {
    "id":16,
    "title": "Community",
    "subtitle": "FAQs from the Intercom Community forum",
    "articles":20
  },
 
  {
    "id":17,
    "title": "Academy",
    "subtitle": "Using Intercom Academy to level up and learn new skills.",
    "articles":2
  },
  {
    "id":18,
    "title": "Privacy & Terms",
    "subtitle": "Updating your privacy policy to include Intercome, and our own terms and privacy plocies.",
    "articles":15
  }

]
export default function Help() {
  const [data, setData] = useState(initialData);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(initialData);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/he');
      console.log(response.data.help,"help")
      setData(response.data.help);
      setFilteredData(response.data.help);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className='help-page '>
      <div style={{display:"flex", justifyContent:"space-around"}}>
        <input
      type="text"
      placeholder="Search by title"
      style={{border:"1px solid black",width:"70%"}}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch} style={{color:"blue"}}><FiSearch /></button></div>
    
    <p>Total Collections: {data.length}</p>

    {filteredData.length>0&&filteredData.map((item, index) => (
      <div key={index}>
        <div>
          <hr></hr>
          <h2 style={{fontWeight:"bold"}}>{item.title}</h2>
          <p>{item.subtitle}</p>
          <p style={{color:"gray"}}>{item.articles} articals</p>

          {/* <ul> */}
            {/* <li></li> */}
          {/* </ul> */}
        </div>
       
      </div>
    ))}
  </div>
);
};