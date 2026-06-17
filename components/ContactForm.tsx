'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Input, Textarea } from './ui/Input'
import { Button } from './ui/Button'

interface ContactFormData {
  name: string
  telegram: string
  company?: string
  message?: string
}

interface ContactFormProps {
  type: 'mentoring' | 'consultation'
  successMessage?: string
}

export function ContactForm({ type, successMessage = 'Получили заявку — свяжемся в течение 24 часов.' }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const [serverError, setServerError] = useState('')

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormData>()

  const onSubmit = async (data: ContactFormData) => {
    setServerError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, type }),
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
        <p className="font-heading text-3xl uppercase text-paper">Заявка получена</p>
        <p className="font-body text-sm text-paper/50 mt-3">{successMessage}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <Input label="Имя *" placeholder="Ваше имя" error={errors.name?.message}
        {...register('name', { required: 'Укажите имя', minLength: { value: 2, message: 'Минимум 2 символа' } })}
      />
      <Input label="Telegram *" placeholder="@username или +7..."
        error={errors.telegram?.message}
        {...register('telegram', {
          required: 'Укажите Telegram',
          pattern: { value: /^(@[\w]+|\+7[\d]{10}|8[\d]{10})$/, message: 'Формат: @username или +7XXXXXXXXXX' },
        })}
      />
      {type === 'mentoring' && (
        <Input label="Компания / магазин на WB" placeholder="Название магазина" {...register('company')} />
      )}
      <Textarea
        label={type === 'mentoring' ? 'Коротко: какая сейчас ситуация с рекламой' : 'Ваш вопрос'}
        placeholder="Опишите ситуацию..."
        rows={4}
        maxLength={1000}
        {...register('message', { maxLength: { value: 1000, message: 'Максимум 1000 символов' } })}
      />
      {serverError && <p className="font-body text-xs text-red-400">{serverError}</p>}
      <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
        {isSubmitting ? 'Отправляю...' : 'Отправить заявку'}
      </Button>
    </form>
  )
}
