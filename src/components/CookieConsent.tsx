import { Cookie } from 'lucide-react'

interface CookieConsentProps {
  onAccept: () => void
  onReject: () => void
}

export default function CookieConsent({
  onAccept,
  onReject,
}: CookieConsentProps) {
  return (
    <section
      aria-label="Cookie consent"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-950/20 sm:inset-x-6 sm:bottom-6 sm:p-6"
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-3">
          <Cookie
            aria-hidden="true"
            className="mt-0.5 shrink-0 text-blue-600"
            size={22}
          />
          <div>
            <h2 className="font-semibold text-slate-900">
              Your privacy matters
            </h2>
            <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
              This site uses Google Analytics to understand visitor traffic.
              Analytics is optional and will only run if you allow it. You can
              change your choice anytime in Cookie settings.
            </p>
          </div>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <button
            className="rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
            type="button"
            onClick={onReject}
          >
            Reject optional
          </button>
          <button
            className="rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
            type="button"
            onClick={onAccept}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </section>
  )
}
