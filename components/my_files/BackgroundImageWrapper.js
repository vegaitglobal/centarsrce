import React from 'react';
import { ImageBackground, StatusBar } from 'react-native';
import BluredImage from '../../images/bluredWhite75.png';
import { useHeaderHeight } from '@react-navigation/stack';

const BackgroundImageWrapper = ({ height, children }) => {
  const headerHeight = useHeaderHeight();
  return (
    <ImageBackground
      style={[
        {
          marginTop: headerHeight,
          width: '100%',
          backgroundColor: 'transparent',
          height:
            Platform.OS === 'android'
              ? height - headerHeight - 56 - StatusBar.currentHeight
              : height - headerHeight - 56,
        },
      ]}
      source={BluredImage}
    >
      {children}
    </ImageBackground>
  );
};

export default BackgroundImageWrapper;
