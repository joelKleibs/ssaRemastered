import React, {Component} from "react";
import {
    View,
    Text,
} from "react-native";

interface State
{

}

export default class NewEvent extends Component<{}, State>
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
                <Text>New Event</Text>
            </View>
        )
    }


    public getNavigation(): any
    {
        return this.navigation;
    }
}
