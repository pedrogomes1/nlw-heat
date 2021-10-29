import React from 'react';

import {
  Text,
  View
} from 'react-native';
import { UserPhoto } from '../UserPhoto';

import { styles } from './styles';

export function Message(){
  return (
    <View style={styles.container}>
      <Text style={styles.message}>
        Texto da mensagem
      </Text>

      <View style={styles.footer}>
        <UserPhoto
          imageUri="https://github.com/PedroGomes1.png"
          sizes="SMALL"
         />

        <Text style={styles.username}>
          Pedro Gomes
        </Text>
      </View>
    </View>
  );
}