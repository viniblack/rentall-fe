import { ArrowRight } from "lucide-react";

export const HowItWorks = () => {
  return (
    <section className="bg-gray-100 py-16 px-6 md:px-20 text-center">
      <h3 className="text-3xl font-bold text-teal-700 mb-10">Como funciona</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Step step="1" text="Crie sua conta na plataforma." />
        <Step step="2" text="Alugue ou anuncie o que quiser." />
        <Step step="3" text="Combine um local com o proprietário." />
        <Step step="4" text="Use e pague apenas pelo tempo necessário." />
      </div>
      <button className="mt-10 inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full text-lg font-medium transition">
        Quero experimentar agora <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  )
}

function Step({ step, text }: { step: string; text: string }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md flex flex-col items-center text-center">
      <div className="w-10 h-10 flex items-center justify-center bg-teal-600 text-white rounded-full font-bold mb-4">
        {step}
      </div>
      <p className="text-base text-gray-700">{text}</p>
    </div>
  )
}