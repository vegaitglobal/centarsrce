import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Modal,
  ImageBackground,
  Dimensions,
  StatusBar,
  Platform,
} from 'react-native';
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import Toast from 'react-native-easy-toast';
import { Header } from 'react-navigation';
import ArticleTitle from '../article_title/ArticleTitle';
import Footer from '../footer/Footer';
import styles from './styles';
import { read, moveAttachment, dirHome, mkDir, askPermissions } from './LocalStorage';
import FileViewer from 'react-native-file-viewer';

export default class MyFiles extends React.Component {
  static navigationOptions = {
    title: 'Moj spomenar',
  };

  constructor (props) {
    super (props);
    const {width, height} = Dimensions.get ('window');
    this.state = {
      seeingMore: false,
      files: [],
      modalVisible: false,
      modalImagePath: '',
      width: width,
      height: height,
      filePath: '',
      openFile: '',
      enabledStoragePermission: false,
    };
    this.toggleSeeingMore = this.toggleSeeingMore.bind (this);
  }

  componentDidMount () {
    mkDir()
      .then (() => {
        this.reloadState();
      })
      .catch(() => {
        this.refs.toast.show(
          'Greška prilikom kreiranja direktorijuma spomenara. Proverite da li aplikacija poseduje dozvolu za skladištenje.',
          3000
        );
      });
  }

  onLayout () {
    const {width, height} = Dimensions.get ('window');
    this.setState ({width: width, height: height});
  }

  reloadState = () => {
    this.setState({files: []});
    read(dirHome)
      .then(files => {
        this.mapFilesToState(files);
      })
      .catch(() => {
        this.refs.toast.show(
          'Greška prilikom učitavanja spomenara. Proverite da li aplikacija poseduje dozvolu za skladištenje.',
          3000
        );
      });
  };

  mapFilesToState = files => {
    files.map(file => {
      if (file.isFile()) {
        const type = this.getType(file.name);
        if (type !== '') {
          this.addFileToState(file.path, file.name, type);
        }
      }
    });
  };

  addFileToState = (path, name, type) => {
    const newVal = [{path: path, name: name, type: type}];
    this.setState({files: newVal.concat(this.state.files)});
  };

  getExtension = name => {
    const splitName = name.split ('.');
    return splitName[splitName.length - 1];
  };

  isImage = ext =>
    ext === 'jpg' || ext === 'png' || ext === 'gif' || ext === 'jpeg';
  isPdf = ext => ext === 'pdf';
  isWord = ext => ext === 'doc' || ext === 'docx';
  isPowerPoint = ext => ext === 'ppt' || ext === 'pptx';
  isText = ext => ext === 'txt';

  //possible types: image, pdf, doc, ppt, txt or empty string which means it is invalid format
  getType = fileName => {
    const ext = this.getExtension(fileName).toLowerCase();
    return this.isImage(ext)
      ? 'image'
      : this.isPdf(ext)
          ? 'pdf'
          : this.isWord(ext)
              ? 'doc'
              : this.isPowerPoint(ext)
                  ? 'ppt'
                  : this.isText(ext) ? 'txt' : '';
  };

  addFile = res => {
    const destinationDir = dirHome; // destination image or document
    const destinationPath = `${destinationDir}/${res.fileName}`;
    const type = this.getType(res.fileName);
    if (type !== '') {
      moveAttachment(res.uri, destinationPath) // copying attachment
        .then (res => {
          this.addFileToState(destinationPath, res.fileName, type);
        })
        .catch (() =>
          this.refs.toast.show(
            'Greška prilikom dodavanja u spomenar. Proverite da li aplikacija poseduje dozvolu za skladištenje.',
            3000
          )
        );
    }
  };

  getImageSource = type =>
    type === 'pdf'
      ? styles.pdf
      : type === 'doc'
          ? styles.word
          : type === 'ppt' ? styles.ppt : styles.text;

