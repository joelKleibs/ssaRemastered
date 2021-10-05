import React, { Component } from "react"
import { Image, View } from "react-native"
import { Button } from "react-native-elements";
import Dash from "react-native-dash"
import Icon from "react-native-vector-icons/FontAwesome";

import headerStyle from "../../stylesheets/header.style";
import Shell from "../../shell";

export default class Header extends Component
{
    public constructor(props: any)
    {
        super(props);
    }

    private swapLanguage(): void
    {
        Shell.getTranslationService().setLanguage();
    }

    public render()
    {
        return (
            <View style={headerStyle.container}>
                <View style={headerStyle.row}>
                    <View style={headerStyle.imageContainer}>
                        <Image
                            style={headerStyle.image}
                            source={require('../../../assets/images/logo-main.png')}
                        />
                    </View>
                    <Button
                        buttonStyle={headerStyle.button}
                        onPress={() => {
                            this.swapLanguage()
                        }}
                        icon={<Icon name={'language'}/>}
                    />
                </View>
                <Dash dashGap={5} dashLength={9} dashThickness={3} dashColor={'white'} dashStyle={{borderRadius: 2}} style={headerStyle.dash}/>
            </View>
        );
    }
}