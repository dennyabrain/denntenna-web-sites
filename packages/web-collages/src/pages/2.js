import React, { useState, useEffect } from 'react'
import {Box, Stack, Image, Video, Grommet} from 'grommet'
import Stories from 'react-insta-stories'
import {Img} from 'gatsby-image'
/**
* @author
* @function Two
**/


const Two = () => {
    return (
        <Grommet full>
            
            <Stack anchor={'center'}
                >
                {/* <Stories
                    stories={stories}
                    defaultInterval={1500}
                    width={432}
                    height={768}
                /> */}
                <img src="https://d2w9rnfcy7mm78.cloudfront.net/5335575/large_459d21ca801b232633168c3ac8540c5d.jpg?1571954261?bc=0"/>
                
                <Box>
                    <h1> hi </h1>
                </Box>
            </Stack>
        </Grommet>
    )
}

export default Two