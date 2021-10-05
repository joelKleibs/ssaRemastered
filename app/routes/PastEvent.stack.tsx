import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import PastEvent from "../screens/PastEvent";

const screens = {
    PastEvent: {
        screen: PastEvent,
        navigationOptions: {
            headerShown: false
        }
    },
}

const addPastEventStack = createStackNavigator(screens)

export default createAppContainer(addPastEventStack)