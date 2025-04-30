import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/flex'

export const Banner = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center bg-cover bg-center bg-[url(/images/banner.png)] md:bg-[url(/images/banner-desk.png)]"
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-5 flex flex-col justify-center text-center items-center text-white max-w-3xl px-4" style={{ margin: "0 auto" }}>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Próximo <span className="text-emerald-400">destino</span><br /> é com <span className="text-emerald-400">Rentall.</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl">
          Alugue ou disponibilize equipamentos e viva novas experiências.
        </p>
        <button className="mt-6 px-6 py-3 w-50 bg-emerald-600 hover:bg-emerald-700 rounded-full text-white font-semibold transition">
          Comece agora
        </button>
      </div>
    </section>
  )
}