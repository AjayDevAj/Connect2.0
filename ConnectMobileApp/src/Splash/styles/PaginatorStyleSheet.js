/*
**
*
** ========================================================
**
** AppName: Connect2.0
** Version: X.0.0
** FileName: PaginatorStyleSheet.js
** UsedFor: Paginator StyleSheet at connect 2.0 app
** Author:
**
** ========================================================
*
**
**
*
** ==========================================================
**                   Paginator Stylesheet
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

import { StyleSheet } from 'react-native';

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
        opacity: 0.1,
         top:-160
    },
});

export default paginatorStyles;