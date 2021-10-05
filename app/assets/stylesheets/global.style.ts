import { StyleSheet} from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({
    container: {
        backgroundColor: '#00275c',
        paddingTop: getStatusBarHeight(true),
        flex: 1,
        // flexDirection: 'row',
    },
    imageContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    defaultInput: {
        height: 50,
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ffffff',
        padding: 5,
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10
    },

    container2: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    center: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    untilFooter: {
        height: '87%',
    }
});
