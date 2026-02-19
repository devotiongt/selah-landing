import { useMemo } from 'react'
import InvitePage from './pages/InvitePage'
import HomePage from './pages/HomePage'

export default function App() {
  const page = useMemo(() => {
    const path = window.location.pathname
    const match = path.match(/^\/c\/(.+)$/i)
    if (match) return { type: 'invite', code: match[1].toUpperCase() }
    return { type: 'home' }
  }, [])

  if (page.type === 'invite') return <InvitePage code={page.code} />
  return <HomePage />
}
