import { Box, HStack, VStack } from '@chakra-ui/react';
import React from 'react';
import { Education } from './components/Education';
import { Title } from './components/Title';
import { Work } from './components/Work';

function App() {

  return (
    <Box>
      <VStack spacing={12}>
        <Title />
        <HStack align='flex-start' spacing={150}> 
          <Education />
          <Work />
        </HStack>
      </VStack>
    </Box>
  );
}

export default App;
