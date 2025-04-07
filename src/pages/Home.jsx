import { carWheels8Removebg } from '../assets/images'

export default function Home() {
  return (
    <main>
      <section className='relative py-10 px-4'>
      <img src={carWheels8Removebg} alt="" className='absolute top-0 left-0 w-full h-full object-cover object-right overflow-hidden' />
        <div className="container relative mx-auto grid grid-cols-2"></div>
      </section>
    </main>
  )
}
