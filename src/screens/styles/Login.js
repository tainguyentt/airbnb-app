import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  scrollWrapper: {
    marginTop: 70,
    flex: 1
  },
  scrollView: {
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    flex: 1,
  },
  loginHeader: {
    fontSize: 28,
    color: 'white',
    fontWeight: '300',
    marginBottom: 30,
  },
  nextButton: {
    alignItems: 'flex-end',
    right: 20,
    bottom: 20
  },
  notificationWrapper: {
    position: 'absolute',
    backgroundColor: 'yellow',
    bottom: 0,
    right: 0,
    left: 0
  }
});