import { useEffect, useState } from 'react'

/**
 * Calcula o tempo decorrido desde uma data, atualizando a cada segundo.
 * Retorna { years, months, days, hours, minutes, seconds, totalDays }.
 */
export default function useElapsed(since) {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const start = since instanceof Date ? since : new Date(since)
  let diff = Math.max(0, now - start)

  const totalDays = Math.floor(diff / 86400000)

  // Decomposição calendárica aproximada (anos / meses / dias)
  let years = now.getFullYear() - start.getFullYear()
  let months = now.getMonth() - start.getMonth()
  let days = now.getDate() - start.getDate()

  if (days < 0) {
    months -= 1
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate()
    days += prevMonth
  }
  if (months < 0) {
    years -= 1
    months += 12
  }
  if (years < 0) {
    years = months = days = 0
  }

  const seconds = Math.floor(diff / 1000) % 60
  const minutes = Math.floor(diff / 60000) % 60
  const hours = Math.floor(diff / 3600000) % 24

  return { years, months, days, hours, minutes, seconds, totalDays }
}
