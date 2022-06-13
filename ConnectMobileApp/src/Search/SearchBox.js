import React from 'react';
import { TextInput, View , KeyboardAvoidingView, Platform} from 'react-native';

import SearchBoxIcon from './SearchBoxIcon';
import SearchBoxList from './SearchBoxList';
import TopHeader from '../Header/TopHeader';

import searchStyles from './styles/SearchStylesheet';

const SearchBox = ({ clicked, searchText, chatSearchHandler }) => {
    return (
        <View style={searchStyles.searchMainContainer}>
            <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        animated={true}
        style={{backgroundColor: 'rgba(247, 252, 255, 1)', flex: 1}}></KeyboardAvoidingView>
            <View style={
                clicked
                ? searchStyles.searchBar__clicked
                : searchStyles.searchBar__unclicked
            }
            >
                
                {/* Back Icon */}
                <SearchBoxIcon rightIconName="arrow-back" searchIconSize={20} searchTextColor="#657180" />

                {/* Input field */}
                <TextInput
                    style={searchStyles.searchTextinput}
                    placeholderTextColor='#5F6368'
                    placeholder="Search here..."
                    value={searchText}
                    onChangeText={(value) => chatSearchHandler(value)}
                />
                
                {/* cross Icon, depending on whether the search bar is clicked or not */}
                {clicked && (<SearchBoxIcon rightIconName="search" searchIconSize={20} searchTextColor="#657180" />)}
            </View>
            <KeyboardAvoidingView/>

            {/* <SearchBoxList /> */}

        </View>
    );
};

export default SearchBox;