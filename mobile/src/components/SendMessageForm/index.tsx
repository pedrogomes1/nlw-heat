import React, { useState } from 'react';

import {
  Alert,
  Keyboard,
  TextInput,
  View
} from 'react-native';
import { api } from '../../services/api';
import { COLORS } from '../../theme';
import { Button } from '../Button';

import { styles } from './styles';

export function SendMessageForm() {

  const [message, setMessage] = useState('');
  const [sendingMessage, setSendingMessage] = useState(false);

  async function handleMessageSubmit() {
    const messageFormatted = message.trim();

    if (!messageFormatted) {
      return Alert.alert('Escreva a mensagem para enviar!')
    }

    setSendingMessage(true);

    try {
      await api.post('/messages', { message: messageFormatted });
      setMessage('');
      Keyboard.dismiss();
      Alert.alert('Mensagem enviada com sucesso!')
    } catch (error) {
      Alert.alert(`Erro ao enviar a mensagem!, ${error}`)
    } finally {
      setSendingMessage(false);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput
        keyboardAppearance="dark"
        placeholder="Qual sua expectativa para o evento?"
        placeholderTextColor={COLORS.GRAY_PRIMARY}
        multiline
        maxLength={140}
        onChangeText={setMessage}
        value={message}
        editable={!sendingMessage}
        style={styles.input}
      />

      <Button
        title="ENVIAR MENSAGEM"
        backgroundColor={COLORS.PINK}
        color={COLORS.WHITE}
        onPress={handleMessageSubmit}
        isLoading={sendingMessage}
      />
    </View>
  );
}