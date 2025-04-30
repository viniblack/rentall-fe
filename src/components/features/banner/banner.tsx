import { Button } from '@/components/ui/button'
import { Flex } from '@/components/ui/flex'

export const Banner = () => {
  return (
    <Flex
      className="relative w-full h-screen bg-[url(/images/banner.png)] md:bg-[url(/images/banner-desk.png)] bg-cover bg-center"
    >
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-5 flex flex-col justify-center ms-4 text-white">
        <h2 className='text-[5rem] font-bold'>Rentall</h2>
        <span className='text-[1rem]'>Incredible deals. Top-of-the-line design for less</span>
        <Button className='mt-4 w-40'>See our big sale</Button>
      </div>
    </Flex>
  )
}