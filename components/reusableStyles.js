import colors from "../helpers/colors";
import { normalize } from "../helpers/sizes";

const headerHeight = 220;

const fontFamily = {
  fontFamily: 'Roboto'
};
const textShadow = {
    textShadowColor: "#000",
    textShadowRadius: 12,
    textShadowOffset: { height: -0.1, width: -0.1 }
  };
const boldText = {
    fontWeight: 'bold',
  };

export default {
  fontFamily: fontFamily,
  // text shadow
  textShadow: textShadow,
  boldText: boldText,

  mainContainer: {
    flex: 1,
    justifyContent: "flex-start"
  },
  header: {
    backgroundColor: "#8d62a6",
    color: "white",
    fontSize: 16,
    padding: 19,
    textAlign: "center"
  },
  title: {
    color: colors.darkPurple,
    fontSize: normalize(22),
    textAlign: "center",
    paddingHorizontal: normalize(24),
    paddingTop: normalize(30)
  },
  body: {
    fontSize: normalize(14),
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(12)
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  image: {
    width: "100%"
  },
  contentContainer: {
    margin: 30
  },
  title: {
    color: "#8d62a6",
    fontSize: 22
  },
  body: {
    fontSize: 14
  },
  listContainer: {
    backgroundColor: "#b298c1"
  },
  buttonStyle: {
    marginHorizontal: 16,
    marginVertical: 26
  }
};
