import { Flex } from "@/components/ui/flex"
import { CheckCircle, BarChart3, ArrowRight, PiggyBank, Briefcase, DollarSign, Globe, TrendingUp, Repeat, SlidersHorizontal } from "lucide-react"


const advantages = [
  { icon: BarChart3, title: "Economia" },
  { icon: Globe, title: "Reduz o consumo excessivo" },
  { icon: Repeat, title: "Flexibilidade" },
  { icon: Briefcase, title: "Oportunidade de negócios" },
  { icon: TrendingUp, title: "Retorno do investimento" },
  { icon: PiggyBank, title: "Renda extra" },
];

export const Advantage = () => {
  return (
    <div className="bg-white text-gray-800 ">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6 text-emerald-800">
          Vantagens em usar <span className="text-emerald-600">Rentall.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {advantages.map(({ icon: Icon, title }, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 border rounded-xl hover:shadow-md transition"
            >
              <Icon size={32} className="text-emerald-600 mb-3" />
              <p className="text-base font-medium text-emerald-600">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

} 