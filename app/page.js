import React from 'react'
import Link from 'next/link'
import { PiList } from 'react-icons/pi';
import Button from 'funuicss/ui/button/Button'
import AppBar from 'funuicss/ui/appbar/AppBar'
import Text from 'funuicss/ui/text/Text'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Container from "funuicss/ui/container/Container"
import Div from "funuicss/ui/div/Div"
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import SectionCard from '@/components/Card';
import dynamic from 'next/dynamic'
const Chart = dynamic(()=>import("@/components/Graph") ,{ssr:false})
export default function Home() {
  const data = [
    {
      "title" : "First data" ,
      "id" : "1",
      "sub_title" : "This is the sub heading for the first grah over here, you can choose to change the content of this tex" ,
      "data" : [
        { y: 67, label: "Children" },
        { y: 28, label: "Adults" },
        { y: 10, label: "Aged" },
      ]
    }
    ,
    {
      "title" : "Second data" ,
      "id" : "2",
      "sub_title" : "This is the sub heading for the first grah over here, you can choose to change the content of this tex" ,
      "data" : [
        { y: 67, label: "Children" },
        { y: 28, label: "Adults" },
        { y: 10, label: "Aged" },
      ]
    }
    ,
    {
      "title" : "Third data" ,
      "id" : "3",
      "sub_title" : "This is the sub heading for the first grah over here, you can choose to change the content of this tex" ,
      "data" : [
        { y: 67, label: "Children" },
        { y: 28, label: "Adults" },
        { y: 10, label: "Aged" },
      ]
    }
    ,
    {
      "title" : "Forth data" ,
      "id" : "4",
      "sub_title" : "This is the sub heading for the first grah over here, you can choose to change the content of this tex" ,
      "data" : [
        { y: 67, label: "Children" },
        { y: 28, label: "Adults" },
        { y: 10, label: "Aged" },
      ]
    }
  ]
  return (
    <div className='padding-top-40'>


 <Container>
  <Div padding="0.5rem" margin="0 0 2rem 0">
    <Text 
    text="Ghana"
    heading="h1"
    bold
    color="primary"
    block
    />
    <Text 
    text="Statistical service data"
    heading="h2"
    bold
    color="dark200"
    block
    />
    <Text 
    text="This is the sub heading for the first grah over here, you can choose to change the content of this tex"
    color="dark400"
    article
    />
  </Div>
  <Grid>
 {
  data &&
  data.map(mdoc => (
    <Col sm={12} md={6} lg={6} funcss="padding" key={mdoc.id}>
    <SectionCard 
    heading={mdoc.title} 
    sub_heading={mdoc.sub_title}
    body={<Chart title={"Heading One"} data={mdoc.data}
    id={mdoc.id}
    />}
    
    />
  </Col>
  ))
 }
  </Grid>
 </Container>
    </div>
  )
}
