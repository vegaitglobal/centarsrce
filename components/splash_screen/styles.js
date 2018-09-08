import reusableStyles from '../reusableStyles';

export default {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bgImage: {
    flex: 1,
    // resizeMode: 'center',
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: 0
  },
  logo: {
    resizeMode: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loadingContainer: {
    margin: 70,
    width: 250,
    borderRadius: 120,
    borderWidth: 2,
  },
  loadingContent: {
    overflow: 'hidden',
    borderRadius: 120,
    padding: 4,
    margin: 2,
  }
}