import { Platform, PermissionsAndroid } from 'react-native';
const RNFS = require('react-native-fs');

export const dirHome = Platform.select({
  ios: `${RNFS.DocumentDirectoryPath}/Centar Srce`,
  android: `${RNFS.ExternalStorageDirectoryPath}/Centar Srce`
});

export const copyFile = (filePath, destPath) =>
  RNFS.copyFile(filePath, destPath)


export const moveAttachment = async (filePath, newFilepath) => {
  return new Promise((resolve, reject) => {
    RNFS.mkdir(dirHome)
      .then(() => {
        RNFS.copyFile(filePath, newFilepath)
          .then(() => resolve(true))
          .catch(error => reject(error));
      })
      .catch(err => reject(err));
  });
};

export const read = (path) =>
  RNFS.readDir(path)
    .then((result) => {
      return result;
    })
    .catch((err) => {

        console.log(err)
    });

export const mkDir = () => {
    return RNFS.mkdir(dirHome);
}
// export const requestReadStoragePermission = async () => {
//   try {
//     await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//     )
//   } catch (err) {
//     console.warn(err)
//   }
// }

// export const requestWriteStoragePermission = async () => {
//   try {
//     await PermissionsAndroid.request(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     )
//   } catch (err) {
//     console.warn(err)
//   }
// }

// export const checkStoragePermission = async () => {
//   try {
//     debugger
//     PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
//     ).then((granted) => {
//       debugger
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         await requestReadStoragePermission();
//       }
//     }).catch((err) => { console.log(err) })

//     PermissionsAndroid.check(
//       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
//     ).then((granted) => {
//       debugger
//       if (granted !== PermissionsAndroid.RESULTS.GRANTED) {
//         await requestWriteStoragePermission();
//       }
//     }).then((err) => { console.log(err) })

//   } catch (err) {
//     console.warn(err);
//   }
// }
