'use client';

import { ModalProvider } from '@/context/ModalContext';
import CallbackModal from '@/components/CallbackModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <CallbackModal />
      <ToastContainer position="bottom-right" theme="light" />
    </ModalProvider>
  );
}
