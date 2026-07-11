import { Outlet, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import PageLoader from '../components/PageLoader'
import { I18nProvider } from '../lib/i18n/I18nContext'

export const Route = createRootRoute({
  component: RootDocument,
})

function RootDocument() {
  return (
    <I18nProvider>
      <PageLoader />
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <TanStackRouterDevtools />
    </I18nProvider>
  )
}
