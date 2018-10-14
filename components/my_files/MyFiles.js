import React from "react";
import {
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { DocumentPicker, DocumentPickerUtil } from 'react-native-document-picker';
import ArticleTitle from "../article_title/ArticleTitle";
import Footer from "../footer/Footer";
import styles from "./styles";
import { read, moveAttachment, dirHome } from "./LocalStorage";

export default class MyFiles extends React.Component {
  static navigationOptions = {
    title: "Moj spomenar"
  };

  constructor(props) {
    super(props);
    this.state = {
      seeingMore: false,
      files: [],
    };
    this.toggleSeeingMore = this.toggleSeeingMore.bind(this);
  }

  componentDidMount() {
    this.reloadState();
  }

  reloadState = () => {
    this.setState({ files: []})
    read(dirHome)
      .then((files) => {
        this.mapFilesToState(files);
      })
      .catch(() => alert('Greška pilikom učitavanja spomenara.'));
  }

  mapFilesToState = (files) => {
    files.map((file) => {
      if (file.isFile()) {
        const type = this.getType(file.name);
        if (type !== '') {
          this.addFileToState(file.path, file.name, type);
        }
      }
    });
  }

  addFileToState = (path, name, type) => {
    const newVal = [{ path: path, name: name, type: type }];
    this.setState({ files: newVal.concat(this.state.files) });
  }

  getExtension = (name) => {
    const splitName = name.split('.');
    return  splitName[splitName.length - 1];
  }

  isImage = (ext) => ext === 'jpg' || ext === 'png' || ext === 'gif' || ext === 'jpeg';
  isPdf = (ext) => ext === 'pdf';
  isWord = (ext) => ext === 'doc' || ext === 'docx';
  isPowerPoint = (ext) => ext === 'ppt' || ext === 'pptx';
  isText = (ext) => ext === 'txt';

  //possible types: image, pdf, doc, ppt, txt or empty string which means it is invalid format
  getType = (fileName) => {
    const ext = this.getExtension(fileName);
    return this.isImage(ext) ? 'image' : this.isPdf(ext) ? 'pdf' : this.isWord(ext) ? 'doc' : this.isPowerPoint(ext) ? 'ppt' : this.isText(ext) ? 'txt' : '';
  }

  addFile = (res) => {
    const destinationDir = dirHome; // destination image or document
    const destinationPath = `${destinationDir}/${res.fileName}`;
    const type = this.getType(res.fileName);
    if (type !== '') {
      moveAttachment(res.uri, destinationPath) // copying attachment
        .then(() => {
          this.addFileToState(destinationPath, res.fileName, type);
        })
        .catch((err) => console.log(err));
    }
  }

  getImageSource = (type) => type === 'pdf' ? styles.pdf : type === 'doc' ? styles.word : type === 'ppt' ? styles.ppt : styles.text;

  onCameraPress = () => {
    this.toggleSeeingMore();
    this.props.navigation.navigate("Camera", { reloadState: () => this.reloadState() });
  }

  toggleSeeingMore() {
    this.setState({ seeingMore: !this.state.seeingMore });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContentContainer}>
          <ArticleTitle label="Sačuvaj sve bitne dokumente" />
          <Text style={styles.body}>
            Ovo je deo u kom možeš sačuvati sebi značajne fotografije, članke
            ili druge bitne dokumente.
          </Text>
          {this.state.files ? this.state.files.map((file, i) =>
            <TouchableOpacity
              key={i}
              style={styles.imageContainer}
            > 
              {file.type === 'image' ?
                <Image
                  source={{ uri:`file://${file.path}` }}
                  style={styles.image}
                />
                : 
                <View style={this.getImageSource(file.type)}>
                  <Text style={[styles.documentTitle, { color: file.type === 'txt' ? 'black' : 'white'}]}>{file.type}</Text>
                  <Text numberOfLines={1} style={[styles.documentName, { color: file.type === 'txt' ? 'black' : 'white'}]} >{file.name}</Text>
                </View>
              }
            </TouchableOpacity>
            )
            : null
          }
        </ScrollView>
        {!this.state.seeingMore && <View />}
        {this.state.seeingMore && (
          <View>
            <TouchableOpacity
              style={styles.photoImgCon}
              onPress={this.onCameraPress}
            >
              <Image
                style={styles.photo}
                source={require("../../images/photo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.attachImgCon}
              onPress={() => {
                this.toggleSeeingMore();
                DocumentPicker.show({
                  filetype: [DocumentPickerUtil.allFiles()],
                },(error, res) => {
                  if (res) {
                    this.addFile(res);
                  } else {
                    alert('Falied to add file.')
                  }
                }
              )}}
              >
              <Image
                style={styles.attach}
                source={require("../../images/attach.png")}
              />
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={styles.plusImgCon}
          onPress={this.toggleSeeingMore}
        >
          <Image
            style={styles.plusImg}
            source={require("../../images/plus.png")}
          />
        </TouchableOpacity>
        <Footer />
      </View>
    );
  }
}
