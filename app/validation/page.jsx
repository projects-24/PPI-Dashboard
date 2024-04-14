
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
import { PiCheck, PiEye } from 'react-icons/pi';
import Circle from "funuicss/ui/specials/Circle"
const Statistics = ()=>{

const [outlier_data, setoutlier_data] = useState(null) 
const [outlier_year_month, setoutlier_year_month] = useState({'year' : 2023 ,  'month' : 12})

const GetOutlier = (req) => {
    Axios.get(URI + `/outlier/${req.year}/${req.month}`)
    .then(res => {
        let getDocs , data  
        getDocs = res.data 
        data = {
            "data": getDocs,
            "titles": ["Firm ID", "Establishment", "Interviewer" , "Year", "Currency", "Pre Month price" , "Curr Month price" , "Price Diff" ,"%", "Month Price" , "status" , "View" , "Validate"],
            "fields": ["firm_id", "establishment_name", 'interviewer_name' ,  "selected_year","product_currency",  "previous_monthly_price" ,  "current_monthly_price", "price_difference",  "percent_change", "current_monthly_price"],
          }
        setoutlier_data(data)
    })
}

useEffect(() => {
    GetOutlier(outlier_year_month)
}, [])

const HandleOutlierQuery = (year_month) => {
    let year , month 
    year = year_month.slice(0 , year_month.indexOf("-")) 
    month = year_month.slice(-2) 
    setoutlier_year_month({year , month})
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
  

                <Section gap={2} />
                <Card
                style={{gap:0}}
                    header={<div className={"padding bb"}>
                        <RowFlex gap={1} justify="space-between">
                            <div>
                            <Text text={"Outlier"} block/>
                         <RowFlex>
                         <div>
                         <Text 
                         heading={"h3"} 
                         text={` ${outlier_year_month.year} - ${outlier_year_month.month}`}
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
                            <Table data={outlier_data}  funcss={"text-small"} pageSize={15}
                              customColumns={[
                    {
                        title: 'Actions',
                        render: (data) => (
                          <div className='circular_loader_container dark800'>
                              <div 
                              className={`circular_loader ${parseInt(data.percent_change.slice(0 , data.percent_change.indexOf("%"))) < 50 ? "green" : parseInt(data.percent_change.slice(0 , data.percent_change.indexOf("%"))) <= 75 ? "primary" : "error"}`} 
                              style={{height:data.percent_change}}>  </div>
                           </div>
                        ),
                      }
                      ,
                      {
                        title: 'Actions',
                        render: (data) => (
                          <Circle bg='primary' size={1.5} onClick={() => {
  
                          }}>
                            <PiEye />
                          </Circle>
                        ),
                      }
                      ,
                      {
                        title: 'Actions',
                        render: (data) => (
                          <Circle bg='primary' size={1.5} onClick={() => {
  
                          }}>
                            <PiCheck />
                          </Circle>
                        ),
                      }
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
