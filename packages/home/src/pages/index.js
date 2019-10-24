import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

import {Grid, Box, Grommet, Heading, Text, Video} from 'grommet'

const DenntennaTheme = {
  global: {
      font: {
          family: 'Khand',
      },
      colors:{
          "brand": '#FF63FF',
          "brand-1": 'FFE5E2'
      },
  },
  heading: {
    font: {
        family: 'Khand',
    },
  },
  "button": {
      "border": {
          "width": "1px",
          "radius": "0.2em",
      },
      "size": {
          "xmedium" : '90px'
      }
  },
};

const IndexPage = () => (
  <Grommet full theme={DenntennaTheme}>
    <SEO title="Home" />
    <Grid
      fill
      rows={['flex']}
      columns={['auto', 'flex']}
      gap={'small'}
      areas={[
        {name:"left", start:[0,0], end:[0,0]},
        {name:"right", start:[1,0], end:[1,0]}
      ]}      
    >
      <Box 
        width={'medium'}
        gridArea={'left'} 
        pad={'medium'}> 
        {/* <Heading level={1}> Denntenna </Heading>
        <Heading level={2}> Heading 2 </Heading>
        <Heading level={3}> Heading 3 </Heading>

        <Text size={'xlarge'}> Body XLarge </Text>
        <Text size={'large'}> Body Large </Text>
        <Text size={'medium'}> Body Medium </Text>
        <Text size={'small'}> Body Small </Text>
        <Text size={'xsmall'}> Body xSmall </Text> */}

        <Box direction={'column'} align={'baseline'}>
          <Text size={'xlarge'}> Denntenna </Text>
          <Text size={'medium'} color={'brand'}> storytelling logs </Text>
        </Box>

        <br/>
        <br/>

        <Heading level={2}> Projects </Heading>

        <Heading level={2}> Writing </Heading>

        <br/>
        <br/>
        <br/>

        <Heading level={3}> Contact </Heading>
          <Text size={'medium'}> email : say.hi.to.dennny@gmail.com </Text>
          <Text size={'medium'}> twitter, instagram : @denntenna </Text>

      </Box>
      <Box fill gridArea={'right'} background={'brand'}> 
        
      </Box>
    </Grid>
  </Grommet>
)

export default IndexPage


//https://arena-attachments.s3.amazonaws.com/5329849/9201f185ff99ac6a605b9b95b0c61127.mpg4?1571902985