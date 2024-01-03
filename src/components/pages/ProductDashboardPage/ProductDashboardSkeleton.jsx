export const ProductDashboardSkeleton = () => {
  return (
    <div className="flex justify-center min-h-screen ">
        <section className="bg-neutral-100 p-2 m-2 shadow-2xl rounded-3xl md:p-10">
            <div className="grid gap-5 grid-col-1 sm:grid-cols-2 lg:grid-cols-3">
               <div className="shadow-lg rounded-xl p-10 md:p-5 lg:p-10 bg-white group flex flex-col justify-center w-96">
                    <div className="bg-gray-300 animate-pulse" style={{height:'15rem', borderRadius:'2rem'}}></div>
                      <div className="card-details flex flex-col items-center justify-center space-y-2 mt-5">
                        <div className="h-6 w-full bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-6 w-full bg-gray-300 rounded-full"></div>
                    </div>
                </div>
               <div className="shadow-lg rounded-xl p-10 md:p-5 lg:p-10 bg-white group flex flex-col justify-center  w-96">
                    <div className="bg-gray-300 animate-pulse" style={{height:'15rem', borderRadius:'2rem'}}></div>
                      <div className="card-details flex flex-col items-center justify-center space-y-2 mt-5">
                       <div className="h-6 w-full bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-6 w-full bg-gray-300 rounded-full"></div>
                    </div>
                </div>
               <div className="shadow-lg rounded-xl p-10 md:p-5 lg:p-10 bg-white group flex flex-col justify-center w-96">
                    <div className="bg-gray-300 animate-pulse" style={{height:'15rem', borderRadius:'2rem'}}></div>
                      <div className="card-details flex flex-col items-center justify-center space-y-2 mt-5">
                       <div className="h-6 w-full bg-gray-300 rounded-full mb-4"></div>
                        <div className="h-6 w-full bg-gray-300 rounded-full"></div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
