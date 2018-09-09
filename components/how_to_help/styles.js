import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "flex-start"
  },
  body: {
    fontSize: normalize(14),
    //paddingHorizontal: normalize(24),
    marginVertical: normalize(12)
  },
  clickableTextContainer: {
    borderColor: colors.darkPurple,
    borderTopWidth: normalize(2),
    paddingTop: normalize(5),
    marginBottom: normalize(30)
  },
  clickableTextText: {
    color: colors.darkPurple
  },
  innerContent: {
    backgroundColor: colors.white,
    paddingHorizontal: normalize(24),
    alignItems: "flex-start"
  }
};
