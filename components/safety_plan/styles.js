import { StyleSheet } from "react-native";
import colors from "../../helpers/colors";

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: colors.white
  },
  headerText: {
    color: colors.darkPurple,
    fontSize: 22,
    fontWeight: "500",
    margin: 30,
    marginBottom: 6
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    margin: 24,
    marginBottom: 10
  },
  inputContainer: {
    backgroundColor: colors.darkPurple, // TODO
    elevation: 8,
    marginHorizontal: 24
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 4,
    fontWeight: "500",
    padding: 20
  }
});

export default styles;
