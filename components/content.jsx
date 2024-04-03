import React from 'react';
import SideContent from "funuicss/ui/sidebar/SideContent";
const MainContent = ({children}) => {
    return (
        <SideContent
            content={
                <div className={"padding-top-90"}>
                    {children}
                </div>
            }
        />
    );
}

export default  MainContent;