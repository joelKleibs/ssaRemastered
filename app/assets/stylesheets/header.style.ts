import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        height: '10%',
        width: Dimensions.get('window').width,
        marginBottom: '10%',
        // flexDirection: 'row',
        // flex: 1
    },
    imageContainer: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        flex: 1,
        marginTop: "3%"
    },
    image: {
        flex: 1,
        width: 50,
        height: 50,
        resizeMode: 'contain',
        justifyContent: "center",
        marginLeft: '20%'
    },
    dash: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 25,
    },
    translate: {
        width: '100%',
        height: '100%',
        paddingRight: 50
    },
    button: {
        marginRight: '10%',
        marginTop: '40%',
        backgroundColor: 'white',
        width: 30,
        height:30
    },
    row: {
        flexDirection: "row",
        // flex: 1
    }
});