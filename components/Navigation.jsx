import { PiBell, PiChartBar, PiGear, PiGridFour, PiChecks, PiList, PiSignOut, PiUser, PiX } from 'react-icons/pi';
import Text from 'funuicss/ui/text/Text'
import SideBar from "funuicss/ui/sidebar/SideBar";
import SideContent from 'funuicss/ui/sidebar/SideContent'

import List from 'funuicss/ui/list/List'
import ListItem from 'funuicss/ui/list/Item'
import Link from "next/link";
import RowFlex from "funuicss/ui/specials/RowFlex"
import Section from "funuicss/ui/specials/Section"
import Circle from "funuicss/ui/specials/Circle"

import AppBar from "funuicss/ui/appbar/AppBar"


const Navigation = ({title}) => {

    const mainSectionLinks = [
        {
            "route" : "/" ,
            "icon" : <PiChartBar /> ,
            "text" : "Dashboard" ,
        }
        ,
        {
            "route" : "/statistics" ,
            "icon" : <PiGridFour /> ,
            "text" : "Statistics" ,
        }
        ,
        {
            "route" : "/" ,
            "icon" : <PiChecks /> ,
            "text" : "Validation" ,
        }

    ]
    const HelpSectionLinks = [
        {
            "route" : "/" ,
            "icon" : <PiGear /> ,
            "text" : "Settings" ,
        }
        ,
        {
            "route" : "/" ,
            "icon" : <PiSignOut /> ,
            "text" : "Logout" ,
        }

    ]
    return (
        <div>
            <AppBar
                left={<Text text={title || "Dashboard"} heading={"h3"} bold color={"dark300"}/>}
                sideBar
                fixedTop
                funcss={" z-index-10 height-80 bb"}
                />
            <SideBar
                funcss="card"
                open={true}
                fixed
                header={
                    <div className=" padding-20 bb text-center height-80">
                        <img src="/logo.png"  className="height-50"/>
                    </div>
                }
                content={<div className="padding">
                    <Section gap={2}>
                        <Text size="small" text="Statistics" block funcss="padding" />
                        <List >

                            {
                                mainSectionLinks &&
                                mainSectionLinks.map(res => (
                                    <ListItem key={res.route}  >
                                        <Link href={res.route}>
                                            <RowFlex gap={0.5} funcss={` padding-5 roundEdgeSmall ${res.route == "/dashboard" ? "dark800" : ""}`}>
                                                <div className="width-30 height-30 central padding-5 roundEdgeSmall dark700 text-dark">
                                                    {res.icon}
                                                </div>
                                                <Text
                                                    text={res.text}
                                                    color="dark300"
                                                    size="small"
                                                />
                                            </RowFlex>
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Section>
                    <Section gap={2} funcss="bt">
                        <Text size="small" text="Help" block funcss="padding" />
                        <List >

                            {
                                HelpSectionLinks &&
                                HelpSectionLinks.map(res => (
                                    <ListItem key={res.route} >
                                        <Link href={res.route}>
                                            <RowFlex gap={0.5} funcss={` padding-5 roundEdgeSmall ${res.route == "/dashboard" ? "dark800" : ""}`}>
                                                <div className="width-30 height-30 central padding-5 roundEdgeSmall dark700 text-dark">
                                                    {res.icon}
                                                </div>
                                                <Text
                                                    text={res.text}
                                                    color="dark300"
                                                    size="small"
                                                />
                                            </RowFlex>
                                        </Link>
                                    </ListItem>
                                ))
                            }
                        </List>
                    </Section>
                </div>}

            />

        </div>
    )
}

export default Navigation