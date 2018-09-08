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
  }
}
