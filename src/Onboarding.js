import React, { useRef } from 'react';

import {
  StatusBar,
  Animated,
  Text,
  Image,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('screen');
const bgs = ['#A5BBFF', '#DDBEFE', '#FF63ED', '#B98EFF'];
const DATA = [
  {
    key: '3571572',
    title: 'Multi-lateral intermediate moratorium',
    description:
      "I'll back up the multi-byte XSS matrix, that should feed the SCSI application!",
    image: 'https://cdn-icons-png.flaticon.com/512/8282/8282467.png',
  },
  {
    key: '3571747',
    title: 'Automated radical data-warehouse',
    description:
      'Use the optical SAS system, then you can navigate the auxiliary alarm!',
    image: 'https://cdn-icons-png.flaticon.com/512/8282/8282505.png',
  },
  {
    key: '3571680',
    title: 'Inverse attitude-oriented system engine',
    description:
      'The ADP array is down, compress the online sensor so we can input the HTTP panel!',
    image: 'https://cdn-icons-png.flaticon.com/512/8282/8282571.png',
  },
  {
    key: '3571603',
    title: 'Monitored global data-warehouse',
    description: 'We need to program the open-source IB interface!',
    image: 'https://cdn-icons-png.flaticon.com/512/8282/8282582.png',
  },
];

const Indicator = ({scrollX}) => {
    return (
        <View style={styles.indicator}>
            {DATA.map((_,i)=>{
                return (
                    <View style={
                        styles.dot
                    }>
                    </View>
                )
            })}
        </View>
    )
}

const BackDrop = ({scrollX}) =>{
    const backgroundColor = scrollX.interpolate({
        inputRange : bgs.map((_,i) => i *width),
        outputRange : bgs.map((bg) => bg)
    })
    return (
        <Animated.View style={[StyleSheet.absoluteFillObject,{backgroundColor}]}>

        </Animated.View>
    )
}

const Onboarding = () => {

  const scrollX =  useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.container}>
      <StatusBar />
      <BackDrop scrollX ={scrollX}/>
      <Animated.FlatList
        data={DATA}
        keyExtractor={item => item.key}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle ={{paddingBottom : 100}}
        scrollEventThrottle={16}
        pagingEnabled // lướt dứt khoát khi vuốt
        onScroll={Animated.event(
            [
                {nativeEvent : {contentOffset : {x : scrollX}}}
            ],
            {useNativeDriver : false}
        )}
        renderItem={({item}) => {
          return (
            <View style={styles.onBoarding}>
              <View style={styles.positionImage}>
                <Image source={{uri: item.image}} style={styles.image} />
              </View>
              <View style={styles.positionTitle}>
                <Text style={styles.textTitle}>{item.title}</Text>
                <Text style={styles.textDescription}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <Indicator scrollX = {scrollX}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  onBoarding : {
    width : width,
    alignItems : "center",
    padding : 20
  },
  image: {
    width: width / 2,
    height: height / 2,
    resizeMode: 'contain',
  },
  positionImage:{
    flex :  0.7,
    justifyContent : "center",
    alignItems : "center"
  },
  positionTitle :{
    flex : 0.3,
  },
  textTitle:{
    fontSize : 24,
    fontWeight : '800',
    marginBottom : 10
  },
  textDescription : {
    fontWeight : '300'
  },
  indicator : {
    position : 'absolute',
    bottom : 100,
    flexDirection : 'row'
  },
  dot :{
    height : 10,
    width: 10,
    borderRadius : 15,
    backgroundColor : "#3333",
    margin : 10
  }
});

export default Onboarding;
