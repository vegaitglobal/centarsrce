import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  clickableTextContainer: {
    borderColor: colors.darkPurple,
    borderTopWidth: normalize(2),
    paddingTop: normalize(10),
    marginBottom: normalize(30)
  },
  clickableTextText: {
    color: colors.darkPurple
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
  }
};
