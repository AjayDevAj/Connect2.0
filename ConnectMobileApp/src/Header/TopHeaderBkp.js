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

import React, {useState } from 'react';
import { Text, View } from 'react-native';

// import HeaderSearch from './HeaderSearch';

import headerStyles from './styles/headerStyleSheet';

import Icon from 'react-native-vector-icons/MaterialIcons';

import SearchBox from './SearchBox';
import SearchBoxIcon from './SearchBoxIcon';
import SearchTextInputBox from './SearchTextInputBox';
import searchStyles from './styles/SearchStylesheet';

const TopHeader = ({ firstIcon, name, secondIcon, thirdIcon, menuHandler, searchHandler, filterHandler, color=null, arrowDownIcon='', arrowDownHandler='', clicked, searchText, chatSearchHandler }) => {
    const [searchBackBtnClicked, setBackBtnClicked] = useState(false);
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);
    const [searchTextInputIsFocusedClicked, setSearchTextInputIsFocusedClicked] = useState(false);

    const searchBackHandler = () => {
        !searchBackBtnClicked ? setBackBtnClicked(true) : setBackBtnClicked(false)
    };

    const searchIconHandler = () => {
        !searchBtnClicked ? setSearchBtnClicked(true) : setSearchBtnClicked(false)
    };

    const onFocusChangeHandler = () => {
        // alert(searchTextInputIsFoucsedClicked)
        !searchTextInputIsFocusedClicked ? setSearchTextInputIsFocusedClicked(true) : setSearchTextInputIsFocusedClicked(false)
    }

    const keyboardDismissHandler = () => {
        Keyboard.dismiss;
        alert(searchTextInputIsFocusedClicked)
        setSearchTextInputIsFocusedClicked(false);
        alert(searchTextInputIsFocusedClicked)
    }
    
    return (
        <>
        {/* {clicked ? 
            <SearchBox 
                clicked={clicked}
                searchText={searchText}
                chatSearchHandler={chatSearchHandler}
                firstIcon="menu"
                secondIcon="search"
                thirdIcon="filter-list"
                topHeaderName="My Chats"
                menuHandler={menuHandler}
                searchHandler={searchHandler}
                filterHandler={filterHandler}
            /> 
        : ( */}
            <View style={ headerStyles.mainContainer }>
                <View style={{ flexDirection: 'row', marginTop: '15%', justifyContent: 'space-between', }}>

                    {clicked ? (
                        <View style={searchStyles.searchBarView__clicked}>
                            <View style={{ position: "absolute", zIndex: 1, marginLeft: '6.5%', paddingTop: 40 }}>
                                <SearchBoxIcon rightIconName="arrow-back" searchIconSize={26} searchTextColor="#657180" style={{ opacity: 1, }} searchHandler={searchBackHandler} />                             
                            </View>
        
                            <SearchTextInputBox searchText={searchText} chatSearchHandler={chatSearchHandler} onFocusChangeHandler={onFocusChangeHandler} />
                                    
                            <View style={{ position: "absolute", zIndex: 1, right: 15, paddingTop: 35 }}>
                                {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={26} searchTextColor="#657180" searchHandler={searchIconHandler}  />)}
                            </View>
                        </View>
                    ) : (
                        <>
                        {/* Show Top header icons & name */}
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-start', }}>
                            <Icon name={firstIcon} size={28} style={ headerStyles.headerMenuIcon } onPress={menuHandler} />
                            {arrowDownIcon != '' ? 
                                (
                                    <View style={{ flexDirection: 'row' }}>
                                        <Text style={ headerStyles.headerText } onPress={arrowDownHandler}>{name}</Text>
                                        <Icon name={arrowDownIcon} size={24} color="#FFF" onPress={arrowDownHandler} style={{ marginTop: '1%', marginLeft: '1%' }} />
                                    </View>
                                ) 
                            : 
                                <Text style={ headerStyles.headerText }>{name}</Text>
                            }
                        </View>
                    
                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', }}>
                            <Icon name={secondIcon} size={28} style={ headerStyles.headerSearchIcon }
                            onPress={searchHandler} 
                            color={color == null ? '#FFFFFF': color}
                            />
                            <Icon name={thirdIcon} size={28} style={ headerStyles.headerFilterIcon } onPress={filterHandler} />
                        </View>
                        </>
                    )}
                </View>
                
            </View>
        {/* // )} */}
        </>
    );
}

export default TopHeader;
