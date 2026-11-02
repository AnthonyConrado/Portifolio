import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { A11yProvider } from './hooks/useA11y';
import { ToastProvider } from './hooks/useToast';
import './styles/global.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <A11yProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </A11yProvider>
  </StrictMode>,
);
