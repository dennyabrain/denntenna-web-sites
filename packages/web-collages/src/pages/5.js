import React, { useState, useEffect } from 'react'
import {Grommet, Box, Grid, Stack, Heading, Text} from 'grommet'
import {theme} from 'ui-core'

/**
* @author
* @function Five
**/

const Five = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <Grommet full theme={theme}>
            <Stack anchor={'bottom'}>
                <Box gridArea={'logo'} margin={'large'} width={'medium'} height={'medium'}> 
                    <img src='https://d2w9rnfcy7mm78.cloudfront.net/5347457/large_9479b2452074025abcc9ce07a125a7a3.jpg?1572121013?bc=0'/>
                </Box>
                <Box direction={'row'} background={{color:'light-1', opacity:'0.8'}} margin={'small'} pad={'xsmall'} round={'xsmall'} wrap={'true'}>
                    <Text size={'medium'}> a very </Text>
                    <Text size={'medium'} color={'brand'}> &nbsp;sleepy barista </Text>
                    <Text size={'medium'}> &nbsp;tried to make a heart on my coffee at 8:00 am </Text>
                </Box>
            </Stack>
        </Grommet>
    )
}

export default Five