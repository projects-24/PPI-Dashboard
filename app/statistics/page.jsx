"use client"
import React, { useEffect , useState } from 'react';
import Navigation from "@/components/Navigation";
import MainContent from "@/components/content";
import Grid from "funuicss/ui/grid/Grid";
import Col from "funuicss/ui/grid/Col";
import Card from "funuicss/ui/card/Card";
import Text from "funuicss/ui/text/Text";
import data from "@/components/data";
import Section from "funuicss/ui/specials/Section";
import Table from "funuicss/ui/table/Table";
import dynamic from "next/dynamic";
import Axios  from 'axios';
import { URI } from '@/functions/endpoint';
const MainChart = dynamic(()=>import("@/components/MainGraph") ,{ssr:false})
const Chart = dynamic(()=>import("@/components/Graph") ,{ssr:false})
const GraphChart = dynamic(() => import("@/components/RangeGraph"), { ssr: false })
import Input from 'funuicss/ui/input/Input' 
import RowFlex from 'funuicss/ui/specials/RowFlex'
import { PiEye } from 'react-icons/pi';
import Circle from "funuicss/ui/specials/Circle"
const Statistics = ()=>{
const data_table = {
    "data":[] ,
    "titles":["Title One","Title Two","Title Three","Title Four","Title Five","Title"],
}

const [outlier_data, setoutlier_data] = useState(null) 

const GetOutlier = (req) => {
    Axios.get(URI + `/outlier/${req.year}/${req.month}`)
    .then(res => {
        let getDocs , data  
        getDocs = res.data 
        data = {
            "data": getDocs,
            "titles": ["Firm ID", "Establishment", "Interviewer", "Product ID", "%", "Month Price" , "View"],
            "fields": ["firm_id", "establishment_name", 'interviewer_name' , "firm_product_id", "percent_change", "current_monthly_price"],
          }
        setoutlier_data(data)
    })
}
useEffect(() => {
    GetOutlier({'year' : 2023 ,  'month' : 12})
}, [])

const HandleOutlierQuery = (year_month) => {
    let year , month 
    year = year_month.slice(0 , year_month.indexOf("-")) 
    month = year_month.slice(-2) 
   
    new Promise((resolve, reject) => {
        setoutlier_data(null)
        resolve()
    })
    .then(res =>  GetOutlier({'year' : year ,  'month' : month}))

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
                style={{gap:0}}
                    header={<div className={"padding bb"}>
                        <RowFlex gap={1} justify="space-between">
                            <div>
                            <Text text={"Data"} block/>
                        <Text heading={"h3"} text={"Table"} bold block/>
                            </div>
                            <div>
                                <div>
                                    <Text 
                                    text="Month/Year*"
                                    size="small"
                                    bold 
                                    color="dark200"
                                    />
                                </div>
                                <Input
                                type='month'
                                bordered
                                onChange={(e) => HandleOutlierQuery(e.target.value)}
                                />
                            </div>
                        </RowFlex>
                    </div>}
                    funcss='roundEdge'
                    xl
                    body={
                        <div className={""}>
                          {
                            outlier_data ?
                            <Table data={outlier_data}  funcss={"text-small"} pageSize={20}
                              customColumns={[
                    {
                      title: 'Actions',
                      render: (data) => (
                        <Circle bg='primary' size={1.5} onClick={() => {

                        }}>
                          <PiEye />
                        </Circle>
                      ),
                    },
                  ]}  
                            
                            />
                            : <div className='height-400 dark600 skeleton  padding-50' />
                          }
                        </div>
                    }

                />

            </MainContent>
        </div>
    )
}

export default Statistics
