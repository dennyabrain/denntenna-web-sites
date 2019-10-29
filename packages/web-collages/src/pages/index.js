import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import {Grommet, Box, Heading, Text, Grid} from 'grommet'
import {theme} from 'ui-core'

const pages=[
  {label:'Day One', 'description':'', previewImage: '', target:'1'},
  {label:'Day Two', 'description':'', previewImage: '', target:'2'},
  {label:'Day Three', 'description':'', previewImage: '', target:'3'},
  {label:'Day Four', 'description':'', previewImage: '', target:'4'},
  {label:'Day Five', 'description':'', previewImage: '', target:'5'},
  {label:'Day Six', 'description':'Gallery of hinge screenshots', previewImage: '', target:'6'},
  {label:'Day Seven', 'description':'', previewImage: '', target:'7'}
]

const IndexPage = () => (
  <Grommet theme={theme} full>
    <SEO title="Home" />
    <Grid 
      fill
      rows={['flex']}
      columns={['2/3', '1/3']}
      gap={'small'}
      areas={[
        {name:'left', start:[0,0], end:[0,0]},
        {name:'right', start:[1,0], end:[1,0]},
      ]}
    >
    <Box gridArea={'left'} pad={'medium'}>
      <Box direction={'column'} align={'baseline'} >
        <Text size={'xlarge'}> Collages </Text>
        <Text size={'medium'} color={'brand'}>  </Text>
      </Box>
      <Box>
        {pages.map((page)=>(
          <Box direction={'row'}>
            <Link 
            to={`/${page.target}`}> 
              <Text>{page.label}</Text>
            </Link>
            {page.description && <Text> - {page.description} </Text>}
          </Box>
        ))}
      </Box>
    </Box>

    <Box gridArea={'right'}>
      {/* <img src="https://d2w9rnfcy7mm78.cloudfront.net/5343377/large_7998dce78c9054287e75dd1455980fd2.jpg?1572044357?bc=0"/> */}
    </Box>

    </Grid>
  </Grommet>
)

export default IndexPage
