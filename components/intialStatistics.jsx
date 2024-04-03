import Div from 'funuicss/ui/div/Div'
import Text from 'funuicss/ui/text/Text'
import Grid from 'funuicss/ui/grid/Grid'
import Col from 'funuicss/ui/grid/Col'
import Card from 'funuicss/ui/card/Card'
import RowFlex from 'funuicss/ui/specials/RowFlex'
import Button from 'funuicss/ui/button/Button'


export default function InitialStatistics({ statisticsData }) {

    return (
        <div>

            <Grid>
                {statisticsData.map((data, index) => (
                    <Col sm={12} md={4} lg={4} funcss='padding' key={index}>
                        <Card
                            xl
                            funcss='round-edge hover-up'
                            body={
                                <RowFlex gap={1} funcss='padding-20'>
                                    <Button text={<data.icon size={20} />} bg={data.bg} raised height="3rem" width='3rem' />
                                    <Div>
                                        <Text text={data.title} size='small' color='dark400' block bold />
                                        <RowFlex gap={0.5}>
                                            <Text heading='h3' text={data.value} color='dark200' />
                                            <Button
                                                startIcon={data.arrowIcon}
                                                color={data.arrowColor}
                                                text={data.arrowText}
                                            />
                                        </RowFlex>
                                    </Div>
                                </RowFlex>
                            }
                        />
                    </Col>
                ))}
            </Grid>
        </div>
    );
}