interface Review {
  id: number
  name: string
  text: string
  product: string
}

export function ReviewCard({ review, index }: { review: Review; index: number }) {
  return (
    <div className="border-t border-ink/15 pt-8 flex flex-col gap-5">
      <span className="font-body text-xs text-ink/25 tracking-widest">
        {String(index + 1).padStart(2, '0')}
      </span>
      <p className="font-body text-base text-ink/70 leading-relaxed italic">
        «{review.text}»
      </p>
      <div className="flex items-center justify-between">
        <span className="font-heading text-lg uppercase text-ink">{review.name}</span>
        <span className="section-tag">{review.product}</span>
      </div>
    </div>
  )
}
