import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export default StyleSheet.create({
    background: {
        backgroundColor: '#eaeaea',
        padding: 10,
        flex: 1,
    },
    tilesContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        backgroundColor: 'transparent',
        marginLeft: "5%",
        marginRight: "5%",
        alignItems: 'center',
        flex: 1
    },
    tileView: {
        height: "31%",
        width: "35%",
        paddingTop:"5%" ,
        marginLeft: "10%",
        // marginBottom: "5%",
        marginTop: "5%",
    },
    tile: {
        height: "100%",
        width: "100%",
        marginBottom: "7%",
        marginTop: "3%",
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: "white"
    },
    tileText: {
        color: "#0066ff",
        fontSize: windowWidth / 100 * 35 / 13,
        textAlign: 'center',
        marginBottom: '30%'
    },
    tileImage: {
        width: "60%",
        height: "60%",
        resizeMode: "contain",
        alignItems: "center",
        marginTop: "20%"
    }
});
