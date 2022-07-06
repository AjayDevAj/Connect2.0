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
    unreadCardMessage: {
        color: '#000000',
        marginVertical: 8,
        fontFamily: fontFamily.Poppins,
        fontSize: 14,
        fontWeight: 'bold',
        justifyContent: 'flex-start',
        // backgroundColor:'red'
    },
    //auth context.js
    unreadCountDesign: {
        backgroundColor: '#00C158',
        marginLeft:5,
        borderRadius:8,
        overflow: 'hidden',
        fontSize:12,
        height:16,
        minWidth:21,
        textAlign:'center', 
    },
    unreadCountDesignLessThan31: {
        backgroundColor: '#00C158',
        width: '10%',
        height: 18,
        borderRadius: 21/2,
        opacity: 1,
        textAlign: 'center',
        alignSelf: 'center',
        marginVertical: '3%',
        marginHorizontal: '3%',
        paddingRight: 3,
    },
    cardMessage: {
        color: '#000000',
        marginVertical: 8,
        maxWidth: '66%',
        height: 20,
        opacity: 1,
        letterSpacing: 0,
        fontFamily: fontFamily.Poppins,
        fontSize: 14,
        marginLeft: 5,
    },
    cardTimeContainer: {
        flexDirection:'row',
        marginVertical: 10,
        alignItems:'center'
        // marginRight:10,
        // backgroundColor:'red'
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

    /*
    * * Card Row Three (AgentName, Icon)
    */
    cardRowThree: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardAgentNameContainer: {
        flexDirection: 'row',
        backgroundColor:'#F4F4F4',
        marginLeft: 25,
        alignItems: 'center',
        marginBottom: 12,
        borderColor: '#EAEAEA',
        borderRadius:4,
        borderWidth:1 ,
    },
    cardAgentName: {
        color: '#4C5969',
        letterSpacing: 0,
        fontSize: 14,
        opacity: 1,
        paddingVertical: 2,
        paddingHorizontal: 7,
        fontFamily: fontFamily.Poppins,
    },
});

export default cardStyles;