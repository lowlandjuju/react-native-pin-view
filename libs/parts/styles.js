import { StyleSheet, Dimensions } from 'react-native'

const win = Dimensions.get('window');

export default StyleSheet.create({
  //passwordInputView
  passwordInputView          : {
    flexDirection: 'row',
    alignSelf    : 'center',
  },
  passwordInputViewItem      : {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 30,
    margin         : 5,
    width          : 30,
    borderRadius   : 30 / 2,
  },
  passwordInputViewItemActive: {
    alignItems     : 'center',
    justifyContent : 'center',
    height         : 30,
    width          : 30,
    margin         : 5,
    borderRadius   : 30 / 2,
  },
  // KeyboardView
  keyboardView               : {
    alignItems: 'center',
    marginTop : 20
  },
  keyboardViewItem           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : 50,
    width           : 50,
    marginHorizontal: 10,
    marginVertical  : 5,
    borderRadius    : 50 / 2,
  },
  keyboardViewItemResponsive           : {
    alignItems      : 'center',
    justifyContent  : 'center',
    height          : Math.floor(win.height / 12),
    width           : Math.floor(win.height / 12),
    marginHorizontal: 10,
    marginVertical  : 5,
    borderRadius    : Math.floor(win.height / 12) / 2,
  },
  keyboardViewItemText       : {
    fontSize  : 18,
    fontWeight: '900',
  },
})