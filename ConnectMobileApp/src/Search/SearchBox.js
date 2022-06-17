import React, { useState } from 'react';
import { Text, TextInput, View, Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import SearchBoxIcon from './SearchBoxIcon';
import SearchBoxList from './SearchBoxList';
import TopHeader from '../Header/TopHeader';

import searchStyles from './styles/SearchStylesheet';

const SearchBox = ({ clicked, searchText, chatSearchHandler, menuHandler, searchHandler, filterHandler }) => {
    const [searchBackBtnClicked, setBackBtnClicked] = useState(false);
    const [searchTextInputClicked, setSearchTextInputClicked] = useState(false);
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);
    // const [searchText, setSearchText] = useState('');

    // const searchTextHandler = searchTextParam => {
    //     setSearchText(searchTextParam);
    //   };

    const searchBackHandler = () => {
        !searchBackBtnClicked ? setBackBtnClicked(true) : setBackBtnClicked(false)
    };

    const searchIconHandler = () => {
        // alert(searchBtnClicked)
        !searchBtnClicked ? setSearchBtnClicked(true) : setSearchBtnClicked(false)
    };

    return (
    <>
        {!searchBackBtnClicked ? (
            // <KeyboardAvoidingView 
            //     behavior={Platform.OS === "ios" ? "padding" : ""}
            // >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={searchStyles.searchMainContainer}>
                        <View style={searchStyles.searchBarView__clicked}>
                            {/* Back Icon */}
                            <View style={{ position: "absolute", zIndex: 1, marginLeft: '6.5%', paddingTop: 40 }}>
                                <SearchBoxIcon rightIconName="arrow-back" searchIconSize={26} searchTextColor="#657180" style={{ opacity: 1, }} searchHandler={searchBackHandler} />                             
                            </View>

                            {/* Input field */}
                            <View style={searchStyles.searchTextinputView}>
                                <TextInput
                                    style={searchStyles.searchTextinput}
                                    placeholderTextColor='#5F6368'
                                    placeholder="Search here..."
                                    value={searchText}
                                    onChangeText={(value) => chatSearchHandler(value)}
                                />
                            </View>
                            
                            {/* cross Icon, depending on whether the search bar is clicked or not */}
                            <View style={{ position: "absolute", zIndex: 1, right: 15, paddingTop: 35 }}>
                                {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={26} searchTextColor="#657180" searchHandler={
                                    searchIconHandler
                                    // chatSearchHandler(searchText)
                                    
                                }  />)}
                            </View>
                        </View>
                        {searchBtnClicked && (<SearchBoxList /> )}
                    </View>
                </TouchableWithoutFeedback>
            // </KeyboardAvoidingView>
        ) : (
            <TopHeader
                firstIcon="menu"
                secondIcon="search"
                thirdIcon="filter-list"
                name="My Chats"
                menuHandler={menuHandler}
                searchHandler={searchHandler}
                filterHandler={filterHandler}
            />
        ) }
        </>
    );
};

export default SearchBox;