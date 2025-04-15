// src/app/_app.tsx
import '../styles/globals.css'; // Import Tailwind CSS
import { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default App;