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
  logo ='' 
}) => {
  return (
    <View style={headerStyles.mainContainer}>
      {isSearchEnable ? (  
      <SearchBar
        style={{bottom: 0, marginTop: '15%'}}
        fontColor="#c6c6c6"
        iconColor="#c6c6c6"
        shadowColor="#282828"
        cancelIconColor="#c6c6c6"
        placeholder="Search here..."
        onChangeText={text => console.log('Search Icon is pressed', text)}
        onSearchPress={() => console.log('Search Icon is pressed')}
        onClearPress={() => console.log('Search Icon onClearPress')}
        onPress={() => alert('onPress')}
        searchIconComponent={
          <Icon
            name={'arrow-back'}
            size={28}
            onPress={searchHandler}
            color={color == null ? '#000' : color}
          />
        }
      />
      ):(
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
                    <Icon name={thirdIcon} size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
                </View>
                
            </View>
         )}
    </View>
     
  );
};

export default TopHeader;
