import React from "react";
import {Heading, Text, Divider} from "@chakra-ui/react"
import { VStack } from "@chakra-ui/react";

export function Title() {

    return(
        <Heading as="h5" bg='gray.700' w='95%' py='10px' rounded='md' color='white'>
            <VStack>
                <Text textAlign="center" fontSize="25px">Akshay Sirsikar</Text>
                <Divider />
                <Text textAlign="center" fontSize="15px">
                    "If we keep holding on to our past achievements and failures, what are we going to be today?"
                </Text>
            </VStack> 
        </Heading>
    )
};