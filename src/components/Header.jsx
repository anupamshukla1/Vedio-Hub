import React from 'react'
import {Drawer,DrawerBody,DrawerHeader,DrawerOverlay,DrawerContent,
DrawerCloseButton,Button, useDisclosure, VStack,HStack} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import {BiMenuAltLeft} from 'react-icons/bi'



function Header() {
    const {isOpen,onClose,onOpen} = useDisclosure();

  return (
    <>
        <Button zIndex={'overlay'} pos={'fixed'} onClick={onOpen }
         top={'4'} left={"4"} colorScheme="purple"
          p={"0"} w={"10"} h={"10"} borderRadius={"full"}>
        
            <BiMenuAltLeft size={"20"}/>
        </Button>
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
            <DrawerOverlay/>
            <DrawerContent>
            
                <DrawerCloseButton/>
                <DrawerHeader>VEDIO-HUB</DrawerHeader>
                <DrawerBody>
                    <VStack alignItems={'flex-start'}>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/'}>Home</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/vedios'}>Vedios</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/videos?category=free'}>Free Vedios</Link>
                        </Button>
                        <Button onClick={onClose} variant={"ghost"} colorScheme={'purple'}>
                            <Link to={'/upload'}>Upload Vedio</Link>
                        </Button>
                    </VStack>
                    <HStack pos={'absolute'} bottom={'10'} left={'0'}  width={'full'} justifyContent={'space-evenly'}>
                        <Button colorScheme={"purple"}>
                        <Link to={'/login'} >Log In</Link>

                        </Button>
                        <Button colorScheme={"purple"} variant={'outline'}>
                        <Link to={'/signup'}>Sign Up</Link>

                        </Button>
                    </HStack>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>
  );
};

export default Header;