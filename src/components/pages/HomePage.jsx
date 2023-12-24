import { useNavigate } from 'react-router-dom'
import { soundCheck, ring_braclet_earring_set, summar, mens_jeans_shoe } from '../../assets'



export const HomePage = () => {
  const navigate = useNavigate()
return (
    <main className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 d:grid-rows-2 gap-4'>
    <section className='h-auto md:h-96 relative group'>
      <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200' onClick={()=> navigate("/categories/electronics")}>
        <p className='text-2xl'>Electronics</p>
      </div>
        <img src={`${soundCheck}`} alt={`${soundCheck}`} className='w-full h-full object-contain' />
    </section>
    <section className='h-auto md:h-96 flex flex-col md:flex-row items-center justify-center gap-4'>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200' onClick={() => navigate("/categories/jewelery")}>
          <p className='text-2xl'>Jewellery</p>
        </div>
        <img src={`${ring_braclet_earring_set}`} alt={`${ring_braclet_earring_set}`} className='duration-200 w-56 h-fit inline-block' />
      </div>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200' onClick={() => navigate("/categories/men's clothing")}>
          <p className='text-2xl'>Women&apos;s Clothing</p>
        </div>
        <img src={`${summar}`} alt={`${summar}`} className='w-48 h-min duration-200 inline-block' />
      </div>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200' onClick={() => navigate("/categories/men's clothing")}>
           <p className='text-2xl'>Men&apos;s Clothing</p>
        </div>
        <img src={`${mens_jeans_shoe}`} alt={`${mens_jeans_shoe}`} className='w-56 h-fit duration-200 inline-block' />
      </div>
      </section>
    </main>
  )
}