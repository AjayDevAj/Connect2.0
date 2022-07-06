import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TopHeader from '../../Header/TopHeader';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonButton from '../../Header/CommonButton';
import fontfaimly from '../../utility/Font-Declarations';
import DropdownComponent from './Post_dropDown';
import {launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {SwipeablePanel} from 'rn-swipeable-panel';
import {Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';
import Googleimage from '../../../assets/svg/google-g-2015.svg';
import PencilIcon from '../../../assets/svg/penciliconwithCircle.svg';
import {useDispatch, useSelector} from 'react-redux';
import {Post_type, Offer_CTA, location_Data_Key} from '../../utility/Constant';
import PostStyleSheet from './PostStyleSheet';
import {loadpostdata} from '../../actions/PostAction';
import {getOtpResponse} from '../../utility/StorageClass';

const New_Post = () => {
  const [message, onChangeText] = useState(
    'Lorem Impsun Lorem Impsun Lorelorem Impsun Lorem Impsun Lore…',
  );
  const [offerdis, setofferdisclimer] = useState(
    'Lorem Impsun Lorem Impsun Lorelorem Impsun Lorem Impsun Lore…',
  );
  const [Couponcode, setCouponcode] = useState('Code......');
  const [link, setOfferlink] = useState(
    'https://singleinterface.com',
  );

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [datevalidity, setvailidity] = useState({from: 'From', to: 'To'});

  const [data, setData] = useState('');
  const [location_id, setLocation_id] = useState(1);
  const [arrayholder, setarrayholder] = useState('');

  //const [checkboxdata, setcheckboxdata] = useState('');
  const [call_to_action,setcall_to_action]= useState('LEARN_MORE')

  /// swipable panel

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
      SlresponseData.locations,
    );

    if (
      SlresponseData != null &&
      SlresponseData != undefined &&
      SlresponseData.locations != undefined
    ) {
      // ** Master Data
      setData(SlresponseData.locations);
      const locationid = SlresponseData.locations.map(id => id.id);
      console.log('Location_id -->', locationid);
      // location id
      //setLocation_id(locationid)

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
  const [picture_url,setPicture_url] = useState('')

  console.log('-----------.......>>>>>picture url',picture_url)

  const chooseFile = type => {
    let options = {
      mediaType: type,
      maxWidth: 300,
      maxHeight: 550,
      quality: 1,
      includeBase64: true,
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
      //console.log('base64 -> ', response.assets[0].base64);
      console.log('uri -> ', response.assets[0].uri);
      // console.log('width -> ', response.width);
      // console.log('height -> ', response.height);
      // console.log('fileSize -> ', response.fileSize);
      // console.log('type -> ', response.type);
      // console.log('fileName -> ', response.fileName);
      setFilePath(response);
      setPicture_url(response.assets[0].uri)
    });
  };

  const dispatch = useDispatch();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        opacity: 100,
      }}>
      <TopHeader
        firstIcon={'arrow-back'}
        name={'Add New Post'}
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
            Add Post Image
          </Text>

          {/* <Image
            source={{uri: filePath.uri}}
            style={PostStyleSheet.imageStyle}
          /> */}
        </View>

        <View style={{backgroundColor: 'white', flex: 4, padding: 20}}>
          {/* <DropdownComponent listvalue={Post_type} title={'Post Type'} /> */}

          <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.addPostMessageLabelText}>
              Add Message to your Post
            </Text>
            <TextInput
              style={PostStyleSheet.addPostMeassgInputText}
              multiline={true}
              numberOfLines={4}
              onChangeText={text => onChangeText(text)}
              value={message}
            />
          </View>

          <DropdownComponent title={'Offer CTA'} listvalue={Offer_CTA} />

          {/* <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.CouponCodeLabelText}>Coupon Code</Text>
            <TextInput
              style={PostStyleSheet.CouponCodeInputText}
              numberOfLines={4}
              onChangeText={text => setCouponcode(text)}
              value={Couponcode}
            />
          </View>

          <Text
            style={{
              fontSize: 14,
              color: '#657180',
              fontFamily: fontfaimly.Alte_DIN,
            }}>
            Validity
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingTop: 15,
            }}>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <View style={PostStyleSheet.validity}>
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,

                    fontSize: 12,
                    color: '#657180',
                  }}>
                  {datevalidity.from}
                </Text>
                <Icon name="event" size={15} color={'#657180'} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setOpen(true)}>
              <View style={PostStyleSheet.validity}>
                <Text
                  style={{
                    fontFamily: fontfaimly.Poppins,

                    fontSize: 12,
                    color: '#657180',
                  }}>
                  {datevalidity.to}
                </Text>
                <Icon name="event" size={15} color={'#657180'} />
              </View>
            </TouchableOpacity>
          </View>

          <View style={{paddingBottom: 15}}>
            <Text style={PostStyleSheet.LinktoOfferLabelText}>
              Link To Offer
            </Text>
            <TextInput
              style={PostStyleSheet.OfferLinkInputText}
              numberOfLines={4}
              onChangeText={text => setOfferlink(text)}
              value={link}
            />
          </View>

          <Text style={PostStyleSheet.LocationLabelText}>Locations</Text>
          <Text>{data.locations}</Text>
          <Text style={PostStyleSheet.offerdisclimerLabelText}>
            Offer Disclaimer
          </Text>
          <TextInput
            style={PostStyleSheet.offerdisclaimerinputtex}
            multiline={true}
            numberOfLines={4}
            onChangeText={text => setofferdisclimer(text)}
            value={offerdis}
                /> */}
        </View> 
      </ScrollView>

       <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <TouchableOpacity onPress={() => openPanel()}>
          <CommonButton buttonname={'SEE PREVIEW'} />
        </TouchableOpacity>
      </View> 

      {/*<DatePicker
        modal
        open={open}
        date={date}
        mode={'date'}
        onConfirm={date => {
          setOpen(false);
          setDate(date);

          console.log(date.toDateString());
        }}
        onCancel={() => {
          setOpen(false);
        }}
      /> */}
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
            //source={{uri: 'https://picsum.photos/700'}}
            source={{uri:picture_url}}
          />
          <View
            style={{
              position: 'absolute',
              top: 10,
              right: 10,
              elevation: 10,
            }}>
            <TouchableOpacity onPress={() => chooseFile()}>
              <PencilIcon height={50} width={50} />
            </TouchableOpacity>
          </View>
          <Card.Content>
            <Text
              style={{
                paddingTop: 10,
                fontFamily: fontfaimly.Poppins,
                left: 0,

                fontSize: 14,
              }}>
              {message}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingTop: 10,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => alert('show complete details')}
                style={{
                  backgroundColor: '#0E0071',
                  with: '100%',
                  height: '60%',
                  borderRadius: 6,
                  justifyContent: 'center',
                  //alignItems:'center',
                  padding: 10,
                }}>
                <Text
                  style={{
                    fontFamily: fontfaimly.Alte_DIN,
                    color: '#FFFFFF',
                    fontSize: 14,
                  }}>
                  LEARN MORE
                </Text>
              </TouchableOpacity>
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
          {/* /**
           *
           * mandatory params
           * @param {*} location_id
           * @param {*} message  ---- postMessage
           * @param {*} picture_url  ----bashe64
           * @param {*} call_to_action --LEARN_MORE
           * @param {*} link  -- offerlink
           *
           */}
          <TouchableOpacity
             onPress={() => dispatch(loadpostdata(location_id,
              message,
              picture_url,
              link,
              call_to_action))}
            style={{
              backgroundColor: '#0070FC',
              width: 350,
              height: 50,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Googleimage />
            <Text
              style={{
                fontSize: 16,
                color: '#FFFFFF',
                fontFamily: fontfaimly.Alte_DIN,
                margin: 5,
              }}>
              PUBLISH POST
            </Text>
          </TouchableOpacity>
        </View>
      </SwipeablePanel>
    </SafeAreaView>
  );
};

export default New_Post;
