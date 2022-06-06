import { StyleSheet } from 'react-native';

// Paginator stylesheet
const paginatorStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    dot: {
        height: 6,
        width: 6,
        borderRadius: 5,
        backgroundColor: '#657180',
        marginHorizontal: 3,
        opacity: 0.02,
        top:-240,
    },
});

export default paginatorStyles;