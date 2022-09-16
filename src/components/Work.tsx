import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import { VStack, Divider, Button } from "@chakra-ui/react";

export function Work() {
    return(
    <Box bg='gray.700' alignSelf='flex-start' rounded='md' textAlign='center' w='25%' color='white' px='10px' py='10px'>
        <VStack spacing={15}>
                <Heading as="h6">
                    <Text fontSize='15px'>
                        Work Experience
                    </Text>
                </Heading>
                <Divider />
                <Text fontSize='10px' textAlign='center'>
                    Currently working as a Full Stack Web Developer at Leanarc GmBH.Responsible for building a web application which provides a platform for Cloud service providers
                    and subscribers to find consensus.
                    Previously Worked as an Engineer Trainee at Mercedes Benz R & D, India
                    as a Backend Developer for a Dynamic Reporting Platform. 
                </Text>

                
                <Button bg='blue.700' color='white' textAlign='center' fontSize='12px'>
                        Click here to know more
                </Button>
            </VStack>
    </Box>
    )

};