import React, { useEffect, useRef } from 'react';
import { Text, TouchableOpacity, View, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import { check, PERMISSIONS, RESULTS } from 'react-native-permissions';
import Toast from 'react-native-easy-toast';
import { useCamera } from 'react-native-camera-hooks';
import { dirHome, moveAttachment } from '../my_files/LocalStorage';
import { styles } from './styles';

const moment = require('moment');

const Camera = (props) => {
  const { navigation, route } = props;
  const toastRef = useRef(null);

  useEffect(() => {
    check(
      PERMISSIONS[Platform.OS === 'android' ? 'ANDROID' : 'IOS'].CAMERA,
    ).then(() => {
      if (cameraPermission !== RESULTS.GRANTED) {
        navigation.goBack();
      }
    });
  }, []);

  const [
    { cameraRef },
    { takePicture, pausePreview, resumePreview },
  ] = useCamera(props);

  const onTakePicture = async () => {
    const options = { quality: 0.5, base64: true };
    const data = await takePicture(options);
    pausePreview({ cameraRef });
    saveImage(data.uri);
  };

  const saveImage = async (filePath) => {
    try {
      // set new image name and filepath
      const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
      const newFilepath = `${dirHome}/${newImageName}`;
      // move and save image to new filepath
      await moveAttachment(filePath, newFilepath);
      toastRef.current.show('Slika je sačuvana.', 500);
      route.params.reloadState();
      resumePreview({ cameraRef });
    } catch (error) {
      toastRef.current.show('Greška prilikom čuvanja slike', 1000);
    }
  };

  return (
    <View style={styles.container}>
      <RNCamera ref={cameraRef} style={styles.preview}>
        <View style={styles.cameraButton}>
          <TouchableOpacity onPress={onTakePicture} style={styles.capture}>
            <Text style={styles.buttonText}> Slikaj </Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
      <Toast ref={toastRef} position="bottom" />
    </View>
  );
};

export default Camera;
