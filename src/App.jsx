import { Toaster } from "@/components/ui/toaster"
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClientInstance } from '@/lib/query-client'
import Home from '@/pages/Home';

// NOTE: react-router-dom's BrowserRouter was removed on purpose.
// This is a single-page site (only "Home" is ever rendered), and
// BrowserRouter matches routes against window.location.pathname —
// which is the full file path (e.g. "/C:/Users/.../index.html") when
// opened via file://, so it never matched "/" and always fell through
// to the 404 page. Since the nav links are plain "#anchor" tags (not
// <Link>), removing the router doesn't lose any navigation behavior,
// and smooth scrolling is already handled by CSS (scroll-behavior:
// smooth in index.css).
function App() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <Home />
      <Toaster />
    </QueryClientProvider>
  )
}

export default App
