/*
 **
 *
 ** ========================================================
 **
 ** AppName: Connect2.0
 ** Version: X.0.0
 ** FileName: header.js
 ** UsedFor: Header component at connect 2.0 app
 ** Author:
 **
 ** ========================================================
 *
 **
 **
 *
 ** ==========================================================
 **              Header component
 ** ==========================================================
 *
 **
 */

/*
 **
 *
 ** Common react packages import
 *
 **
 */

import React from 'react';
import {Text, View} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import headerStyles from './styles/headerStyleSheet';
import Icon from 'react-native-vector-icons/MaterialIcons';
import WhatsappIcon from '../Card/Icons/whatsapp.svg';
import GoogleIcon from '../Card/Icons/Google.svg';
import Count_Badge from '../component/Count_Badge';

const TopHeader = ({
  firstIcon,
  name,
  secondIcon,
  thirdIcon,
  menuHandler,
  searchHandler,
  filterHandler,
  color = null,
  arrowDownIcon = '',
  arrowDownHandler = '',
  isSearchEnable=false,
  logo ='',
  chatSearchHandler,
  isFilterApplied
}) => {
  return (
    <View style={headerStyles.mainContainer}>
      {isSearchEnable ? 
        (
            <SearchBar
                style={{bottom: 0, marginTop: '12%', height: '45%'}}
                fontColor="#5F6368"
                iconColor="#657180"
                shadowColor="#C3C7D988"
                cancelIconColor="#657180"
                placeholder="Search here..."
                placeholderTextColor="#5F6368"
                onChangeText={text => chatSearchHandler(text)}
                // onSearchPress={chatSearchHandler}
                onClearPress={() => chatSearchHandler('')}
                // onPress={() => alert('Cross button onPress')}
                searchIconComponent={
                    <Icon
                        name={'arrow-back'}
                        size={28}
                        onPress={searchHandler}
                        color={color == null ? '#000' : color}
                    />
                }
            />
        ) : (
            <View style={{ flexDirection: 'row', marginTop: '15%', justifyContent: 'space-between', }}>

                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', }}>
                    <Icon name={firstIcon} size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />
                    {arrowDownIcon != '' ? 
                        (
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={ headerStyles.headerText } onPress={arrowDownHandler}>{name}</Text>
                                <Icon name={arrowDownIcon} size={24} color="#FFF" onPress={arrowDownHandler} style={{ marginTop: '1%', marginLeft: '1%' }} />
                            </View>
                        ) 
                    :   (
                        <>
                        {logo != '' && (
                            <View style={ headerStyles.headerIconContainer }>
                                { logo === 'whatsapp' ? 
                                    <WhatsappIcon />
                                : 
                                    <GoogleIcon /> 
                                }
                            </View>
                        ) }
                        <Text style={ headerStyles.headerText }>{name}</Text>
                        
                        </>
                       )}
                </View>
                
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', }}>
                    <Icon name={secondIcon} size={28} style={ headerStyles.headerSearchIcon }
                    onPress={searchHandler} 
                    color={color == null ? '#FFFFFF': color}
                    />
                    {isFilterApplied ? (
                        <>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                        <Icon name={thirdIcon} size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
                        {/* <View style={{ 
                            width: 10,
                            height: 10,
                            opacity: 1,
                            backgroundColor: 'red',
                            borderRadius: 5,
                            alignSelf: 'flex-start',
                            // marginRight: 5,
                            position: 'absolute',
                            marginLeft: 20
                            }}></View> */}
                            <Count_Badge topRight={10} top={-6} width={20} height={20} badge_Value={2} />
                        </View>
                        
                        </>
                    ) : (
                        <Icon name={thirdIcon} size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
                    )}
                </View>
                
            </View>
        )}
    </View>
     
  );
};

export default TopHeader;
