import './HomePage.css'

export default function HomePage() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-icon">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3D8A5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h1>Selah</h1>
        <p className="tagline">Creciendo juntos en fe</p>
        <p className="description">
          Una app para tu comunidad de fe. Comparte devocionales,
          registra actividades y crece junto a tu iglesia.
        </p>
        <div className="badges">
          <span className="badge coming-soon">Proximamente en App Store</span>
          <span className="badge coming-soon">Proximamente en Google Play</span>
        </div>
        <p className="footer-text">
          Un proyecto de <a href="https://devotiongt.org" target="_blank" rel="noopener noreferrer">Devotion</a>
        </p>
      </div>
    </div>
  )
}
