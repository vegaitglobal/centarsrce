import { normalize } from "../../helpers/sizes";

export default {
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  body: {
    fontSize: normalize(14),
    //paddingHorizontal: normalize(24),
    paddingVertical: normalize(12)
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
    paddingHorizontal: normalize(24)
  },

  photo: {
    height: 60,
    width: 160
  },
  attach: {
    height: 60,
    width: 215
  }
};
