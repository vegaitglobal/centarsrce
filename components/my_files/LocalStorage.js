import { Platform } from 'react-native';
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
    .catch(() => {
      alert('Greška prilikom učitavanja spomenara');
    });

