import React from "react";
import { Box } from "@chakra-ui/react";

export function Education() {

    const getEducation = () => {
        return(
            <div> This is Akshay's Education</div>
        )
    }

    return(
        <div>
            <Box onClick={getEducation}>Education</Box>
        </div>
    )
};