import { useEffect, useState } from 'react';

import { io } from 'socket.io-client';
import { api } from '../../services/api';
import logoImg from '../../assets/logo.svg';

import styles from './styles.module.scss'

type Message = {
  id: string;
  text: string;
  user: {
    name: string;
    avatar_url: string;
  }
}

const socket = io('http://localhost:4000');

const messageQueue: Message[] = []; 

socket.on('new_message', (newMessage: Message) => {
  messageQueue.push(newMessage)
})


export function MessageList() {

  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    setInterval(() => {
      if(messageQueue.length > 0) {
        setMessages(prevMessage => [
          messageQueue[0],
          prevMessage[0],
          prevMessage[1]
        ].filter(Boolean))
        
        messageQueue.shift();
      }
    }, 3000)
  }, [])
  
  useEffect(() => {
    api.get<Message[]>('messages/last3')
    .then((response) => setMessages(response.data))
  }, [])

  return (
    <div className={styles.messageListWrapper}>
      <img src={logoImg} alt="Logo DoWhile 2021" />

      <ul className={styles.messageList}>
        {messages.map((message) => (
          <li key={message.id} className={styles.message}>
            <p className={styles.messageContent}>{message.text}</p>
            <div className={styles.messageUser}>
              <div className={styles.userImage}>
                <img src={message.user.avatar_url} alt={`Avatar ${message.user.name}`} />
              </div>
              <span>{message.user.name}</span>
            </div>
          </li>
        ))}
      </ul>

    </div>
  )
}