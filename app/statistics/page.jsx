"use client"
import React from 'react';
import Navigation from "@/components/Navigation";
import MainContent from "@/components/content";
import Grid from "funuicss/ui/grid/Grid";
import Col from "funuicss/ui/grid/Col";
import Card from "funuicss/ui/card/Card";
import Text from "funuicss/ui/text/Text";
import MainChart from "@/components/MainGraph";
import data from "@/components/data";
import Section from "funuicss/ui/specials/Section";
import Table from "funuicss/ui/table/Table";
import dynamic from "next/dynamic";
const Chart = dynamic(()=>import("@/components/Graph") ,{ssr:false})
const GraphChart = dynamic(() => import("@/components/RangeGraph"), { ssr: false })

const Statistics = ()=>{
const data_table = {
    "data":[] ,
    "titles":["Title One","Title Two","Title Three","Title Four","Title Five","Title"],
}

return (
        <div>
            <Navigation title={"Statistics"} />
            <MainContent>
                <Grid>
                    <Col sm={12} md={8} lg={8} funcss={"padding"}>
                        <Card
                            header={<div className={"padding bb"}>
                                <Text text={"main"} block/>
                                <Text heading={"h3"} text={"Graph"} bold block/>
                            </div>}
                            funcss='roundEdge'
                            xl
                            body={
                                <div className={"padding-20"}>
                                    <MainChart />
                                </div>
                            }

                        />
                    </Col>

                    <Col sm={12} md={4} lg={4} funcss="padding">
                        <Card
                            header={<div className={"padding bb"}>
                                <Text text={"Pie"} block/>
                                <Text heading={"h3"} text={"Chart"} bold block/>
                            </div>}
                            funcss='roundEdge'
                            xl
                            body={
                                <div className={"padding-20"}>
                                    <Chart title={"Heading One"} data={data[0].data} id={data[0].id}  height={"220px"}/>
                                </div>
                            }

                        />
                    </Col>


                </Grid>


                <Section gap={2} />
                <Card
                    header={<div className={"padding bb"}>
                        <Text text={"Data"} block/>
                        <Text heading={"h3"} text={"Table"} bold block/>
                    </div>}
                    funcss='roundEdge'
                    xl
                    body={
                        <div className={""}>
                            <Table data={data_table}  funcss={"text-small"}/>
                        </div>
                    }

                />

            </MainContent>
        </div>
    )
}

export default Statistics
