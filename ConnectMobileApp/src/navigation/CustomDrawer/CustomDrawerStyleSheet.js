import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations'

export default StyleSheet.create({

    listText: {
        color: '#333333',
        fontSize: 15,
        marginVertical: 5,
        marginLeft: 5,
        fontFamily: fontFamily.Poppins,
        opacity: 1
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
        color: '#5F6368'
    },
    logoutStyle: {
        flexDirection: 'row',
        position: 'absolute', 
        bottom: 5, 
        backgroundColor: 'white',
        height: '5%', 
        width: '100%', 
        elevation: 20,
        shadowRadius: 6,
        shadowOpacity: 1,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#00000012',

    },
    logoutText: {
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgba(14, 0, 113, 1)'
    },
    closeImg: {
        position: 'absolute',
        right: 20,
        marginTop: 8,
        opacity: 0.5,
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
});


