import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations';

const cardStyles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginHorizontal: 4,
        marginVertical: 6,
        // width: '100%',
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },

    cardIconContainer: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        opacity: 1,
        width: 22,
        height: 22,
        borderRadius: 22/2,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 5,
    },

    cardNameMsg: {
        alignSelf: 'flex-start',
        position: 'absolute',
        left: 35,
        top: -3
    },
    cardName: {
        color: '#333333',
        opacity: 1,
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN,
    },

    assignedToContainer: {
        top: 10,
    },
    chatAssignedTo: {
        color: '#666666',
        position: 'relative',
        top: -18,
        left: 30,
        width: 149,
        height: 20,
        opacity: 0.87,
        letterSpacing: 0,
        fontSize: 14,
        fontFamily: fontFamily.Poppins
    },

    chatMessage: {
        color: '#000000',
        // position: 'absolute',
        textAlign: 'left',
        marginVertical: 12,
        // left: 30,
        width: 196,
        height: 20,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
        fontSize: 14,
    },

    cardLocationTime: {
        alignSelf: 'flex-end'
    }, 

    cardLocationContainer: {
        alignSelf: 'flex-end',
        position: 'relative',
        top: -18,
        left: -20,
    },

    cardLocation: {
        color: '#657180',
        textTransform: 'capitalize',
        position: 'relative',
        top: -18,
        left: 18,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Alte_DIN,
    },

    cardTimeContainer: {
        position: 'absolute',
        
    },

    cardTimeIcon: {
        alignItems: 'flex-end',
        top: 15,
        left: 1,
        width: 4,
        height: 4,
        opacity: 1,
        backgroundColor: '#657180',
        borderRadius: 3
    },

    cardTime: {
        color: '#657180',
        left: 8,
        top: 5,
        fontSize: 11,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
        
    },

    borderShadow: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },
});

export default cardStyles;