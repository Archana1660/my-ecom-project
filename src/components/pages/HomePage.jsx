import {soundCheck, ring_braclet_earring_set, summar, mens_jeans_shoe} from '../../assets'
import { Link } from 'react-router-dom'
export const HomePage = () => {

return (
    <main className='grid grid-cols-1 grid-rows-1 lg:grid-cols-2 d:grid-rows-2 gap-4'>
    <section className='h-auto md:h-96 relative group'>
      <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200'>
        <p className='text-2xl'>Electronics</p>
      </div>
        <img src={`${soundCheck}`} alt={`${soundCheck}`} className='w-full h-full object-contain' />
    </section>
    <section className='h-auto md:h-96 flex flex-col md:flex-row items-center justify-center gap-4'>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200'>
          <p className='text-2xl'>Jewellery</p>
        </div>
        <Link>
              <img src={`${ring_braclet_earring_set}`} alt={`${ring_braclet_earring_set}`} className='duration-200 w-56 h-fit inline-block' />
        </Link>
      </div>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200'>
          <p className='text-2xl'>Women&apos;s Clothing</p>
        </div>
        <Link>
            <img src={`${summar}`} alt={`${summar}`} className='w-48 h-min duration-200 inline-block' />
        </Link>
      </div>
      <div className='relative group'>
        <div className='backdrop-blur-sm bg-white/30 w-full h-full inset-y-2.5 absolute hidden group-hover:flex items-center justify-center duration-200'>
           <p className='text-2xl'>Men&apos;s Clothing</p>
        </div>
        <Link>
            <img src={`${mens_jeans_shoe}`} alt={`${mens_jeans_shoe}`} className='w-56 h-fit duration-200 inline-block' />

        </Link>
      </div>
      </section>
    </main>
  )
}