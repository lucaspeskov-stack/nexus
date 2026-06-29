import { useEffect, useState } from 'react'
import { HOURS } from '../data/content'

// Calcula se o estabelecimento está aberto agora (horário de Brasília aproximado)
export function useOpenStatus() {
  const [status, setStatus] = useState(() => compute())

  useEffect(() => {
    const id = setInterval(() => setStatus(compute()), 60_000)
    return () => clearInterval(id)
  }, [])

  return status
}

function compute() {
  const now = new Date()
  const dow = now.getDay() // 0=Dom … 6=Sáb
  const minutes = now.getHours() * 60 + now.getMinutes()
  const today = HOURS[dow]

  if (!today || today.closed) {
    return { open: false, label: 'Fechado hoje', today }
  }

  if (minutes < today.open) {
    return { open: false, label: `Abre às ${fmt(today.open)}`, today }
  }
  if (minutes >= today.close) {
    return { open: false, label: 'Fechado agora', today }
  }
  return { open: true, label: `Aberto até ${fmt(today.close)}`, today }
}

function fmt(min) {
  const h = String(Math.floor(min / 60)).padStart(2, '0')
  const m = String(min % 60).padStart(2, '0')
  return `${h}:${m}`
}
