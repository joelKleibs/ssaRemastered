import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Landing from "../screens/joinEvent";

const screens = {
    Landing: {
        screen: Landing,
        navigationOptions: {
            headerShown: false
        }
    },
}

const addLandingStack = createStackNavigator(screens)

export default createAppContainer(addLandingStack)
