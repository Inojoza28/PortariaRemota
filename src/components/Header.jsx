// src/components/Header.jsx
import React from 'react'
import { useNavigate } from 'react-router-dom'
import VisitCard from './VisitCard'
import BackButton from './BackButton'

export default function Header() {
  const navigate = useNavigate()

  const handleLogout = () => {
    // Exemplo: limpar dados e voltar pro dashboard
    navigate('/')
  }

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-logo">
          <img
            src="src/imgs/logo-portaria.png"
            alt="Portaria Remota"
          />
        </div>

        <div className="header-user-info">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            <span style={{
              color: '#6B7280',
              fontFamily: 'Inter',
              fontWeight: 'bold',
              marginRight: '0px' 
            }}>
              Inojoza
            </span>
            <img
              src="src/imgs/user-avatar.png"
              alt="Inojoza"
              style={{ marginLeft: '-4px' }} // Margem negativa na imagem
            />
          </div>
          <button className="botaoSair" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </div>

      <div className="banner">
        <div className="banner-overlay">
          {/* Exibe componentes diferentes conforme a rota */}
          {location.pathname === '/' && <VisitCard />}
          {(location.pathname === '/add' || location.pathname.startsWith('/edit')) && (
            <BackButton
              style={{
                position: 'absolute',
                left: '40px',
                top: '120px'
              }}
            />
          )}
        </div>
      </div>
    </header>
  )
}
