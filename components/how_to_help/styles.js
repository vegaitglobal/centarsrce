import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  container: {
    flex: 1,
    justifyContent: "space-between"
  },
  body: {
    fontSize: normalize(14),
    paddingHorizontal: normalize(24),
    paddingVertical: normalize(12)
  },
  clickableTextContainer: {
    borderColor: colors.darkPurple,
    borderTopWidth: normalize(2),
    paddingTop: normalize(10),
    marginBottom: normalize(30)
  },
  clickableTextText: {
    color: colors.darkPurple
  }
};
