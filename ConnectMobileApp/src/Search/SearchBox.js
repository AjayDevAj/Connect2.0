import React, { useState } from 'react';
import { Text, TextInput, View , KeyboardAvoidingView, Platform} from 'react-native';
// import TextInput from 'react-native-textinput-with-icons';

import SearchBoxIcon from './SearchBoxIcon';
import SearchBoxList from './SearchBoxList';
import TopHeader from '../Header/TopHeader';

import searchStyles from './styles/SearchStylesheet';

const SearchBox = ({ clicked, searchText, chatSearchHandler }) => {
    const [backBtnClicked, setBackBtnClicked] = useState(false);
    const [searchBtnClicked, setSearchBtnClicked] = useState(false);

    const searchBackHandler = () => {
        // alert('back search handler');
        if (!backBtnClicked) {
            setBackBtnClicked(true);
        } else {
            setBackBtnClicked(false);
        }
    };

    const searchIconHandler = () => {
        alert('icon search handler');
        if (!searchBtnClicked) {
            setSearchBtnClicked(true);
        } else {
            setSearchBtnClicked(false);
        }
    }

    const menuHandler = () => {
        // console.log('Menu Handler');
        alert('Menu Handler');
      };
    
      const searchHandler = () => {
        alert('Search Handler');
      };
    
      const filterHandler = () => {
        alert('Filter Handler');
      };

    return (
            <View style={clicked == true ? [searchStyles.searchMainContainer, {height: '25%', }] : [searchStyles.searchMainContainer, {height: '15%', }]}>
                {/* <KeyboardAvoidingView 
                    behavior={Platform.OS === 'ios' ? 'padding' : ''}
                    animated={true}
                    style={{ flex: 1, }}
                > */}
                    <View style={clicked ? searchStyles.searchBarView__clicked : searchStyles.searchBarView__unclicked}>
                        {/* Back Icon */}
                        <View style={{ position: "absolute", zIndex: 1, marginLeft: '6.5%', paddingTop: 40 }}>
                            {!backBtnClicked ? (
                                <SearchBoxIcon 
                                    rightIconName="arrow-back" 
                                    searchIconSize={26} 
                                    searchTextColor="#657180" 
                                    style={{ opacity: 1, }} 
                                    searchHandler={searchBackHandler} 
                                />
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
                            )}
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
                            {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={26} searchTextColor="#657180" />)}
                        </View>
                    </View>

                {/* </KeyboardAvoidingView> */}

                {/* <SearchBoxList /> */}
                {/* {searchBtnClicked ? <SearchBoxList /> : <Text></Text>} */}
            </View>
            
        
        
    );
};

export default SearchBox;