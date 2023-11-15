
import shoppingCart from '../../assets/shopping-cart.jpg'
export const SubscribePage = () => {
    return <div className="flex items-center justify-center h-screen bg-zinc-900">
        <div className="bg-zinc-800 rounded-lg p-2 mx-6">

            <div className="flex flex-col md:flex-row rounded-l-xl">
                <img src={shoppingCart} alt="shopping-cart" className='object-fit h-80 rounded-xl md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-200' />
                <div className='p-6 md:p-12'>
                    <h2 className='font-serif text-xl font-medium text-center text-white md:text-left'>Get daily updates about our exciting offers</h2>
                    <p className='max-w-xs text-xs leading-5 tracking-wide text-center text-white md:text-left'>
                        We have daily deal offer. Don&apos;t miss out on SALES. Hurry! subscribe us now
                    </p>
                    <div className='flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row'>
                        <input className="p-2 px-4 text-center border border-zinc-600 bg-zinc-800 rounded-lg placeholder:text-center placeholder:md:text-left" type='email' placeholder='Enter email address' />
                        <button className='px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-100'>Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
}