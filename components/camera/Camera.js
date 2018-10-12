import React from "react";
import { View, StyleSheet, TouchableOpacity, Text, Platform } from 'react-native';
import { RNCamera } from 'react-native-camera';
import CameraRoll from 'react-native-store-photos-album';

const moment = require('moment');
const RNFS = require('react-native-fs');

const dirHome = Platform.select({
  ios: `${RNFS.DocumentDirectoryPath}/CentarSrce`,
  android: `${RNFS.ExternalStorageDirectoryPath}/CentarSrce`
});

const dirPictures = `${dirHome}/Pictures`;

export default class Camera extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            style = {styles.preview}
            type={RNCamera.Constants.Type.back}
            flashMode={RNCamera.Constants.FlashMode.off}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            onGoogleVisionBarcodesDetected={({ barcodes }) => {
              console.log(barcodes)
            }}
        />
        <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center',}}>
        <TouchableOpacity
            onPress={this.takePicture}
            style = {styles.capture}
        >
            <Text style={{fontSize: 14}}> SNAP </Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options)
      CameraRoll.saveToCameraRoll({uri: data.uri, album: 'CentarSrce'}, 'photo')
      this.saveImage(data.uri);
    }
  };

  saveImage = async filePath => {
    try {
      // set new image name and filepath
      const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
      const newFilepath = `${dirPictures}/${newImageName}`;
      // move and save image to new filepath
      const imageMoved = await moveAttachment(filePath, newFilepath);
      console.log('image moved', imageMoved);
    } catch (error) {
      console.log(error);
    }
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: 'center',
    margin: 20
  }
});