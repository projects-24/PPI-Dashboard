"use client";
import React, {useEffect, useState} from 'react';
import Link from 'next/link'
import { PiChecks, PiDiamondsFour, PiList, PiTrash } from 'react-icons/pi';
import Text from 'funuicss/ui/text/Text'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Div from "funuicss/ui/div/Div"
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import dynamic from 'next/dynamic'
import {PiArrowDown, PiArrowUp, PiUsersDuotone,  PiVoicemailDuotone} from 'react-icons/pi'
import { MdDeleteForever } from "react-icons/md";
import Navigation from "@/components/Navigation";
import MainContent from "@/components/content";
import Card from "funuicss/ui/card/Card";
import Section from "funuicss/ui/specials/Section";
import Axios from "axios"
import { URI } from '@/functions/endpoint';

const MainGraph = dynamic(()=>import("@/components/MainGraph") ,{ssr:false})

const statisticsData = [
    {
        icon: PiUsersDuotone,
        title: 'Total Cases',
        value: '20,000',
        arrowIcon: <PiArrowUp /> ,
        arrowColor: 'success',
        arrowText: '223',
        bg:"primary",
        id:1
    },

    {
        icon: PiVoicemailDuotone,
        title: 'Partial Saved Cases',
        value: '123',
        arrowIcon: <PiArrowUp /> ,
        arrowColor: 'success',
        arrowText: '100',
        bg:"dark"
    },
    {
        icon: MdDeleteForever,
        title: 'Deleted Cases',
        value: '123',
        arrowIcon: <PiArrowDown /> ,
        arrowColor: 'error',
        arrowText: '100',
        bg:"error"
    },
];



export default function Home() {
  
    const [data, setdata] = useState(null)
    const [data_state, setdata_state] = useState(false)

    useEffect(() => {
      Axios.get(URI + "/regionalgraph")
      .then((res) => {
        let data 
        data = res.data.dataPoints
        setdata(data)
        setdata_state(true)
      })
      .catch(err => {
        console.log(err)
        setdata_state ( () => !data_state )
      })
    }, [data_state])

    const [dashboard_data, setdashboard_data] = useState(null)
    useEffect(() => {
    Axios.get(URI + "/basicstatistics")
    .then(res => {
        let res_data = res.data 
        setdashboard_data(res_data)
        console.log(res_data)
    })
    }, [dashboard_data])
    


    return (
        <div >
            <Navigation />
            <MainContent >
             <div className={"padding-left-20 padding-right-20"}>
                  <Div padding="20" funcss={"card roundEdgeSmall padding-20 text-dark"} margin="2rem 0 2rem 0">
                      <RowFlex alignItems="flex-start" justify="space-between" funcss={"padding"}>
                          <div>
                          <Text
                              text="Ghana Statistical Service"
                              heading="h3"
                              bold
                              color="dark200"
                              block
                          />
                          <Text
                              text="Producer Price Index (PPI) Dashboard"
                              bold
                              color="dark200"
                              block
                          />
                          </div>
                          {
                            dashboard_data && 
                            <Card
                            xl
                            funcss='round-edge hover-up width-300 '
                            body={
                                <RowFlex gap={1} funcss='padding-20' alignItems="flex-start">
                                    <Div content={<PiChecks size={15} />} funcss={"central roundEdgeSmall gradient"} raised height="2.5rem" width='2.5rem' />
                                    <Div>
                                        <Text text={"Total cases"} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={dashboard_data.total_cases } color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                          }

                      </RowFlex>
                      <Section />
                      <Div>
                  {
                    dashboard_data &&
                    <Grid>
               
              
                    <Col sm={12} md={3} lg={3} funcss='padding' >
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20' alignItems="flex-start">
                                    <Div content={<PiUsersDuotone size={15} />} funcss={"central roundEdgeSmall primary"} raised height="2.5rem" width='2.5rem' />
                                    <Div>
                                        <Text text={"Partial Cases"} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={dashboard_data.partial_cases } color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
            
                    <Col sm={12} md={3} lg={3} funcss='padding' >
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20' alignItems="flex-start">
                                    <Div content={<PiChecks size={15} />} funcss={"central roundEdgeSmall success"} raised height="2.5rem" width='2.5rem' />
                                    <Div>
                                        <Text text={"Completed Data"} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={dashboard_data.total_completed_data } color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3} funcss='padding' >
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20' alignItems="flex-start">
                                    <Div content={<PiDiamondsFour size={15} />} funcss={"central roundEdgeSmall dark"} raised height="2.5rem" width='2.5rem' />
                                    <Div>
                                        <Text text={"Total Firms"} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={dashboard_data.total_firms } color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
                    <Col sm={12} md={3} lg={3} funcss='padding' >
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20' alignItems="flex-start">
                                    <Div content={<PiTrash size={15} />} funcss={"central roundEdgeSmall error"} raised height="2.5rem" width='2.5rem' />
                                    <Div>
                                        <Text text={"Deleted Cases"} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={dashboard_data.deleted_cases } color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
            </Grid>
                  }
                      </Div>
              </Div>


<div>
    <Card
        header={<div className={"padding bb"}>
            <Text text={"Total"} block/>
            <Text heading={"h3"} text={"Case Submission"} bold block/>
        </div>}
        funcss='roundEdge'
        xl
        body={<div>
          {
            data ?
            <MainGraph data={data} />
            : <div className='height-400 dark700 skeleton' />
          }
        </div>}

        />
</div>


             </div>
            </MainContent>
        </div>
      )
    }
