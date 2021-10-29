import { StyleSheet } from 'react-native';
import { FONTS } from '../../theme';

export const styles = StyleSheet.create({
  button: {
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    fontSize: 14,
    fontFamily: FONTS.BOLD,
  },
  icon: {
    marginRight: 12
  }
});