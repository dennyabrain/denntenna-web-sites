import React, { useState, useEffect } from 'react'
import {Grommet, Box, Grid, Heading, Text} from 'grommet'
import {theme} from 'ui-core'

/**
* @author
* @function 
**/

const Four = () => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    const images=[
        {name:'aa', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343380/large_14c8f9f6514321dcabfa98a96ef213d5.jpg?1572044360?bc=0'},
        {name:'ab', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343381/large_efcf719bbb0cfd0f2c393bba929a8d70.jpg?1572044359?bc=0'},
        {name:'ba', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343383/large_48cadc31dd9cdcaa307de96f03be6600.jpg?1572044362?bc=0'},
        {name:'bb', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343378/large_722f15ad7dabfc835e329c95cd1bebe0.jpg?1572044359?bc=0'},
        {name:'ca', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343386/large_421a34203e96b9ffe7079d64d6caee3f.jpg?1572044362?bc=0'},
        {name:'cb', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343387/large_59a7e529c7a327c8f0e7957ded744d66.jpg?1572044363?bc=0'},
        {name:'da', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343384/large_662c9c71c048c0c814a60191f072cc6c.jpg?1572044362?bc=0'},
        {name:'db', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343388/large_1fa965ee5c5a97b3fd87f48801c89efd.jpg?1572044363?bc=0'},
        {name:'ea', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343385/large_a1525a2feaeef5ec901808316b166f57.jpg?1572044361?bc=0'},
        {name:'eb', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343382/large_ff4440ff3bfcbdf556613c05b32bb321.jpg?1572044361?bc=0'},
        {name:'fa', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343379/large_9d8d6bedee194afacf90d10fbf0dde01.jpg?1572044359?bc=0'},
        {name:'fb', url:'https://d2w9rnfcy7mm78.cloudfront.net/5343377/large_7998dce78c9054287e75dd1455980fd2.jpg?1572044357?bc=0'},
    ]

    return (
        <Grommet full theme={theme}>
            <Grid 
                fill
                rows={['small', 'small', 'small', 'small', 'small', 'small']}
                columns={['flex', 'small', 'small', 'flex']}
                areas={[
                    { name: 'logo', start: [0, 0], end: [0, 0] },
                    { name: 'aa', start: [1, 0], end: [1, 0] },
                    { name: 'ab', start: [2, 0], end: [2, 0] },
                    { name: 'ba', start: [1, 1], end: [1, 1] },
                    { name: 'bb', start: [2, 1], end: [2, 1] },
                    { name: 'ca', start: [1, 2], end: [1, 2] },
                    { name: 'cb', start: [2, 2], end: [2, 2] },
                    { name: 'da', start: [1, 3], end: [1, 3] },
                    { name: 'db', start: [2, 3], end: [2, 3] },
                    { name: 'ea', start: [1, 4], end: [1, 4] },
                    { name: 'eb', start: [2, 4], end: [2, 4] },
                    { name: 'fa', start: [1, 5], end: [1, 5] },
                    { name: 'fb', start: [2, 5], end: [2, 5] },
                ]}
            >
                {
                    images.map((image)=>(
                        <Box gridArea={image.name} width={'small'} height={'small'} overflow={'hidden'} pad="small">
                            <img src={image.url}/>
                        </Box>
                    ))
                }

                <Box gridArea={'logo'} margin={'large'}>
                    <Text size={'medium'} color={'brand'}> I like how this looks. </Text>
                    <Text size={'medium'}> Shot with a telescopic lens. </Text>
                    <Text size={'medium'}> From this angle, people look like videogame characters  </Text>
                </Box>
            </Grid>
        </Grommet>
    )
}

export default Four