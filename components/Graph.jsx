'use client';
import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/charts';

function Chart({id , data , title, height}) {
    useEffect(() => {
        const chart = new CanvasJSReact.Chart(id, {
          animationEnabled: true,
          title: {
            // text: title,
            horizontalAlign: "left"
          },
          data: [{
            type: "doughnut",
            startAngle: 60,
            // innerRadius: 60,
            indexLabelFontSize: 17,
            indexLabel: "{label} - #percent%",
            toolTipContent: "<b>{label}:</b> {y} (#percent%)",
            dataPoints: data
          }]
        });
        chart.render();
      }, []);



    return (
        <div>
              <div id={id} className='lighter' style={{ height: height ? height : '250px', width: '100%' }}></div>
        </div>
  )
}

export default Chart