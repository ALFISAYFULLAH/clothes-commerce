import Card from "@/components/Card";
import getResponse from "@/libs/getResponse";
import Image from "next/image";

export default async function Home() {
    let listProduct = await getResponse(`products`);
    const Categories = await getResponse(`products/categories`);

    return (
        <section className=" w-full flex flex-col items-center">
            <nav className="fixed top-0 z-10 bg-white shadow-md mx-8 w-full flex justify-center">
                <div className="px-[5%] w-full h-14 flex-between">
                    <div className="w-14 h-full flex-center">
                        <svg className="rotate-90 mt-4 w-20 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2z"></path>
                        </svg>
                    </div>
                    <h1 className="uppercase font-serif font-semibold text-2xl">issacs</h1>
                    <div className="w-14 h-full flex-center relative">
                        <svg className="w-12 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                            <circle cx="10.5" cy="19.5" r="1.5"></circle>
                            <circle cx="17.5" cy="19.5" r="1.5"></circle>
                        </svg>
                        <div className="absolute w-6 h-6 rounded-full bg-red-500 top-2 right-0 flex-center text-white font-bold">0</div>
                    </div>
                </div>
            </nav>

            <form className="pt-24 px-[5%] w-full">
                <input className="px-[5%] py-4 shadow-lg w-full rounded-xl focus:outline-none uppercase text-2xl" type="text" placeholder="search" />
            </form>

            <div className="pt-8 pl-[5%] w-full">
                <div className="overflow-x-scroll">
                    <div className="flex w-fit gap-4">
                        {Categories.map((item) => (
                            <div key={item} className="flex-center flex-col">
                                <div className="border-2 w-max px-6 py-1 rounded-lg shadow-1 border-slate-300">
                                    <h1>{ item}</h1> 
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="pt-8 px-[5%]">
                <h1 className="font-serif font-semibold text-xl capitalize">new arivals</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                    <Card listProduct={listProduct} />
                </div>
            </main>
        </section>
    );
}
