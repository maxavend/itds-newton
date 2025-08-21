import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { ITDSProvider, arcusTheme } from '@it-ds/ui';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ITDSProvider project="poc" theme={arcusTheme}>
      <App />
    </ITDSProvider>
  </StrictMode>,
);
