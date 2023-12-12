import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, RadioGroup, Stack, useDisclosure } from '@chakra-ui/react'
import React, { useState } from 'react'
import './Model.css'; 
import ModelRoutes from '../Routes/ModelRoutes';
import Navbar from './Navbar';
export default function Model() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  const [scrollBehavior, setScrollBehavior] = useState('inside')

  const btnRef = React.useRef(null)
  return (
    <div className='Container'>
         {/* <>
      <RadioGroup value={scrollBehavior} onChange={setScrollBehavior}>
        <Stack direction='row'>
        </Stack>
      </RadioGroup>


      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={scrollBehavior}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
           
               
          </ModalBody>
          <ModalFooter>
            
          </ModalFooter>
        </ModalContent>

        
      </Modal>
    
      <ModelRoutes/>
      
      
      
    </> */}
    {/* <ModelRoutes/> */}
<Navbar/>
{/* <ModelRoutes/> */}
    {/* <Model/> */}

    </div>
  )
}
