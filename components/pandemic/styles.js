import colors from "../../helpers/colors";
import { normalize } from "../../helpers/sizes";

export default {
  bullet: {
    color: colors.darkPurple,
    fontWeight: "bold",
    fontSize: normalize(14),
  },
  bulletContainer: {
    marginTop: 8,
    marginLeft: 8,
  },
  bulletText: {
    color: "#111",
    fontWeight: "100",
  },
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  paragraph: {
    fontSize: normalize(14),
    paddingVertical: normalize(12),
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  scrollView: {
    paddingHorizontal: normalize(24),
  },
};
