import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

export default StyleSheet.create({
    container: {
        height: '7%',
        width: '100%',
        marginBottom: 20,
        marginTop: 20
    },
    containerLogos: {
        height: '100%',
        width: '90%',
        backgroundColor: 'white',
        marginBottom: 20,
        borderRadius: 10,
        justifyContent: "space-evenly"
    },
    line: {
        backgroundColor: '#abdeff',
        width: '5%',
        height: '50%',
        marginTop: '3%',
    },
    row: {
        flex: 1,
        flexDirection: "row",
    },
    containerImage: {
        width: '25%'
    },
    image: {
        width: '80%',
        height:'80%',
        resizeMode: "contain",
        marginLeft: '15%',
        marginTop: '5%'
    },
    modalContainer: {
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    modalInfo: {
        alignItems: 'center',
        width: '90%',
        height: '90%',
        marginLeft: '5%',
        padding: 10,
    },
    title: {
        fontSize: windowWidth / 100 * 45 / 10,
        marginBottom: 3,
        marginTop: 2,
        color: '#0066ff'
    },
    text: {
        fontSize: windowWidth / 100 * 35 / 10,
        marginBottom: 13,
        color: 	'white'
    },
    faq: {
        fontSize: windowWidth / 100 * 55 / 10,
        color: '#abdeff',
        paddingBottom: 5
    },
    faqContainer: {
        width: '50%',
        alignItems: "center"
    },
    exitButtonContainer: {
        width: '25%',
        alignItems: "flex-end",
        paddingRight: 5,
        paddingBottom: 10
    },
    modalRow: {
        flexDirection: "row",
        alignContent: "center"
    },
})