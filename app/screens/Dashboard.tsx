import React, {Component} from "react";
import {
    View,
    Text, TouchableOpacity, ImageBackground,
} from "react-native";

// style sheets
import dashboardStyles from '../assets/stylesheets/dashboard.style';
import globalStyles from '../assets/stylesheets/global.style';

// dashboard tiles
const data = require('../assets/data/dashboard.json');

// // Import components
// import Header from './components/header';
// import Footer from './components/footer';

interface State
{

}

interface Tile
{
    name: string,
    title: string,
    icon: string,
    navigation: string
}

export default class EnergyCoins extends Component<{}, State>
{
    private navigation: any

    constructor(props: any)
    {
        super(props)
        this.navigation = props.navigation;
    }

    // Tile
    private _renderTile(tile: any)
    {
        const {name, title, navigation} = tile;

        //let iconSource = Dashboard._getIconSource(icon)

        return (
            <View key={`tile-${name}`} style={dashboardStyles.tileView}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={[dashboardStyles.tile]}
                    onPress={() =>
                    {
                        this.getNavigation().navigate(navigation);
                    }}
                >
                    <Text style={dashboardStyles.tileText}>
                        {title}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    private _renderDashboard()
    {
        return (
            <View style={globalStyles.container}>
                <ImageBackground
                    source={require('../assets/images/background-bubbles.png')}
                    style={{width: "100%", height: "100%"}}
                >
                    <View style={globalStyles.untilFooter}>
                        {/*<Header/>*/}
                        <View style={dashboardStyles.tilesContainer}>
                            {data.tiles.map((tile: Tile) =>
                            {
                                return this._renderTile(tile)
                            })}
                        </View>
                    </View>
                    {/*<Footer/>*/}
                </ImageBackground>
            </View>
        )
    }

    render()
    {
        return (
            <>
                {this._renderDashboard()}
            </>
        )
    }


    public getNavigation(): any
    {
        return this.navigation;
    }
}
