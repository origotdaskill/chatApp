import "../styles/auth.css";
import "../styles/chats.css";
import "../styles/index.css";
import { ChatEngineWrapper } from 'react-chat-engine';


import { ContextProvider } from "../context";

export default function App({ Component, pageProps }) {
  return (
    <ChatEngineWrapper>

    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
    </ChatEngineWrapper>

  );
}
