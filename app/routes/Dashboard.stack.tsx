import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import ScannerStack from "./Scanner.stack"
import LandingStack from "./Landing.stack"
import ProofStack from "./Proof.stack"
import PastEventStack from "./PastEvent.stack"
import Dashboard from "../screens/Dashboard";

const screens = {
    Dashboard: {
        screen: Dashboard,
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
    ProofStack: {
        screen: ProofStack,
        navigationOptions: {
            headerShown: false
        }
    },
    LandingStack: {
        screen: LandingStack,
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