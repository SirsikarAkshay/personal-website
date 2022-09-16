import React from "react";
import { Box, Button, Divider, Heading, Text, VStack } from "@chakra-ui/react";

export function Education() {

    return(
        <Box bg='gray.700' alignSelf='flex-start' rounded='md' textAlign='center' w='25%' px='10px' py='10px' color='white'>
            <VStack spacing={15}>
                <Heading as="h6">
                    <Text fontSize='15px'>
                        Education
                    </Text>
                </Heading>
                <Divider />
                <Text fontSize='12px' textAlign='center'>
                    Currently pursuing Master of Science from the University of Zurich 
                    majoring in Software Systems.

                    Completed my Bachelor's degree from B.V.B college of Engineering and Technology, Hubballi
                    in the field of Information Science and Engineering.
                </Text>

                
                <Button bg='blue.700' color='white' textAlign='center' fontSize='12px'>
                        Click here to know more
                </Button>
            </VStack>
        </Box>
    )
};