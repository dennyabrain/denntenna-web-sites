import React, { useState, useEffect } from 'react'
import {Grommet, Grid, Box, Stack, Heading, Text} from 'grommet'
import {Img} from 'gatsby-image'

/**
* @author
* @function Three
**/

const Three = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
    setFetching(true)
    })

    return (
        <Grommet full>
            <Grid 
                
                fill
                rows={['flex']}
                columns={['flex', 'flex', 'flex']}
                areas={[
                    {name: 'first', start:[0,0], end:[0,0]},
                    {name: 'second', start:[1,0], end:[1,0]},
                    {name: 'third', start:[2,0], end:[2,0]}
                ]}
            >  
                <Box fill gridArea={'first'} overflow={'hidden'}  pad={'small'}> 
                    <img src="https://d2w9rnfcy7mm78.cloudfront.net/5337739/large_57cd81e73b27f829b019dad80dab8d67.jpg?1571989272?bc=0"/>
                </Box>
                <Box fill gridArea={'second'} overflow={'hidden'} pad={'small'}> 
                    <img src="https://d2w9rnfcy7mm78.cloudfront.net/5337692/large_106f4ad17149d0afadafb31a3c2bbed5.jpg?1571988922?bc=0"/>
                </Box>
                <Box fill gridArea={'third'} overflow={'hidden'} pad={'small'}> 
                    <img src="https://d2w9rnfcy7mm78.cloudfront.net/5337693/large_2a844fe71f63e79db75c69a28afc7598.jpg?1571988926?bc=0"/>
                </Box>
            </Grid>
            {/* <Box fill background={'brand'}>
             <Heading> HI </Heading>
            </Box> */}
        </Grommet>
    )
}

export default Three