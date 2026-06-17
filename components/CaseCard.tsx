interface Case {
  id: number
  before: string
  action: string
  result: string
}

export function CaseCard({ item }: { item: Case }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4">
      <div>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Было</span>
        <p className="mt-1 text-gray-700">{item.before}</p>
      </div>
      <div>
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Что сделали</span>
        <p className="mt-1 text-gray-700">{item.action}</p>
      </div>
      <div className="bg-purple-50 rounded-xl p-4">
        <span className="text-xs font-semibold text-purple-500 uppercase tracking-wide">Результат</span>
        <p className="mt-1 text-purple-900 font-semibold">{item.result}</p>
      </div>
    </div>
  )
}
