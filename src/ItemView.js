/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native';

const ItemView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.itemContainer}>
        <View>
          <Image style={styles.imageStyle} source={{uri: props.datas.image}} />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.namesContainer}>
            <Text style={styles.nameStyle}>{props.datas.name}</Text>
            <Text style={styles.locationStyle}>{props.datas.location}</Text>
          </View>
          <View style={{justifyContent: 'center', alignSelf: 'center'}}>
            {props.datas.isOpenNow ? (
              <Image
                style={styles.openImage}
                source={require('./assets/open.png')}
              />
            ) : (
              <Image
                style={styles.closeImage}
                source={require('./assets/close.png')}
              />
            )}
          </View>
          <View style={{alignSelf: 'center'}}>
            {props.datas.isPopular ? (
              <Image
                style={styles.populerStyle}
                source={require('./assets/fire.png')}
              />
            ) : null}
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={styles.likeImageStyle}
              source={require('./assets/like.png')}
            />
            <Text style={styles.like}>{props.datas.likes}</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  itemContainer: {
    width: Dimensions.get('window').width / 1.09,
    height: Dimensions.get('window').height / 3.5,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    marginTop: 35,
    backgroundColor: '#f2f2f2',
  },
  imageStyle: {
    width: Dimensions.get('window').width / 1.098,
    height: Dimensions.get('window').height / 4.9,
    alignSelf: 'center',
  },
  namesContainer: {
    alignItems: 'flex-start',
    margin: 12,
    flexDirection: 'column',
  },
  nameStyle: {
    fontSize: 23,
  },
  locationStyle: {
    color: 'grey',
  },
  like: {
    marginRight: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  likeImageStyle: {
    width: 22,
    height: 22,
    margin: 2,
  },
  populerStyle: {
    width: 36,
    height: 36,
    marginRight: 1,
  },
  closeImage: {
    width: 40,
    height: 40,
  },
  openImage: {
    width: 41,
    height: 41,
  },
});
export default ItemView;
