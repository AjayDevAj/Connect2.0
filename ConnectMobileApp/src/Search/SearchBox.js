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
    const [searchTextInputIsFoucsedClicked, setSearchTextInputIsFoucsedClicked] = useState(false);

    const searchBackHandler = () => {
        !searchBackBtnClicked ? setBackBtnClicked(true) : setBackBtnClicked(false)
    };

    const searchIconHandler = () => {
        !searchBtnClicked ? setSearchBtnClicked(true) : setSearchBtnClicked(false)
    };

    const onFocusChangeHandler = () => {
        // alert(searchTextInputIsFoucsedClicked)
        !searchTextInputIsFoucsedClicked ? setSearchTextInputIsFoucsedClicked(true) : setSearchTextInputIsFoucsedClicked(false)
    }

    const keyboardDismissHandler = () => {
        Keyboard.dismiss;
        setSearchTextInputIsFoucsedClicked(false);
    }

    return (
    <>
        {!searchBackBtnClicked ? (
            <TouchableWithoutFeedback onPress={keyboardDismissHandler}>
                <View style={searchTextInputIsFoucsedClicked == true ? [searchStyles.searchMainContainer, {height: '25%', marginBottom: '2%'}] : [searchStyles.searchMainContainer]}>
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
            </TouchableWithoutFeedback>
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