  onCameraPress = () => {
    this.toggleSeeingMore();
    this.props.navigation.navigate('Camera', {
      reloadState: () => this.reloadState(),
    });
  };

  toggleSeeingMore() {
    this.setState({seeingMore: !this.state.seeingMore});
  }

  setModalVisible(visible, path) {
    this.setState({modalVisible: visible, modalImagePath: path});
  }

  render () {
    return (
      <View style={styles.container} onLayout={this.onLayout.bind (this)}>
        <Toast ref="toast" position="center" style={{ marginHorizontal: 10 }} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.scrollViewContentContainer}
        >
          <ArticleTitle label="Sačuvaj sve bitne dokumente" />
          <Text style={styles.body}>
            Ovo je deo u kom možeš sačuvati sebi značajne fotografije, članke
            ili druge bitne dokumente.
          </Text>
          {this.state.files
            ? this.state.files.map((file, i) => (
                <TouchableOpacity
                  key={i}
                  style={{
                    width: this.state.width * 0.25,
                    height: this.state.width * 0.25,
                    margin: this.state.width * 0.015,
                  }}
                  onPress={() =>
                    file.type === 'image'
                      ? this.setModalVisible (true, file.path)
                      : FileViewer.open(file.path)
                        .catch(error => {
                          console.log (error);
                        })}
                >
                  {file.type === 'image'
                    ? <Image
                        source={{uri: `file://${file.path}`}}
                        style={[styles.image, { resizeMode: 'contain' }]}
                      />
                    : <View style={this.getImageSource(file.type)}>
                        <Text
                          style={[
                            styles.documentTitle,
                            {color: file.type === 'txt' ? 'black' : 'white'},
                          ]}
                        >
                          {file.type}
                        </Text>
                        <Text
                          numberOfLines={1}
                          style={[
                            styles.documentName,
                            {color: file.type === 'txt' ? 'black' : 'white'},
                          ]}
                        >
                          {file.name}
                        </Text>
                      </View>}
                </TouchableOpacity>
              ))
            : null}
        </ScrollView>
        {!this.state.seeingMore && <View />}
        {this.state.seeingMore &&
          <View>
            <TouchableOpacity
              style={styles.photoImgCon}
              onPress={this.onCameraPress}
            >
              <Image
                style={styles.photo}
                source={require('../../images/photo-white.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attachImgCon}
              onPress={() => {
                this.toggleSeeingMore ();
                DocumentPicker.show (
                  {
                    filetype: [DocumentPickerUtil.allFiles ()],
                  },
                  (error, res) => {
                    if (res) {
                      this.addFile(res);
                    }
                  }
                );
              }}
            >
              <Image
                style={styles.attach}
                source={require('../../images/attach-white.png')}
              />
            </TouchableOpacity>
          </View>}
        <TouchableOpacity
          style={styles.plusImgCon}
          onPress={this.toggleSeeingMore}
        >
          <Image
            style={styles.plusImg}
            source={require('../../images/plus.png')}
          />
        </TouchableOpacity>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {}}
          animationType="slide"
        >
          <TouchableOpacity onPress={() => this.setModalVisible(false, '')}>
            <ImageBackground
              style={[
                styles.backgroundImage,
                {
                  height: Platform.OS === 'android' ? this.state.height -
                    Header.HEIGHT -
                    56 -
                    StatusBar.currentHeight 
                    : this.state.height -
                    Header.HEIGHT - 56
                },
              ]}
              source={require('../../images/bluredWhite75.png')}
            >
              <View style={styles.imagePreview}>
                <Image
                  style={{flex: 1, height: undefined, width: undefined}}
                  source={{uri: `file://${this.state.modalImagePath}`}}
                  resizeMode="contain"
                />
              </View>
            </ImageBackground>
          </TouchableOpacity>
        </Modal>
        <Footer />
      </View>
    );
  }
}
