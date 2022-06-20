import React, { useState } from 'react';
import { View, Keyboard, TouchableWithoutFeedback, KeyboardAvoidingView } from 'react-native';

import SearchBoxIcon from './SearchBoxIcon';
import SearchBoxList from './SearchBoxList';
import SearchTextInputBox from './SearchTextInputBox';
import TopHeader from '../Header/TopHeader';

import searchStyles from './styles/SearchStylesheet';

const SearchBox = ({ clicked, searchText, chatSearchHandler, firstIcon, secondIcon, thirdIcon, topHeaderName, menuHandler, searchHandler, filterHandler }) => {
    const [searchBackBtnClicked, setBackBtnClicked] = useState(false);
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);

    const searchBackHandler = () => {
        !searchBackBtnClicked ? setBackBtnClicked(true) : setBackBtnClicked(false)
    };

    const searchIconHandler = () => {
        !searchBtnClicked ? setSearchBtnClicked(true) : setSearchBtnClicked(false)
    };

    return (
    <>
        {!searchBackBtnClicked ? (
        <View>
            {/* <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "bottom"}
                
            > */}
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={searchStyles.searchMainContainer}>
                        <View style={searchStyles.searchBarView__clicked}>
                            {/* Back Icon */}
                            <View style={{ position: "absolute", zIndex: 1, marginLeft: '6.5%', paddingTop: 40 }}>
                                <SearchBoxIcon rightIconName="arrow-back" searchIconSize={26} searchTextColor="#657180" style={{ opacity: 1, }} searchHandler={searchBackHandler} />                             
                            </View>

                            {/* Input field */}
                            <SearchTextInputBox searchText={searchText} chatSearchHandler={chatSearchHandler} />
                            
                            {/* cross Icon, depending on whether the search bar is clicked or not */}
                            <View style={{ position: "absolute", zIndex: 1, right: 15, paddingTop: 35 }}>
                                {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={26} searchTextColor="#657180" searchHandler={searchIconHandler}  />)}
                            </View>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            {/* </KeyboardAvoidingView> */}
            {searchBtnClicked && (<SearchBoxList /> )}
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
            />
        )}
        </>
    );
};

export default SearchBox;