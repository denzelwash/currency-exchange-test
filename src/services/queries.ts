import type { Currency } from '@/types/currency'
import api from './api'

const getCurrency = async (): Promise<Currency | undefined> => {
  try {
    const url = `currency`
    const response = await api.get(url)
    return response.data
  } catch (error) {
    console.error('Ошибка запроса:', error)
  }
}

export { getCurrency }
