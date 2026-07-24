import { useEffect, useState } from 'react'
import './App.css'
import agusegproLogo from './assets/logo_agusepro.png'
import foto_jorge from './assets/foto_jorge.jpeg'

const NAV_SECTIONS = ['inicio', 'servicios', 'experiencia', 'certificaciones', 'contacto']

// TODO: coloca tu foto en src/assets (por ejemplo "perfil.jpg"), impórtala aquí
// y pásala como prop `src` a <HeroImage /> más abajo para reemplazar el espacio reservado.
// import perfilImg from './assets/perfil.jpg'

// TODO: reemplaza este enlace por el link real de descarga de tu currículum (PDF).
const CV_URL = '#'

function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ShieldCheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5l-8-3Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m9 12 2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}

function HandshakeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M8 12 3 9v6l5 3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m8 12 3.5-2 3 2 3.5-2 3 2v4l-4 3-2.5-2-2.5 2-4-3v-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MedalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="15" r="6" />
      <path d="M9 10 6 3M15 10l3-7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12v6" strokeLinecap="round" />
    </svg>
  )
}

function GraduationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="m2 8 10-5 10 5-10 5-10-5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 10.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-5.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 3v12m0 0-4-4m4 4 4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 5h18v14H3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="m3 6 9 7 9-7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CloseIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function HeroImage({ src }) {
  return (
    <div className="hero-image-wrap">
      {src ? (
        <img src={src} alt="Foto de perfil" />
      ) : (
        <div className="hero-image-placeholder">
          Coloca aquí tu foto
          <br />
          (src/assets → prop `src` de HeroImage)
        </div>
      )}
    </div>
  )
}

function CertBadge({ src }) {
  return (
    <div className="cert-badge-wrap">
      {src ? (
        <img src={src} alt="Insignia de certificación" />
      ) : (
        <div className="cert-badge-placeholder">
          <ShieldCheckIcon />
          Coloca aquí tu logo o insignia
          <br />
          (src/assets → prop `src` de CertBadge)
        </div>
      )}
    </div>
  )
}

