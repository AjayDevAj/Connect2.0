import React from "react";
import NavigationString from "../utility/NavigationString";
// import RouteTabBar from "./RouteTabBar";

import RouteTabBar from "../navigation/RouteTabBar";


export default function (Stack) {
    return (
        <>
            <Stack.Screen
                name={NavigationString.TABS}
                component={RouteTabBar}
            />         
        </>
    )
}
