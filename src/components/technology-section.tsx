import Icon from "@/components/ui/icon"

const techs = [
  {
    icon: "Cpu",
    title: "Нейросигнальный процессор N7",
    description:
      "Чип собственной разработки обрабатывает 1024 нейронных канала одновременно с задержкой менее 0.3 мс.",
    stat: "1024",
    statLabel: "нейронных канала",
  },
  {
    icon: "Wifi",
    title: "Беспроводная передача данных",
    description:
      "Зашифрованный канал 5G/Wi-Fi 6E обеспечивает стабильную связь с устройствами и облаком в реальном времени.",
    stat: "5G",
    statLabel: "без проводов",
  },
  {
    icon: "Shield",
    title: "Нейронная криптография",
    description:
      "Биометрически-уникальные ключи шифрования генерируются из нейронных паттернов пользователя — взлом невозможен.",
    stat: "256-bit",
    statLabel: "шифрование AES",
  },
  {
    icon: "Zap",
    title: "Беспроводная зарядка",
    description:
      "Технология индуктивной зарядки: полный заряд за 2 часа, автономность до 24 часов активного использования.",
    stat: "24ч",
    statLabel: "автономность",
  },
]

export function TechnologySection() {
  return (
    <section id="technology" className="py-24 bg-gradient-to-b from-black to-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">
            Технология изнутри
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed font-space-mono">
            Каждый компонент SynapseAI разработан с нуля для максимальной производительности, безопасности и комфорта.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techs.map((tech, i) => (
            <div
              key={i}
              className="border border-red-500/20 rounded-2xl p-8 bg-zinc-900/50 hover:border-red-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-6">
                <div className="bg-red-500/10 rounded-xl p-4 group-hover:bg-red-500/20 transition-colors duration-300">
                  <Icon name={tech.icon} fallback="Cpu" size={28} className="text-red-500" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 font-orbitron">{tech.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-4 font-space-mono text-sm">{tech.description}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-red-500 font-orbitron">{tech.stat}</span>
                    <span className="text-gray-500 text-sm font-space-mono">{tech.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}