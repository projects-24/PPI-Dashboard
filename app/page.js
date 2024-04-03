"use client";
import React, {useEffect, useState} from 'react';
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
import data, {graphData} from '../components/data'
import InitialStatistics from '../components/IntialStatistics'
import {PiArrowDown, PiArrowUp, PiUsersDuotone,  PiVoicemailDuotone} from 'react-icons/pi'
import { MdDeleteForever } from "react-icons/md";
import Navigation from "@/components/Navigation";
import MainContent from "@/components/content";
import MainGraph from "@/components/MainGraph";
import Card from "funuicss/ui/card/Card";
import MainChart from "@/components/MainGraph";
import Table from "funuicss/ui/table/Table";
import Section from "funuicss/ui/specials/Section";

const Chart = dynamic(()=>import("@/components/Graph") ,{ssr:false})
const GraphChart = dynamic(() => import("@/components/RangeGraph"), { ssr: false })

const statisticsData = [
    {
        icon: PiUsersDuotone,
        title: 'Total Cases',
        value: '20,000',
        arrowIcon: <PiArrowUp /> ,
        arrowColor: 'success',
        arrowText: '223',
        bg:"primary"
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

useEffect(() => {
    console.log(data)
},[])
    return (
        <div >
            <Navigation />
            <MainContent >
             <div className={"padding-20"}>
                  <Div padding="20" funcss={"dark800 roundEdgeSmall padding-20 text-dark"} margin="2rem 0 2rem 0">
                      <div className={"padding"}>
                          <Text
                              text="Ghana Statistical Service"
                              heading="h1"
                              bold
                              color="primary"
                              block
                          />
                          <Text
                              text="Producer Price Index (PPI) Dashboard"
                              bold
                              color="dark200"
                              block
                          />

                      </div>
                      <Section />
                      <Div>
                         <InitialStatistics statisticsData={statisticsData} />
                      </Div>
              </Div>


<div>
    <Card
        header={<div className={"padding bb"}>
            <Text text={"main"} block/>
            <Text heading={"h3"} text={"Graph"} bold block/>
        </div>}
        funcss='roundEdge padding-20'
        xl
        body={<div>
            <MainGraph />
        </div>}

        />
</div>


             </div>
            </MainContent>
        </div>
      )
    }
