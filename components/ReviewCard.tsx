interface Review {
  id: number
  name: string
  text: string
  product: string
}

export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
      <p className="text-gray-700 italic leading-relaxed">«{review.text}»</p>
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-900">{review.name}</span>
        <span className="text-xs text-purple-600 bg-purple-50 px-3 py-1 rounded-full">{review.product}</span>
      </div>
    </div>
  )
}
