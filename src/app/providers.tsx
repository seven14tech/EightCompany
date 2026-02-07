'use client';

import { ModalProvider } from '@/context/ModalContext';
import CallbackModal from '@/components/CallbackModal';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FloatingButton from '@/components/FloatingButton';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ModalProvider>
      {children}
      <CallbackModal />
      <FloatingButton />
      <ToastContainer position="bottom-right" theme="light" />
    </ModalProvider>
  );
}
