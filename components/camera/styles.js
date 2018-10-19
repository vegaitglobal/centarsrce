import { StyleSheet } from 'react-native';
import colors from '../../helpers/colors';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: 'black'
    },
    cameraButton: {
      flex: 0,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: colors.darkPurple,
      borderRadius: 5,
      padding: 15,
      paddingHorizontal: 20,
      alignSelf: 'center',
      margin: 20
    },
    buttonText: {
      fontSize: 14,
      color: 'white'
    },
  });