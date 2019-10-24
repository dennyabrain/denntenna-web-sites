import React, { useState, useEffect } from 'react'
import {Box, Stack, Heading, Text} from 'grommet';
import Image from './1/image'

/**
* @author
* @function One
**/

const One = () => {
  const [fetching, setFetching] = useState(false)

useEffect(()=> {
  setFetching(true)
})

 return (
    <Stack anchor="center">
        <Box>
            <Image/>
        </Box>
        <Box background={'brand'} pad={'medium'} margin={'large'} round={'xsmall'}>
            <Heading level={1}> Hi </Heading>
            <Text size={'medium'}> I am going to challenge myself by making these web collages everyday</Text>
            <br/><br/><br/>
            <Text size={'xsmall'}> psst. if you scroll down, you'll see my diary!</Text>
        </Box>
    </Stack>
 )
}

export default One