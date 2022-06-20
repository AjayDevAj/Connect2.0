import { StyleSheet } from 'react-native';
import fontFamily from '../../utility/Font-Declarations';

const cardStyles = StyleSheet.create({
    card: {
        marginTop: 10,
        marginHorizontal: 4,
        marginVertical: 2,
        // width: '100%',
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 8,
    },
    borderShadow: {
        borderBottomColor: '#ddd',
        borderBottomWidth: 1,
    },

    /*
    * * Card Row One (Logo, Name, Location)
    */

    cardRowOne: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    cardLogoNameContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-around'
    },
    cardIconContainer: {
        alignSelf: 'flex-start',
        alignItems: 'center',
        opacity: 1,
        width: 18,
        height: 18,
        borderRadius: 9,
        elevation: 5,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        elevation: 6,
        // shadowColor: '#00000029',
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 8,
        borderColor: '#FFFFFF',
    },
    cardName: {
        color: '#333333',
        opacity: 1,
        fontSize: 16,
        fontFamily: fontFamily.Alte_DIN,
        textAlign: 'left',
        marginLeft: 10
    },
    cardLocationContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cardLocation: {
        color: '#657180',
        textTransform: 'capitalize',
        marginLeft: 3,
        opacity: 1,
        fontFamily: fontFamily.Alte_DIN,
        fontSize: 13
    },



    /*
    * * Card Row Two (Message, Assigned, Time)
    */

    cardRowTwo: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between'
    },
    assignedToContainer: {
        width: '66%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    chatAssignedTo: {
        color: '#666666',
        opacity: 0.87,
        letterSpacing: 0,
        fontSize: 14,
        fontFamily: fontFamily.Poppins,
        marginLeft: 5
    },
    unreadChatMessage: {
        color: '#000000',
        marginVertical: 8,
        width: '69%',
        height: 20,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'flex-start'
    },
    unreadCountDesign: {
        backgroundColor: '#00C158',
        width: 21,
        height: 16,
        borderRadius: 9,
        opacity: 1,
        textAlign: 'center',
        justifyContent: 'flex-end',
        marginVertical: '3%',
        marginHorizontal: '3%'
    },
    unreadCountDesignLessThan31: {
        backgroundColor: '#00C158',
        width: 21,
        height: 16,
        borderRadius: 9,
        opacity: 1,
        textAlign: 'center',
        // justifyContent: 'flex-start',
        marginVertical: '5%',
        // marginHorizontal: '3%'
    },
    chatMessage: {
        color: '#000000',
        marginVertical: 8,
        width: '66%',
        height: 20,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
        fontSize: 14,
    },
    cardTimeContainer: {
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical: 10
    },
    cardTimeIcon: {
        width: 4,
        height: 4,
        opacity: 1,
        backgroundColor: '#657180',
        borderRadius: 3,
        marginVertical: 4,
        marginRight: 3
    },
    cardTime: {
        color: '#657180',
        fontSize: 11,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
    },
});

export default cardStyles;