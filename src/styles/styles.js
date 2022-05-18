import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    body: {
        flex: 3,
        margin: 5,
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        color: '#031A2C'
    },
    areaText: {
        borderColor: '#000',
        backgroundColor: '#fff',
        width: 200,
        margin: 10,
    },
    headerBtn: {
        flexDirection: 'row',
    },
    btn: {
        backgroundColor: '#031A2C',
        margin: 2,
        borderRadius: 5
    },
    text1: {
        color: '#fff',
        padding: 5
    },
    img: {
        height: 80,
        width: 80,
        margin: 4
    },
    imgView: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    }
});

export default styles;