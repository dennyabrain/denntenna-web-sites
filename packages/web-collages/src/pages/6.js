import React, { useState, useEffect } from 'react'
import {layout} from 'ui-core';
import { Grommet, Box, Grid, ResponsiveContext, Text, Heading } from 'grommet';
import {theme} from 'ui-core'

const {BaseGrid} = layout;


/**
* @author
* @function Six
**/

const Six = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <Grommet full theme={theme}>
            <ResponsiveContext.Consumer>
                {size=>(
                    size=='medium'
                    ?
                        <Grid
                            rows={['flex']}
                            columns={['flex','flex','flex','flex','flex','flex','flex','flex','flex','flex','flex','flex']}
                            gap={'small'}
                            margin={'medium'}
                            areas={[
                                {name:"one-to-four", start:[0,0], end:[3,0]},
                                {name:"five-to-eight", start:[4,0], end:[6,0]},
                                {name:"eight-to-ten", start:[7,0], end:[8,0]},
                                {name:"ten-to-eleven", start:[9,0], end:[10,0]},
                                {name:"eleven-to-twelve", start:[10,0], end:[11,0]},
                                
                            ]}
                        >
                            <Box gridArea={'one-to-four'} >
                                <Box direction={'column'} align={'baseline'}>
                                    <Text size={'xlarge'}> Having fun on Hinge </Text>
                                    <Text size={'medium'}> One of the reasons I am not good at online dating could be attributed to my inability to take it too seriously </Text>
                                </Box>
                            </Box>

                            <Box gridArea={'five-to-eight'}  overflow={'hidden'}>
                                <img src={'https://d2w9rnfcy7mm78.cloudfront.net/5351758/large_05d14a3ef909be26f84f714350859e43.jpg?1572203941?bc=0'}/>                
                            </Box>

                        </Grid>
                    :
                        <Grid
                            rows={['auto', 'auto']}
                            columns={['flex','flex','flex','flex']}
                            gap={'small'}
                            margin={'medium'}
                            areas={[
                                {name:"text", start:[0,0], end:[1,0]},
                                {name:"image", start:[1,1], end:[3,1]}
                                
                            ]}
                        >
                            <Box gridArea={'text'} >
                                <Box direction={'column'} align={'baseline'}>
                                    <Text size={'xlarge'}> Having fun on Hinge </Text>
                                    <Text size={'medium'}> One of the many reasons I am not good at online dating could be attributed to my inability to take it too seriously </Text>
                                </Box>
                            </Box>
            
                            <Box gridArea={'image'}  overflow={'hidden'}>
                                <img src={'https://d2w9rnfcy7mm78.cloudfront.net/5351758/large_05d14a3ef909be26f84f714350859e43.jpg?1572203941?bc=0'}/>                
                            </Box>
            
                        </Grid>
                )}
            </ResponsiveContext.Consumer>
            
        </Grommet>
    )
}

export default Six