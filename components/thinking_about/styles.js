import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  clickableTextContainer: {
    borderColor: colors.darkPurple,
    borderTopWidth: normalize(2),
    paddingTop: normalize(5),
    marginBottom: normalize(30),
    marginLeft: normalize(24),
    width: "auto"
  },
  clickableTextText: {
    color: colors.darkPurple
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
  innerContent: {
    //paddingHorizontal: normalize(24),
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "flex-start"
  },
  mark: {
    flex: 1,
    marginLeft: "auto",
    marginRight: "auto"
  },
  markCon: {
    backgroundColor: colors.darkPurpleTransparent
  },
  quotedText: {
    color: colors.darkPurple,
    fontSize: normalize(14),
    paddingHorizontal: normalize(24),
    fontStyle: "italic",
    fontWeight: "500",
    textAlign: "center"
  },
  bullet: {
    color: colors.lightPurple,
    marginLeft: 8,
    paddingHorizontal: normalize(24),
    fontWeight: "bold"
  },
  bulletText: {
    color: "#111"
  }
};
