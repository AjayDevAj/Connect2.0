/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Login from './src/containers/login/Login'
import Add_new_offers from './src/containers/Offers/Add_new_offers'
import My_Offers from './src/containers/Offers/My_Offers';
import My_Offers_Home from './src/containers/Offers/My_Offers_Home';
import New_Post from './src/containers/Post/New_Post';
import CustomerFilter from './src/containers/Customer_Filter/CustomerFilter';






import {name as appName} from './app.json';

 AppRegistry.registerComponent(appName, () => App);
//AppRegistry.registerComponent(appName, () => CustomerFilter);

