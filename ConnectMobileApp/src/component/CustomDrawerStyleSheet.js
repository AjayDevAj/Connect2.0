
import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';
import fontFamily from '../utility/Font-Declarations'

export default StyleSheet.create({

    listText: {
        color: 'black',
        fontSize: 15,
        marginVertical: 10,
        marginLeft: 5,
        fontFamily: fontFamily.Poppins
    },
    lineStyle: {
        marginLeft: 5,
        backgroundColor: 'rgb(242, 242, 242)',
        height: 1,
        width: '100%',
        marginBottom: 10
    },
    btnStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    listView: {
        flexDirection: 'row',
        marginTop: 5,
        width: '100%'
    },
    iconList: {
        padding: 5,
        color: 'gray'
    },
    logoutStyle: {
        flexDirection: 'row',
        position: 'absolute', bottom: 20, backgroundColor: 'white',
        height: '5%', width: '100%', elevation: 10,
        shadowRadius: 5,
        shadowOpacity: 0.8,
        shadowOffset: {
            width: 0,
            height: -5,
        },
        elevation: 10,
        shadowColor: 'rgba(47, 110, 243, 0.16)',

    },
    logoutText: {
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(14, 0, 113, 1)'
    },
    closeImg: {
        position: 'absolute',
        right: 30,
        marginTop: 12,
        opacity: 0.5


    },
});


