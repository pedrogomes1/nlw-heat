import React from 'react';
import { View } from 'react-native';

import { COLORS } from '../../theme';
import { Button } from '../Button';

export function SignInBox(){
  return (
    <View>
      <Button
        title="ENTRAR COM O GITHUB"
        color={COLORS.BLACK_PRIMARY}
        backgroundColor={COLORS.YELLOW}
        icon="github"
      />
    </View>
  );
}