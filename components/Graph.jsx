'use client';
import React, { useEffect } from 'react'
import CanvasJSReact from '@canvasjs/charts';
import Grid from "funuicss/ui/grid/Grid"
import Text from "funuicss/ui/text/Text"

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
              <div id={id} className='lighter' style={{ height: height ? height : '300px', width: '100%' }}></div>
              <Grid funcss="padding bt central">

{
    data.map(( doc) => (
      <div className="padding col fit" key={doc.label}>
          <div className='card padding roundEdgeSmall' >
            <Text text={doc.y ? doc.y : doc.x ? doc.x : doc.y} bold/>
            <Text text={doc.label} block size="minified"/>
        </div>
      </div>
    ))
}

</Grid>
        </div>
  )
}

export default Chart