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


const [reader_by_month_data, setreader_by_month_data] = useState(null)
const [reader_year_month, setreader_year_month] = useState({'year' : 2023 ,  'month' : 12})


const [productionstatus_year_month, setproductionstatus_year_month] = useState({'year' : 2023 ,  'month' : 12})
const [production_status_data, setproduction_status_data] = useState(null)



const GetReaderByMonth = (req) => {
    console.log(data[0].dat)
    Axios.get(URI + `/readerbymonth/${req.year}/${req.month}`)
    .then(res => {
        let getDocs , data  
        getDocs = res.data 
        data = {
            "data": getDocs,
            "titles": [ "Interviewer ID", "Interviewer", "Month", "Year" , "Submitted" ],
            "fields": ["interviewer_id", 'interviewer_name' , "month", "fp01y" , "records_submitted"],
          }
        setreader_by_month_data(data)
    })
}
const GetProductionByMonth = (req) => {
    Axios.get(URI + `/productionstatus/${req.year}/${req.month}`)
    .then(res => {
        let getDocs , data  
        getDocs = res.data 
        data = getDocs
        setproduction_status_data(data)
    })
}
useEffect(() => {
    GetProductionByMonth(productionstatus_year_month)
    GetReaderByMonth(reader_year_month)
}, [])



const HandleReaderQuery = (year_month) => {
    let year , month 
    year = year_month.slice(0 , year_month.indexOf("-")) 
    month = year_month.slice(-2) 
    setreader_year_month({year , month})
    new Promise((resolve, reject) => {
        setreader_by_month_data(null)
        resolve()
    })
    .then(res =>  GetReaderByMonth({'year' : year ,  'month' : month}))

}
const HandleProductionQuery = (year_month) => {
    let year , month 
    year = year_month.slice(0 , year_month.indexOf("-")) 
    month = year_month.slice(-2) 
    setproductionstatus_year_month({year , month})
    new Promise((resolve, reject) => {
        setproduction_status_data(null)
        resolve()
    })
    .then(res =>  GetProductionByMonth({'year' : year ,  'month' : month}))

}
return (
        <div>
            <Navigation title={"Statistics"} />
            <MainContent>
                <Grid>
                    <Col sm={12} md={7} lg={7} funcss={"padding"}>
                        <Card
                            header={<div className={"padding bb"}>
                                <Text text={"Total"} block/>
                                <Text heading={"h3"} text={"Records Submission"} bold block/>
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

                    <Col sm={12} md={5} lg={5} funcss="padding">
                        <Card
                            header={<div className={"padding bb"}>
                             <RowFlex gap={1} justify="space-between">
                            <div>
                            <Text text={"Production Status"} block/>
                         <div>
                         <Text 
                         heading={"h3"} 
                         text={` ${productionstatus_year_month.year} - ${productionstatus_year_month.month}`}
                         bold 
                         block
                         color="primary"
                         />
                         </div>
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
                                onChange={(e) => HandleProductionQuery(e.target.value)}
                                />
                            </div>
                        </RowFlex>
                            </div>}
                            funcss='roundEdge'
                            xl
                            body={
                                <div className={"padding-30"}>
                                    {
                                        production_status_data && 
                                    <Chart title={"Heading One"} data={production_status_data} id={"p1"}  height={"220px"}/>
                                    }
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
                            <Text text={"Reader"} block/>
                         <RowFlex>
                         <div>
                         <Text 
                         heading={"h3"} 
                         text={` ${reader_year_month.year} - ${reader_year_month.month}`}
                         bold 
                         block
                         color="primary"
                         />
                         </div>
                         </RowFlex>
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
                                onChange={(e) => HandleReaderQuery(e.target.value)}
                                />
                            </div>
                        </RowFlex>
                    </div>}
                    funcss='roundEdge'
                    xl
                    body={
                        <div className={""}>
                          {
                            reader_by_month_data ?
                            <Table data={reader_by_month_data}  funcss={"text-small"} pageSize={15}   
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

