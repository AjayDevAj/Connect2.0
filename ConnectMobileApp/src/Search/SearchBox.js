import React, { useState } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView, SafeAreaView } from 'react-native';

import SearchBoxIcon from './SearchBoxIcon';
import SearchBoxList from './SearchBoxList';
import SearchTextInputBox from './SearchTextInputBox';
import TopHeader from '../Header/TopHeader';

import searchStyles from './styles/SearchStylesheet';


const SearchBox = ({ clicked, searchText, chatSearchHandler, firstIcon, secondIcon, thirdIcon, topHeaderName, menuHandler, searchHandler, filterHandler, arrowDownIcon='', arrowDownHandler='' }) => {
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
        {!searchBackBtnClicked ? (
            <View style={searchStyles.searchMainContainer}>
                {/* <View style={searchTextInputIsFocusedClicked == true ? [searchStyles.searchMainContainer, {height: '25%', marginBottom: '2%', minHeight: '15%', maxHeight: '25%'}] : [searchStyles.searchMainContainer, { minHeight: '15%'}]}> */}
                <View style={searchStyles.searchBarView__clicked}>
                    <View style={{ position: "absolute", zIndex: 1, marginLeft: '6.5%', paddingTop: 40 }}>
                        <SearchBoxIcon rightIconName="arrow-back" searchIconSize={26} searchTextColor="#657180" style={{ opacity: 1, }} searchHandler={searchBackHandler} />                             
                    </View>

                    <SearchTextInputBox searchText={searchText} chatSearchHandler={chatSearchHandler} onFocusChangeHandler={onFocusChangeHandler} />
                            
                    <View style={{ position: "absolute", zIndex: 1, right: 15, paddingTop: 35 }}>
                        {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={26} searchTextColor="#657180" searchHandler={searchIconHandler}  />)}
                    </View>
                </View>

                {/* {searchBtnClicked && (<SearchBoxList searchTextInputIsFoucsedClicked={searchTextInputIsFoucsedClicked} /> )} */}
            </View>
        ) : (
            <TopHeader
                firstIcon={firstIcon}
                secondIcon={secondIcon}
                thirdIcon={thirdIcon}
                name={topHeaderName}
                menuHandler={menuHandler}
                searchHandler={searchHandler}
                filterHandler={filterHandler}
                arrowDownIcon={arrowDownIcon}
                arrowDownHandler={arrowDownHandler}
            />
        )}
        </>
    );
};

export default SearchBox;