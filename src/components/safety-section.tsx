import Icon from "@/components/ui/icon"

const safetyPoints = [
  {
    icon: "BadgeCheck",
    title: "Одобрено регуляторами",
    description: "Все материалы и процедуры прошли клинические испытания и сертификацию по международным медицинским стандартам.",
  },
  {
    icon: "HeartPulse",
    title: "Биосовместимые материалы",
    description: "Только проверенные медицинские сплавы и полимеры — никакого воспаления, никаких отторжений.",
  },
  {
    icon: "Lock",
    title: "Защита нейроданных",
    description: "Нейронные данные хранятся локально на устройстве. Никакая третья сторона не имеет к ним доступа без вашего разрешения.",
  },
  {
    icon: "RotateCcw",
    title: "Полная обратимость",
    description: "Процедура установки обратима на 100%. Устройство может быть безопасно извлечено в любой момент.",
  },
]

export function SafetySection() {
  return (
    <section id="safety" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Безопасность прежде всего
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-space-mono">
            Мы разработали SynapseAI так, чтобы безопасность была встроена на каждом уровне — от материалов до протоколов данных.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {safetyPoints.map((point, i) => (
            <div
              key={i}
              className="text-center p-8 border border-red-500/20 rounded-2xl bg-zinc-900/30 hover:bg-zinc-900/60 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/10 rounded-full mb-6">
                <Icon name={point.icon} fallback="Shield" size={30} className="text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 font-orbitron">{point.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed font-space-mono">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border border-red-500/20 rounded-2xl p-8 bg-gradient-to-r from-red-950/30 to-zinc-900/30">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-red-500 font-orbitron mb-2">99.7%</div>
              <div className="text-gray-400 font-space-mono">точность интерпретации сигналов</div>
            </div>
            <div className="w-px h-24 bg-red-500/30 hidden md:block" />
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-red-500 font-orbitron mb-2">0</div>
              <div className="text-gray-400 font-space-mono">серьёзных нежелательных событий за всё время испытаний</div>
            </div>
            <div className="w-px h-24 bg-red-500/30 hidden md:block" />
            <div className="text-center md:text-left">
              <div className="text-6xl font-bold text-red-500 font-orbitron mb-2">5+</div>
              <div className="text-gray-400 font-space-mono">лет клинических исследований и разработки</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
