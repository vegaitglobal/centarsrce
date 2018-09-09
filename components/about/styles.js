import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  body: {
    fontSize: normalize(14),
    //paddingHorizontal: normalize(24),
    paddingVertical: normalize(12)
  },
  innerContent: {
    paddingHorizontal: normalize(24),
    backgroundColor: colors.white,
    flex: 1,
    alignItems: "flex-start"
  },
  infoCon: {
    flexDirection: "row"
  }
};
