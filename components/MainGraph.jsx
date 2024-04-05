'use client';
import React, { useEffect, useState } from 'react'
import CanvasJSReact from '@canvasjs/charts';

function MainChart({data}) {

 
    
    useEffect(() => {

        var chart = new CanvasJSReact.Chart("chartContainer", {
            animationEnabled: true,
            theme: "light2", // "light1", "light2", "dark1", "dark2"
            title: {
                text: "Producer Price Index (PPI) (2024)"
            },
            axisY: {
                title: "Growth Rate (in %)",
            },
            axisX: {
                title: "Regions"
            },
            data: [{
                type: "column",
        
                dataPoints: data
            }]
        });
        chart.render();
    }, []);



    return (
        <div>
            <div id={"chartContainer"} style={{ height: '250px', width: '100%' }}></div>
        </div>
    )
}

export default MainChart