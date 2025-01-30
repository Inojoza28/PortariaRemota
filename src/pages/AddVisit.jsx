// src/pages/AddVisit.jsx
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import VisitForm from '../components/VisitForm'

export default function AddVisit() {
  const navigate = useNavigate()

  // Estado local apenas para exibir/atualizar a lista que vem do localStorage
  const [storedVisits, setStoredVisits] = useState([])

  // 1. Carrega as visitas do localStorage quando o componente monta
  useEffect(() => {
    try {
      const localData = JSON.parse(localStorage.getItem('visits')) || []
      setStoredVisits(localData)
    } catch (error) {
      console.error('Erro ao carregar visitas do localStorage:', error)
      setStoredVisits([]) // se der erro, inicia vazio
    }
  }, [])

  // 2. Quando salvar, cria a nova visita e salva no localStorage
  function handleSave(data) {
    const storedVisits = JSON.parse(localStorage.getItem('visits')) || [];

    const newVisit = {
      ...data,
      id: Date.now(),
      status: 'nao-realizada', // ou o status que desejar
    };

    storedVisits.push(newVisit);
    localStorage.setItem('visits', JSON.stringify(storedVisits)); // Corrigido para "visits"

    navigate('/');
  }


  // 3. Se o usuário cancelar, apenas volta ao Dashboard
  function handleCancel() {
    navigate('/')
  }

  return (
    <div
      className="card-overlay"
      style={{
        position: 'absolute',
        top: '100%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%',
        maxWidth: '1200px',
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        borderRadius: '24px',
        padding: '2.5rem',
        boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        backdropFilter: 'blur(8px)',
        zIndex: '1000',
        overflow: 'hidden',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <h2 style={{
        marginTop: '1.4rem',
        fontSize: '2rem',
        fontWeight: 'bold',
        color: '#111827',
        textAlign: 'left',
        letterSpacing: '-0.025em',
        paddingBottom: '1rem'
      }}>Adicionar nova visita</h2>
      <VisitForm onSave={handleSave} onCancel={handleCancel} />
    </div>
  )
}
