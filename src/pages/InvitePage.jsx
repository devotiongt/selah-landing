import { useState } from 'react'
import './InvitePage.css'

export default function InvitePage({ code }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="invite">
      <div className="invite-content">
        <div className="invite-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3D8A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>

        <h1>Selah</h1>
        <p className="subtitle">Te han invitado a una comunidad</p>

        <div className="code-box">
          <span className="code-label">Tu codigo de invitacion</span>
          <span className="code-value">{code}</span>
          <button className="copy-btn" onClick={handleCopy}>
            {copied ? 'Copiado' : 'Copiar codigo'}
          </button>
        </div>

        <div className="steps">
          <h3>Como unirte</h3>
          <ol>
            <li>Descarga <strong>Selah</strong> en tu telefono</li>
            <li>Crea una cuenta o inicia sesion</li>
            <li>Toca <strong>"Unirse a comunidad"</strong></li>
            <li>Ingresa el codigo: <strong>{code}</strong></li>
          </ol>
        </div>

        <div className="download-section">
          <span className="badge">Proximamente en App Store</span>
          <span className="badge">Proximamente en Google Play</span>
        </div>

        <p className="footer-text">
          <a href="/">Selah</a> — Un proyecto de{' '}
          <a href="https://devotiongt.org" target="_blank" rel="noopener noreferrer">Devotion</a>
        </p>
      </div>
    </div>
  )
}
