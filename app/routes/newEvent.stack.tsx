import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import newEvent from "../screens/newEvent";

const screens = {
    newEvent: {
        screen: newEvent,
        navigationOptions: {
            headerShown: false
        }
    },
}

const newEventStack = createStackNavigator(screens)

export default createAppContainer(newEventStack)
