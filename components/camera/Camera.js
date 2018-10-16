import React from "react";
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Toast from 'react-native-easy-toast';
import { moveAttachment, dirHome } from '../my_files/LocalStorage';
import { styles } from './styles';

const moment = require('moment');

export default class Camera extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center', }}>
            <TouchableOpacity
              onPress={this.takePicture}
              style={styles.capture}
            >
              <Text style={styles.buttonText}> Slikaj </Text>
            </TouchableOpacity>
          </View>
        </RNCamera>
        <Toast
          ref="toast"
          position="bottom"
        />
      </View>
    );
  }

  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.camera.pausePreview();
      this.saveImage(data.uri);
    }
  };

  saveImage = async filePath => {
    try {
      // set new image name and filepath
      const newImageName = `${moment().format('DDMMYY_HHmmSSS')}.jpg`;
      const newFilepath = `${dirHome}/${newImageName}`;
      // move and save image to new filepath
      await moveAttachment(filePath, newFilepath);
      this.refs.toast.show('Slika je sačuvana.', 500);
      this.props.navigation.state.params.reloadState();
      this.camera.resumePreview();
    } catch (error) {
      this.refs.toast.show('Greška prilikom čuvanja slike', 500);
    }
  };
}
