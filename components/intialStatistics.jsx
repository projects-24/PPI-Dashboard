import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Card from 'funuicss/ui/card/Card'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Button from 'funuicss/ui/button/Button'
import React from 'react'


export default function InitialStatistics({ statisticsData, docs }) {

    return (
        <div>

            <Grid>
               
                    <Col sm={12} md={4} lg={4} funcss='padding' >
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20'>
                                    <Button text={<data.icon size={20} />} bg={data.bg} raised height="3rem" width='3rem' />
                                    <Div>
                                        <Text text={data.title} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={data.id = 1 ? docs.total_cases : ""} color='dark200' />
                                          
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
            </Grid>
        </div>
    );
}