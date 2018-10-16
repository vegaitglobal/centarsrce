import { Header } from "react-navigation";
import { normalize } from "../../helpers/sizes";

export default {
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  body: {
    fontSize: normalize(14),
    //paddingHorizontal: normalize(24),
    paddingVertical: normalize(12),
    marginBottom: 40,
  },
  scrollView: {
    backgroundColor: "#fff"
  },
  filesCon: {
    height: 200,
    width: 200
  },
  plusImg: {
    //position: "absolute",
    //bottom: 75,
    //right: 20,
    height: 75,
    width: 75
  },
  plusImgCon: {
    position: "absolute",
    bottom: 74,
    right: 20
    //height: 65,
    //width: 65
  },
  attachImgCon: {
    position: "absolute",
    bottom: 90,
    right: 27
    //height: 65,
    //width: 65
  },
  photoImgCon: {
    position: "absolute",
    bottom: 140,
    right: 27
    //height: 65,
    //width: 65
  },
  scrollView: {
    paddingHorizontal: normalize(24),
  },
  scrollViewContentContainer: {
    flexDirection: "row",
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  photo: {
    height: 60,
    width: 160
  },
  attach: {
    height: 60,
    width: 215
  },
  image: {
    height: '100%',
    width: '100%',
  },
  pdf: {
    backgroundColor: 'red',
    height: '100%',
    width: '100%',
  },
  word: {
    backgroundColor: '#1097FF',
    height: '100%',
    width: '100%',
  },
  text: {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
  },
  ppt: {
    height: '100%',
    width: '100%',
    backgroundColor: 'orange',
  },
  documentName: {
    position: 'absolute',
    bottom: normalize(5),
    left: normalize(5),
    right: normalize(5),
    fontSize: normalize(12),
  },
  documentTitle: {
    position: 'absolute',
    top: normalize(20),
    alignSelf: 'center',
    fontSize: normalize(20),
  },
  backgroundImage: {
    marginTop: Header.HEIGHT,
    width: '100%',
    backgroundColor: 'transparent'
  },
  imagePreview: {
    height: '80%',
    width: '80%',
    marginHorizontal: '10%',
    marginTop: 10
  }
};
