'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input } from './ui/Input'
import { Button } from './ui/Button'

interface WaitlistFormData {
  name: string
  telegram: string
  email?: string
}

export function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<WaitlistFormData>()

  const onSubmit = async (data: WaitlistFormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type: 'waitlist' }),
      })
      if (!res.ok) throw new Error()
      setSubmitted(true)
    } catch {
      setServerError('Что-то пошло не так. Напишите напрямую в Telegram.')
    }
  }

  if (submitted) {
    return (
      <div className="border-t border-paper/20 pt-8">
        <p className="font-heading text-3xl uppercase text-paper">Вы в списке</p>
        <p className="font-body text-sm text-paper/50 mt-3">Напишем, когда откроется набор.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <Input label="Имя *" placeholder="Ваше имя" error={errors.name?.message}
        {...register('name', { required: 'Укажите имя', minLength: { value: 2, message: 'Минимум 2 символа' } })}
      />
      <Input label="Telegram *" placeholder="@username или +7..." error={errors.telegram?.message}
        {...register('telegram', {
          required: 'Укажите Telegram',
          pattern: { value: /^(@[\w]+|\+7[\d]{10}|8[\d]{10})$/, message: 'Формат: @username или +7XXXXXXXXXX' },
        })}
      />
      <Input label="Email (необязательно)" type="email" placeholder="you@example.com" error={errors.email?.message}
        {...register('email', {
          pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Введите корректный email' },
        })}
      />
      {serverError && <p className="font-body text-xs text-red-400">{serverError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
        {isSubmitting ? 'Отправляю...' : 'Записаться в предзапись'}
      </Button>
    </form>
  )
}
