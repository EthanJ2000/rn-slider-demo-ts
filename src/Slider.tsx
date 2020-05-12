import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Slides from './Slides';

const Slider = () => {
  const initialValue = [
    {
      key: '1',
      title: '',
      titleColor: 'white',
      backgroundColor: '',
      subText: '',
      buttonLink: '',
      buttonColor: '',
      image:
        'https://yesimadesigner.com/wp-content/uploads/2019/06/Asset-146.png?x99157&x23306',
    },
  ];
  const [response, setResponse] = useState(initialValue);

  useEffect(() => {
    returnSlides();
  }, []);

  const returnSlides = () => {
    let data: any = [];
    firestore()
      .collection('slides')
      .get()
      .then((snapshot: any) => {
        snapshot.forEach((doc: any) => {
          data.push(doc.data());
        });
      })
      .then(() => {
        setResponse(data);
      })
      .catch((err: Error) => console.error(err));
  };

  return (
    <View style={styles.sliderContainer}>
      <Slides data={response} />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {flex: 1},
});

export default Slider;
