import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { ClerkProvider } from '@clerk/clerk-react';


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
console.log("CLERK KEY:", PUBLISHABLE_KEY);

if(!PUBLISHABLE_KEY) {
  throw new Error('VITE_CLERK_PUBLISHABLE_KEY is not defined. Please set it in your .env file.');
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <App />
    </ClerkProvider>}
  </React.StrictMode>,
);
