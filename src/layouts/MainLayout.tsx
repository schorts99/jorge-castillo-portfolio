import { ReactNode } from 'react'

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {children}
      </main>

      <Footer />
    </div>
  );
}
