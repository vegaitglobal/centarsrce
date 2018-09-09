import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  clickableTextContainer: {
    borderColor: colors.darkPurple,
    borderTopWidth: normalize(2),
    paddingTop: normalize(5),
    marginBottom: normalize(30),
    //marginLeft: normalize(24),
    width: "auto"
  },
  clickableTextText: {
    color: colors.darkPurple
  },

  body: {
    fontSize: normalize(14),
    //paddingHorizontal: normalize(24),
    marginVertical: normalize(12)
  },
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  innerContent: {
    paddingHorizontal: normalize(24),
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "flex-start"
  },
  expandedText: {
    fontSize: normalize(14),
    marginBottom: normalize(12)
  }
};