function App() {
  const [activeSection, setActiveSection] = useState('inicio')
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = NAV_SECTIONS
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (visible) setActiveSection(visible.target.id)
      },
      { rootMargin: '-72px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <header className={scrolled ? 'navbar scrolled' : 'navbar'}>
        <div className="container">
          <span className="logo">Jorge Eduardo Delgado Rodríguez</span>
          <ul className={menuOpen ? 'nav-links open' : 'nav-links'}>
            <li><a href="#inicio" className={activeSection === 'inicio' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Inicio</a></li>
            <li><a href="#servicios" className={activeSection === 'servicios' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Servicios</a></li>
            <li><a href="#experiencia" className={activeSection === 'experiencia' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Experiencia</a></li>
            <li><a href="#certificaciones" className={activeSection === 'certificaciones' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Certificaciones</a></li>
            <li><a href="#contacto" className={activeSection === 'contacto' ? 'active' : ''} onClick={() => setMenuOpen(false)}>Contacto</a></li>
          </ul>
          <a href="#contacto" className="btn btn-primary">Solicitar Cotización</a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <section id="inicio" className="hero-section">
        <div className="container">
          <div className="hero-copy">
            <span className="hero-badge">
              <ShieldIcon />
              PROTECCIÓN CORPORATIVA
            </span>
            <h1>Seguridad y Confianza en Cada Turno.</h1>
            <p>
              Protegiendo activos vitales y asegurando la tranquilidad de su entorno
              corporativo mediante vigilancia preventiva, respuesta táctica y un
              compromiso inquebrantable con la excelencia operativa.
            </p>
            <div className="hero-actions">
              <a href={CV_URL} download className="btn btn-primary">
                Ver Currículum <DownloadIcon />
              </a>
              <a href="#servicios" className="btn btn-outline">Conocer Servicios</a>
            </div>
          </div>
          <HeroImage src={foto_jorge} />
        </div>
      </section>

      <section id="servicios" className="about-section">
        <div className="container">
          <div className="about-copy">
            <h2 className="section-title">Sobre Mí</h2>
            <div className="section-underline" />
            <p>
              Un profesional dedicado con formación especializada en gestión de
              crisis y prevención de riesgos. Mi enfoque se centra en la disuasión
              pasiva y la resolución pacífica, garantizando un entorno seguro sin
              alterar la operativa diaria de su empresa.
            </p>
          </div>
          <div className="about-cards">
            <div className="card accent">
              <div className="card-icon"><ShieldCheckIcon /></div>
              <h3>Cumplimiento Normativo</h3>
              <p>Estricto apego a protocolos de seguridad y normativas legales vigentes.</p>
            </div>
            <div className="card">
              <div className="card-icon"><EyeIcon /></div>
              <h3>Vigilancia Táctica</h3>
              <p>Monitoreo constante y evaluación proactiva de posibles vulnerabilidades.</p>
            </div>
            <div className="card">
              <div className="card-icon"><HandshakeIcon /></div>
              <h3>Resolución de Conflictos</h3>
              <p>Técnicas avanzadas de de-escalación y mediación en situaciones de tensión.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="achievements-section">
        <div className="container">
          <h2 className="section-title">Logros Destacados</h2>
          <p className="achievements-subtitle">
            El historial que respalda la confianza de nuestros clientes corporativos
            más exigentes.
          </p>
          <div className="achievements-grid">
            <div className="stat-card dark">
              <div className="stat-icon"><MedalIcon /></div>
              <div className="stat-value">3+</div>
              <div className="stat-label">AÑOS DE SERVICIO</div>
              <p className="stat-desc">
                Experiencia comprobada en entornos corporativos de alta exigencia.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><ShieldCheckIcon /></div>
              <div className="stat-value">0</div>
              <div className="stat-label">BRECHAS CRÍTICAS</div>
              <p className="stat-desc">
                Mantenimiento de integridad total en instalaciones asignadas durante
                la última década.
              </p>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><GraduationIcon /></div>
              <div className="stat-value">Nivel 1</div>
              <div className="stat-label">CERTIFICACIÓN TÁCTICA</div>
              <p className="stat-desc">
                Acreditación avanzada en primeros auxilios, control de masas y
                protocolos de evacuación.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="trayectoria" className="trajectory-section">
        <div className="container">
          <h2 className="section-title">Trayectoria y Formación</h2>
          <div className="section-underline" />
          <div className="trajectory-grid">
            <div className="trajectory-col">
              <h3 className="col-heading">Experiencia Laboral</h3>
              <ul className="timeline">
                <li>
                  <span className="timeline-period">2025 – Actualidad</span>
                  <h4>Agente de Seguridad — Agusegpro Cía. Ltda.</h4>
                  <p>Vigilancia y protección de instalaciones bajo modalidad fija, con certificación Nivel 1 avalada por el Ministerio del Interior.</p>
                </li>
                <li>
                  <span className="timeline-period">Ago – Oct 2024</span>
                  <h4>Cajero — Transferunion / Western Union</h4>
                  <p>Entrega y custodia de efectivo, giros y documentos de valor; recaudación de ingresos y cancelación de pagos en caja.</p>
                </li>
                <li>
                  <span className="timeline-period">May – Oct 2023</span>
                  <h4>Capacitador — Consultora Liderar (Wilmer Romero Rodríguez)</h4>
                  <p>Contrato con el Ministerio de la Mujer y Derechos Humanos, a cargo de talleres de capacitación.</p>
                </li>
                <li>
                  <span className="timeline-period">2023</span>
                  <h4>Facilitador y Logística — Ministerio de la Mujer y Derechos Humanos</h4>
                  <p>Subsecretaría de Diversidades. Taller de sensibilización sobre prevención de violencia y discriminación por orientación sexual, identidad y expresión de género hacia la población LGBTI+ a nivel nacional.</p>
                </li>
                <li>
                  <span className="timeline-period">2021 – 2022</span>
                  <h4>Facilitador — Movimiento Mi Cometa (proyecto AUF)</h4>
                  <p>Programa "Adopta una familia": sensibilización a grupos vulnerables sobre derechos humanos y derechos constitucionales.</p>
                </li>
                <li>
                  <span className="timeline-period">2019 – 2022</span>
                  <h4>Facilitador — Fundación Espíritu Solidario</h4>
                  <p>Talleres de participación ciudadana, planificación, respeto a los Derechos Humanos y a las diversidades, liderazgo y promoción de los derechos de niños, niñas y adolescentes.</p>
                </li>
                <li>
                  <span className="timeline-period">May 2019 – Dic 2022</span>
                  <h4>Asistente y Capacitador — Consultora Liderar</h4>
                  <p>Funciones de asistencia, capacitación y manejo de recursos TIC.</p>
                </li>
                <li>
                  <span className="timeline-period">Verano 2021</span>
                  <h4>Bodeguero y Atención al Cliente</h4>
                  <p>Recepción y despacho de mercadería, atención al cliente y revisión de bodega.</p>
                </li>
                <li>
                  <span className="timeline-period">—</span>
                  <h4>Mesero — Restaurante Albar (Alaire)</h4>
                  <p>Atención al cliente, despacho de órdenes y atención de mesas en diferentes áreas.</p>
                </li>
              </ul>
            </div>
            <div className="trajectory-col">
              <h3 className="col-heading">Formación Académica</h3>
              <ul className="timeline">
                <li>
                  <h4>Bachiller en Ciencias</h4>
                  <p>Unidad Educativa Fiscal Vicente Rocafuerte</p>
                </li>
                <li>
                  <h4>Educación Primaria</h4>
                  <p>Escuela Particular Mixta "Nuestro Ideal"</p>
                </li>
              </ul>
              <h3 className="col-heading col-heading-spaced">Cursos</h3>
              <ul className="timeline">
                <li>
                  <span className="timeline-period">2019</span>
                  <h4>Capacitación en Habilidades Productivas</h4>
                  <p>GAD Parroquial Rural Posorja</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="certificaciones" className="certifications-section">
        <div className="container">
          <h2 className="section-title">Certificaciones</h2>
          <div className="section-underline" />
          <div className="certifications-grid">
            <CertBadge src={agusegproLogo} />
            <div className="cert-card">
              <h3>Agente de Seguridad Certificado</h3>
              <p className="cert-issuer">Ministerio del Interior — CENCAPIT Cía. Ltda. (Centro de Capacitación Integral)</p>
              <ul className="cert-details">
                <li><strong>Acuerdo Ministerial:</strong> N.º 2262</li>
                <li><strong>Nivel:</strong> 1 — Modalidad Fija</li>
                <li><strong>Empresa:</strong> Agusegpro Cía. Ltda. — Seguridad &amp; Protección</li>
                <li><strong>Vigencia:</strong> 17/06/2025 – 11/07/2027</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contacto</h2>
          <div className="section-underline" />
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon"><PinIcon /></span>
              Guayaquil, Ecuador
            </div>
            <div className="contact-item">
              <span className="contact-icon"><PhoneIcon /></span>
              <a href="tel:+593997323119">0997323119</a>
            </div>
            <div className="contact-item">
              <span className="contact-icon"><MailIcon /></span>
              <a href="mailto:jorge.delgadorodriguezvr@gmail.com">jorge.delgadorodriguezvr@gmail.com</a>
            </div>
          </div>

          <div className="references">
            <h3 className="col-heading">Referencias Personales</h3>
            <div className="references-grid">
              <div className="reference-card">
                <div className="reference-avatar">VE</div>
                <strong className="reference-name">Lcda. Vannessa Espinoza</strong>
                <span className="reference-role">Directora Zonal de Comunicación, Imagen y Prensa — Ministerio de Salud Pública</span>
              </div>
              <div className="reference-card">
                <div className="reference-avatar">JM</div>
                <strong className="reference-name">Ing. Jordan Mendoza Intriago</strong>
                <span className="reference-role">Ejecutivo de Infraestructura — Ing. en Sistemas Informáticos y Multimedia</span>
              </div>
              <div className="reference-card">
                <div className="reference-avatar">WR</div>
                <strong className="reference-name">Lcdo. Wilmer Romero Rodríguez, Mgtr.</strong>
                <span className="reference-role">Gerente, Consultora Liderar</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <span className="footer-brand">ELITE SHIELD</span>
          <ul className="footer-links">
            <li><a href="#privacidad">Privacidad</a></li>
            <li><a href="#terminos">Términos de Servicio</a></li>
            <li><a href="#certificaciones">Certificaciones</a></li>
          </ul>
          <span className="footer-copy">© 2024 Elite Shield Security Professional. Todos los derechos reservados.</span>
        </div>
      </footer>
    </>
  )
}

export default App
