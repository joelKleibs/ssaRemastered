import React, {Component} from "react";
import {
    View,
    Text,
} from "react-native";

interface State
{

}

export default class EnergyCoins extends Component<{}, State>
{
    private navigation: any

    constructor(props: any)
    {
        super(props)
        this.navigation = props.navigation;
    }


    render()
    {
        return (
            <View>
                <Text>Proof</Text>
            </View>
        )
    }


    public getNavigation(): any
    {
        return this.navigation;
    }
}
