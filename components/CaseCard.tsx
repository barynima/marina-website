interface Case {
  id: number
  before: string
  action: string
  result: string
}

export function CaseCard({ item, index }: { item: Case; index: number }) {
  return (
    <div className="border-t border-ink/15 pt-8 flex flex-col gap-6">
      <span className="font-body text-xs tracking-[0.2em] uppercase text-ink/30">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div className="flex flex-col gap-4">
        <div>
          <p className="section-tag mb-2">Было</p>
          <p className="font-body text-sm text-ink/60 leading-relaxed">{item.before}</p>
        </div>
        <div>
          <p className="section-tag mb-2">Что сделали</p>
          <p className="font-body text-sm text-ink/60 leading-relaxed">{item.action}</p>
        </div>
        <div>
          <p className="section-tag mb-2">Результат</p>
          <p className="font-heading text-2xl uppercase text-ink leading-tight">{item.result}</p>
        </div>
      </div>
    </div>
  )
}
