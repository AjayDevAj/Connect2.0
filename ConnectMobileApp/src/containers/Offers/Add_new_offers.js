import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../../Header/TopHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonButton from '../../Header/CommonButton';
import fontfaimly from '../../utility/Font-Declarations';
import DropdownComponent from '../Post/Post_dropDown';
import {launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Singleinterfaceicon from '../../../assets/svg/singleinterfaceicon.svg';
import PencilIcon from '../../../assets/svg/penciliconwithCircle.svg';

import {Post_type, Offer_CTA, location_Data_Key} from '../../utility/Constant';
import PostStyleSheet from '../Post/PostStyleSheet';

const Add_new_offers = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [postMessage, onChangeText] = useState(
    'Lorem Impsun Lorem Impsun Lorelorem Impsun Lorem Impsun Lore…',
  );
  const [offerdis, setofferdisclimer] = useState(
    'Lorem Impsun Lorem Impsun Lorelorem Impsun Lorem Impsun Lore…',
  );
  const [Couponcode, setCouponcode] = useState('Code......');
  const [offerlink, setOfferlink] = useState(
    'Img Src=Https://Picsum.Photos.Random=1',
  );

  const [validtill, setvailidtill] = useState(
    'Wednesday, 13th Feb 2022',
  );

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [datevalidity, setvailidity] = useState({from: 'From', to: 'To'});

  const [data, setData] = useState('');
  const [arrayholder, setarrayholder] = useState('');

  const [checkboxdata, setcheckboxdata] = useState('');

  //   /// swipable panel

  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: false,

    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    // ...or any prop you want
  });
  const [isPanelActive, setIsPanelActive] = useState(false);

  const openPanel = () => {
    setIsPanelActive(true);
  };

  const closePanel = () => {
    setIsPanelActive(false);
  };

  /** get location data from storage  */

  useEffect(() => {
    getdetas();
  }, []);

  const getdetas = async () => {
    const SlresponseData = await getOtpResponse(location_Data_Key);
    console.log(
      'Store  DATA from the async storage ========-=-=-=-=-=->>>>',
      SlresponseData,
    );

    if (
      SlresponseData != null &&
      SlresponseData != undefined &&
      SlresponseData.locations != undefined
    ) {
      // ** Master Data
      setData(SlresponseData.locations);

      console.log(
        'Store  DATA from the async storage after null and undefined check========-=-=-=-=-=->>>>',
        SlresponseData.locations,
      );

      //** */ Filtered Data
      setarrayholder(SlresponseData.locations);
    }
  };

  //** */ Image picker for post
  const [filePath, setFilePath] = useState({});
  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
    };
    launchImageLibrary(options, response => {
      console.log('Response = ', response);

      if (response.didCancel) {
        alert('User cancelled camera picker');
        return;
      } else if (response.errorCode == 'camera_unavailable') {
        alert('Camera not available on device');
        return;
      } else if (response.errorCode == 'permission') {
        alert('Permission not satisfied');
        return;
      } else if (response.errorCode == 'others') {
        alert(response.errorMessage);
        return;
      }
      console.log('base64 -> ', response.base64);
      console.log('uri -> ', response.uri);
      console.log('width -> ', response.width);
      console.log('height -> ', response.height);
      console.log('fileSize -> ', response.fileSize);
      console.log('type -> ', response.type);
      console.log('fileName -> ', response.fileName);
      setFilePath(response);
    });
  };

  return (
    <View
      style={{
        flex: 1,
        opacity: 100,
      }}>
      <TopHeader
        firstIcon={'arrow-back'}
        name={'Add New Offer'}
        thirdIcon={'more-vert'}
      />

      <ScrollView style={{}}>
        {/**  Image Container for Add Post  */}
        <View style={PostStyleSheet.addPostImageView}>
          <Icon
            name="add-a-photo"
            size={69}
            color={'rgba(95, 99, 104, 1)'}
            onPress={() => chooseFile()}
          />
          <Text
            style={{
              fontSize: 15,
              color: 'rgba(14, 0, 113, 1)',
              fontFamily: fontfaimly.Alte_DIN,
              paddingTop: 5,
              textDecorationLine: 'underline',
            }}>
            Add Banner Image
          </Text>

          {/* <Image
              source={{uri: filePath.uri}}
              style={PostStyleSheet.imageStyle}
            /> */}
        </View>

        <View style={{backgroundColor: 'white', flex: 4, padding: 20}}>
          <Text style={PostStyleSheet.LinktoOfferLabelText}>Offer Title</Text>
          <TextInput
            style={PostStyleSheet.OfferLinkInputText}
            numberOfLines={4}
            onChangeText={text => setOfferlink(text)}
            value
          />

          <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.addPostMessageLabelText}>
              Offer Description
            </Text>
            <TextInput
              style={PostStyleSheet.addPostMeassgInputText}
              multiline={true}
              numberOfLines={4}
              onChangeText={text => onChangeText(text)}
              value={postMessage}
            />
          </View>

          <Text style={PostStyleSheet.LinktoOfferLabelText}>Offer Tagline</Text>
          <TextInput
            style={PostStyleSheet.OfferLinkInputText}
            numberOfLines={4}
            onChangeText={text => setOfferlink(text)}
            value={''}
          />

          {/* //toggleSwitch */}
          <View style={{flexDirection:'row',justifyContent:'space-between',paddingTop:20,alignItems:'center'}}>
            <Text style={PostStyleSheet.addPostMessageLabelText}>Offer Status</Text>
            <Switch
              trackColor={{false: '#F4F4F4', true: '#0070FC'}}
              thumbColor={isEnabled ? '#FFFFFF' : '#f4f3f4'}
              ios_backgroundColor="#F4F4F4"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>

          <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.LinktoOfferLabelText}>
              Link To Offer
            </Text>
            <TextInput
              style={PostStyleSheet.OfferLinkInputText}
              numberOfLines={4}
              onChangeText={text => setOfferlink(text)}
              value={offerlink}
            />
          </View>

          <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.LinktoOfferLabelText}>
              Vailid Till
            </Text>
            <TextInput
              style={PostStyleSheet.OfferLinkInputText}
              numberOfLines={4}
              onChangeText={text => setvailidtill(text)}
              value={validtill}
            />
          </View>

          <Text style={PostStyleSheet.LocationLabelText}>Locations</Text>
          <Text>{data}</Text>
          <Text style={PostStyleSheet.offerdisclimerLabelText}>
            Offer Disclaimer
          </Text>
          <TextInput
            style={PostStyleSheet.offerdisclaimerinputtex}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setofferdisclimer(text)}
            value={offerdis}
          />
        </View>
      </ScrollView>

      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => openPanel()}>
          <CommonButton buttonname={'SEE PREVIEW'} />
        </TouchableOpacity>
      </View>

      {/* // Post data PREVIEW */}
      <SwipeablePanel
        {...panelProps}
        isActive={isPanelActive}
        noBar={true}
        smallPanelHeight={550}
        overScrollMode={false}
        style={{alignItems: 'center', paddingTop: 15}}>
        {/* <PanelContent /> Your Content Here */}

        <Card
          style={{
            borderRadius: 8,
            borderColor: '#00000017',
            elevation: 5,
            width: 350,
            height: 312,
          }}
          mode="elevated">
          {/* <Card.Actions>
       <Icon name='edit'/>
      </Card.Actions> */}
          <Card.Cover
            style={{borderTopEndRadius: 9}}
            source={{uri: 'https://picsum.photos/700'}}
          />
          
          <Card.Content>
            <Text style={{color:'#000000',fontSize:18,opacity:100,fontFamily:fontfaimly.Alte_DIN,paddingTop:10}}>Need A Car ?</Text>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: fontfaimly.Poppins,
                left: 0,

                fontSize: 14,
              }}>
              {postMessage}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Icon name="event" size={20} color={'#5F6368'} />
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,
                    fontSize: 14,
                    color: '#5F6368',
                    padding: 5,
                  }}>
                  Vailid Till :
                </Text>
                {/* // Date from the vailidity */}
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,
                    fontSize: 14,
                    color: '#5F6368',
                  }}>
                  22nd feb’ 22
                </Text>
              </View>
            </View>
          </Card.Content>
        </Card>

        <View style={{alignItems: 'center', marginTop: 15}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#0070FC',
              width: 350,
              height: 50,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Singleinterfaceicon />
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontFamily: fontfaimly.Alte_DIN,
                margin: 5,
              }}>
              PUBLISH OFFER
            </Text>
          </TouchableOpacity>
        </View>
      </SwipeablePanel>
    </View>
  );
};

export default Add_new_offers;
