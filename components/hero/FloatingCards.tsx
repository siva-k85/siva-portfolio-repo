'use client'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'ACGME compliance 296% ↑',
    description: 'Automated evaluation workflows for residency leadership.',
    icon: '📊',
    gradient: 'from-blue-500 to-blue-600',
  },
  {
    title: 'Sepsis bundle < 60 min',
    description: 'Real-time command center alerts to bedside teams.',
    icon: '⚡',
    gradient: 'from-purple-500 to-purple-600',
  },
  {
    title: '$6.7M shared savings',
    description: 'Risk modeling aligned payor contracts with clinical action.',
    icon: '💰',
    gradient: 'from-green-500 to-green-600',
  },
]

export default function FloatingCards() {
  return (
    <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 lg:justify-between">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          className="flex-1 rounded-2xl border border-gray-200 bg-white p-6 shadow-lg hover:shadow-xl transition-shadow"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
          whileHover={{
            y: -4,
            transition: { duration: 0.2 }
          }}
        >
          <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${card.gradient} mb-4`}>
            <span className="text-2xl">{card.icon}</span>
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {card.description}
          </p>
        </motion.div>
      ))}
    </div>
  )
}
