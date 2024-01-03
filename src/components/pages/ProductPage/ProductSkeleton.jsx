
export const ProductSkeleton = () => {

    return (
        <>
            <main>
                <section className="flex items-center justify-center">
                    <div className="flex flex-col p-6 m-3 space-y-10 rounded-2xl shadow-2xl md:flex-row md:space-y-0 md:space-x-10 md:m-0 md:p-16 animate-pulse">
                        <div className="w-60  h-60 mx-auto bg-gray-300"></div>
                        <div className="flex flex-col space-y-6">
                            <div className="h-6 w-40 bg-gray-300 rounded-full"></div>
                            <div className="h-6 sm:w-80 md:w-96 bg-gray-300 rounded-full"></div>
                            <div className="h-6 w-40 bg-gray-300 rounded-full"></div>
                            <div className="h-6 w-40 bg-gray-300 rounded-full"></div>
                            <div className="h-6 sm:w-80 md:w-96 bg-gray-300 rounded-full"></div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    )
}