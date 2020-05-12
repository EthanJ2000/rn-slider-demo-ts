import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  StatusBar,
  Linking,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const Slides = ({data}: any) => {
  return (
    <AppIntroSlider
      showPrevButton={true}
      showSkipButton={true}
      renderItem={renderItem}
      data={data}
      onDone={onDone}
      onSkip={onSkip}
    />
  );
};

const renderItem = ({item}: any) => {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <View style={{flex: 1, backgroundColor: item.backgroundColor}}>
      <StatusBar translucent backgroundColor="transparent" />
      <Text style={[styles.title, {color: item.titleColor}]}>{item.title}</Text>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={[styles.subText, {color: item.titleColor}]}>
        {item.subText}
      </Text>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: item.buttonColor}]}
        onPress={() => openLink(item.buttonLink)}>
        <Text style={styles.buttonText}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

const openLink = (link: string) => {
  Linking.openURL(link);
};

const onDone = () => {
  console.log('Done');
};

const onSkip = () => {
  console.log('Skipped');
};

// const slides = [
//   {
//     key: '1',
//     title: 'Title 1',
//     titleColor: 'black',
//     subText: 'Description.\nSay something cool',
//     backgroundColor: 'green',
//     buttonLink: '',
//     buttonColor: '',
//   },
//   {
//     key: '2',
//     title: 'Title 2',
//     titleColor: 'black',
//     subText: 'Description.\nSay something cool',
//     backgroundColor: 'orange',
//     buttonLink: '',
//     buttonColor: '',
//   },
// ];

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    textAlign: 'center',
    marginTop: 60,
  },
  image: {
    width: '70%',
    height: '60%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  subText: {
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: '50%',
    height: '5%',
    alignSelf: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default Slides;
