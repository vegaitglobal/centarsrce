import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  text: {
    color: colors.darkPurple,
    fontSize: normalize(22),
    textAlign: "center",
    fontWeight: "bold",
    //paddingHorizontal: normalize(24),
    paddingTop: normalize(30)
  },
  textCon: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  }
};
