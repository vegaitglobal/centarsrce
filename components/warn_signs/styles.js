import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  bullet: {
    color: colors.darkPurple,
    marginTop: 8,
    marginLeft: 8,
    //paddingHorizontal: normalize(24),
    fontWeight: "bold",
    fontSize: normalize(14)
  },
  bulletText: {
    color: "#111",
    fontWeight: "100"
  },
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
    paddingHorizontal: normalize(24)
  }
};
