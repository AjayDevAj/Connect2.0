import React, { useState, useRef } from 'react';
import { View, FlatList, Animated } from 'react-native';
import slides from './slides';
import OnBoardingItems from './OnBoardingItems';
import Paginator from './Paginator';
import NextButton from './NextButton';
import SkipButton from './SkipButton';
import navigationString from '../utility/NavigationString';
import onBoardingStyles from './styles/OnBoardingStyleSheet';

const OnBoarding = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    const slidesRef = useRef(null);
    const viewableItems = [];
    const viewableItemsChanged = useRef(({ viewableItems }) => {
        setCurrentIndex(viewableItems[0].index)
    }).current;
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;
    const scrollTo = async () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1});
        } else {
            try {
                navigation.navigate(navigationString.LOGIN)
            } catch (err) {
                console.log('Error @setItem: ', err);
            }
        }
    };

    return (
      <View style={ onBoardingStyles.container }>
        <View>
            <FlatList 
                data={slides} 
                renderItem={({item}) => <OnBoardingItems item={item} />} 
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
                    useNativeDriver: false
                })}
                scrollEventThrottle={32}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                ref={slidesRef}
            />
        </View>
        <Paginator data={slides} scrollX={scrollX} />
        <View style = { onBoardingStyles.skipNextRow }>
            <SkipButton navigation={navigation} />
            <NextButton scrollTo={scrollTo} />
        </View>
      </View>
    );
};

export default OnBoarding;