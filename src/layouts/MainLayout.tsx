import { useEffect, useState } from 'react'
import { GoogleAnalytics, useGoogleAnalytics } from 'tanstack-router-ga4'
import type { ReactNode } from 'react'

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CookieConsent from '@/components/CookieConsent'

const CONSENT_STORAGE_KEY = 'cookie-consent'

export default function MainLayout({ children }: { children: ReactNode }) {
  const [analyticsConsent, setAnalyticsConsent] = useState<boolean | null>(null)
  const [isConsentOpen, setIsConsentOpen] = useState(false)
  const analytics = useGoogleAnalytics()

  useEffect(() => {
    const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY)
    if (storedConsent === 'accepted' || storedConsent === 'rejected') {
      setAnalyticsConsent(storedConsent === 'accepted')
    } else {
      setIsConsentOpen(true)
    }
  }, [])

  useEffect(() => {
    if (analyticsConsent !== null) {
      analytics.consent('update', {
        analytics_storage: analyticsConsent ? 'granted' : 'denied',
      })
    }
  }, [analytics, analyticsConsent])

  const saveConsent = (accepted: boolean) => {
    window.localStorage.setItem(
      CONSENT_STORAGE_KEY,
      accepted ? 'accepted' : 'rejected',
    )
    setAnalyticsConsent(accepted)
    setIsConsentOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {children}
      </main>

      <Footer onCookieSettings={() => setIsConsentOpen(true)} />
      {analyticsConsent && (
        <GoogleAnalytics
          measurementId={import.meta.env.VITE_GOOGLE_ANALYTICS_MEASUREMENT_ID}
          consentDefaults={{
            analytics_storage: 'granted',
          }}
        />
      )}
      {isConsentOpen && (
        <CookieConsent
          onAccept={() => saveConsent(true)}
          onReject={() => saveConsent(false)}
        />
      )}
    </div>
  );
}
