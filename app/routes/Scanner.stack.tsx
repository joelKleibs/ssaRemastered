import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Scanner from "../screens/Scanner";

const screens = {
    Scanner: {
        screen: Scanner,
        navigationOptions: {
            headerShown: false
        }
    },
}

const addScannerStack = createStackNavigator(screens)

export default createAppContainer(addScannerStack)