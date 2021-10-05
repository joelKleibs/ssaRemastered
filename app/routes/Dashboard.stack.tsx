import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ScannerStack from "./Scanner.stack"
import joinEvent from "./joinEvent.stack"
import ProofStack from "./Proof.stack"
import PastEventStack from "./PastEvent.stack"
import newEventStack from "./newEvent.stack"
import Dashboard from "../screens/Dashboard";

const screens = {
    Dashboard: {
        screen: Dashboard,
        navigationOptions: {
            headerShown: false
        }
    },
    newEventStack:{
        screen: newEventStack,
        navigationOptions: {
            headerShown: false
        }
    },
    PastEventStack:{
        screen: PastEventStack,
        navigationOptions: {
            headerShown: false
        }
    },
    joinEvent: {
        screen: joinEvent,
        navigationOptions: {
            headerShown: false
        }
    },
    ProofStack: {
        screen: ProofStack,
        navigationOptions: {
            headerShown: false
        }
    },
    ScannerStack: {
        screen: ScannerStack,
        navigationOptions: {
            headerShown: false
        }
    },
}

const dashboardStack = createStackNavigator(screens);
export default createAppContainer(dashboardStack);
