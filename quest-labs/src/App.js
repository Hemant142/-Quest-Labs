import React, { useState } from 'react';
import { Button } from '@chakra-ui/react'
import { IoIosArrowDown } from "react-icons/io";
import { RiChatSmileLine } from "react-icons/ri";
import './App.css'; 
import Model from './Component/Model';
import ModelRoutes from './Routes/ModelRoutes';

const App = () => {
  const [isBoxOpen, setIsBoxOpen] = useState(false);

  const toggleBox = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <div className="app-container">
      <Button className="toggle-button" colorScheme='blue' onClick={toggleBox} borderRadius={"50%"} width={"50px"} height={"50px"}>
      {isBoxOpen? <IoIosArrowDown />: <RiChatSmileLine />}
      </Button> 
      {isBoxOpen && (
        <div className="model-box">
        <ModelRoutes/>
          <Model/>
        </div>
      )}
    </div>
  );
};

export default App;