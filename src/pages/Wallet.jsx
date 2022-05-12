import React from 'react';
import { Box, Center, VStack, Image, Heading, Button, Container, HStack, ButtonGroup, Stack, IconButton } from "@chakra-ui/react";
import dummyImage from '../components/images/123.png';
import { ArrowRightIcon, PhoneIcon } from '@chakra-ui/icons';


function Wallet() {
    return (
        <>
            <Center w="full" minHeight="100vh" bg="blackAlpha.900" color="whiteAlpha.800">
                <Box>
                    <VStack spacing={[4, 6, 6]}>
                        <Image h="250px" src={dummyImage} alt='cartoon' />
                        <Heading fontSize="21px">Please connect your wallet</Heading>
                        <Button colorScheme='teal' width="300px">
                            Connect wallet
                        </Button>
                        <Button leftIcon={<ArrowRightIcon />} colorScheme='teal' width="300px">
                            Connect with WalletConnect
                        </Button>
                    </VStack>
                </Box>

            </Center>
            <Box bg="gray.800" color="white">
                <Container maxW='1234' mx='auto' w='91%'>
                    <Stack
                        spacing={8}
                        direction={{ base: 'column', md: 'row' }}
                        justify='space-between'
                        py={{ base: '12', md: '16' }}
                        alignItems={{ base: 'center' }}
                    >
                        <HStack>
                            <Image h="120px" src={dummyImage} alt='cartoon' />
                            <Heading>Galapago</Heading>
                        </HStack>
                        <HStack>
                            <ButtonGroup variant='outline' spacing={{ base: '1', md: '6' }}>
                                <Button colorScheme='teal' variant='ghost'>
                                    User Docs
                                </Button>
                                <Button colorScheme='teal' variant='ghost'>
                                    Technical Docs
                                </Button>
                                <Button colorScheme='teal' variant='ghost'>
                                    Audit
                                </Button>
                            </ButtonGroup>
                        </HStack>
                        <HStack spacing={6}>
                            <IconButton
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='lg'
                                icon={<PhoneIcon />}
                            />
                            <IconButton
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='lg'
                                icon={<PhoneIcon />}
                            />
                            <IconButton
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='lg'
                                icon={<PhoneIcon />}
                            />
                            <IconButton
                                colorScheme='teal'
                                aria-label='Call Segun'
                                size='lg'
                                icon={<PhoneIcon />}
                            />
                        </HStack>
                    </Stack>
                </Container>
            </Box>
        </>


    )
}

export default Wallet;