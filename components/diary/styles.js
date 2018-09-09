import colors from '../../helpers/colors';

export default {
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    zIndex: 600
  },
  flexContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: colors.white
  },
  navIcon: {
    width: 30,
    height: 30
  },
  markedDate: {
    container: {
      backgroundColor: colors.lightPurple,
      borderRadius: 5
    },
    text: {
      color: 'black',
      fontWeight: 'bold'
    },
  },
  markedToday: {
    container: {
      backgroundColor: colors.darkPurple,
      elevation: 2
    },
    text: {
      color: colors.white,
      fontWeight: 'bold'
    },
  },
  // Copied from SafetyPlan
  inputLabel: {
    fontSize: 16,
    fontWeight: "500",
    margin: 24,
    marginBottom: 10
  },
  inputContainer: {
    backgroundColor: colors.white,
    paddingBottom: 16,
    borderStyle: 'solid',
    borderTopWidth: 1,
    borderTopColor: colors.darkPurple,
  },
  input: {
    backgroundColor: colors.white,
    fontWeight: "500",
    padding: 20,
    paddingBottom: 48
  },
  btnSave: {
    elevation: 2,
    zIndex:500,
    backgroundColor: colors.darkPurple,
    borderRadius: 999,
    padding: 20,
    marginHorizontal: 26,
    marginVertical: 8
  },
  btnSaveText: {
    textAlign: "center",
    color: colors.white,
    fontWeight: "bold",
  }
}
