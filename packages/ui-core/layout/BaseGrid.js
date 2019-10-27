import React, { useState, useEffect } from 'react'
import {Grommet, Grid, Box, Stack} from 'grommet'
import theme from '../theme'

/**
* @author
* @function BaseGrid
**/

const BaseGrid = ({position}) => {
    const [fetching, setFetching] = useState(false)

    useEffect(()=> {
        setFetching(true)
    })

    return (
        <Grommet 
            theme={theme} 
            full
        >
            <Grid
                rows={['flex']}
                columns={['flex','flex','flex','flex','flex','flex','flex','flex','flex','flex','flex','flex']}
                gap={'small'}
                areas={[
                    {name:"one", start:[0,0], end:[0,0]},
                    {name:"two", start:[1,0], end:[1,0]},
                    {name:"three", start:[2,0], end:[2,0]},
                    {name:"four", start:[3,0], end:[3,0]},
                    {name:"five", start:[4,0], end:[4,0]},
                    {name:"six", start:[5,0], end:[5,0]},
                    {name:"seven", start:[6,0], end:[6,0]},
                    {name:"eight", start:[7,0], end:[7,0]},
                    {name:"nine", start:[8,0], end:[8,0]},
                    {name:"ten", start:[9,0], end:[9,0]},
                    {name:"eleven", start:[10,0], end:[10,0]},
                    {name:"twelve", start:[11,0], end:[11,0]},
                ]}
            >
                <Box gridArea={'one'} background={'light-3'}>
                    one
                </Box>

                <Box gridArea={'two'} background={'light-3'}>
                    two
                </Box>
                <Box gridArea={'three'} background={'light-3'}>
                    three
                </Box>
                <Box gridArea={'four'} background={'light-3'}>
                    four
                </Box>
                <Box gridArea={'five'} background={'light-3'}>
                    five
                </Box>
                <Box gridArea={'six'} background={'light-3'}>
                    six
                </Box>
                <Box gridArea={'seven'} background={'light-3'}>
                    seven
                </Box>
                <Box gridArea={'eight'} background={'light-3'}>
                    eight
                </Box>
                <Box gridArea={'nine'} background={'light-3'}>
                    nine
                </Box>
                <Box gridArea={'ten'} background={'light-3'}>
                    ten
                </Box>
                <Box gridArea={'eleven'} background={'light-3'}>
                    eleven
                </Box>
                <Box gridArea={'twelve'} background={'light-3'}>
                    twelve
                </Box>
            </Grid>
        </Grommet>
    )
}

export default BaseGrid