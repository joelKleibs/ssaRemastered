import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Proof from "../screens/Proof";

const screens = {
    Proof: {
        screen: Proof,
        navigationOptions: {
            headerShown: false
        }
    },
}

const addProofStack = createStackNavigator(screens)

export default createAppContainer(addProofStack)