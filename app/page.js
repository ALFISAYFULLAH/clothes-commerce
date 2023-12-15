import Card from "@/components/Card";
import Image from "next/image";

const categories = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default async function Home() {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    const listProdct = data

    return (
        <section className="max-w-3xl w-full">
            <nav className="fixed top-0 z-10 bg-white shadow-md max-w-3xl w-full flex justify-center">
                <div className="px-[5%] w-full h-14 flex-between">
                    <div className="w-14 h-full flex-center">
                        <svg className="rotate-90 mt-4 w-20 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M3 16h2v5H3zm4-3h2v8H7zm4-3h2v11h-2z"></path>
                        </svg>
                    </div>
                    <h1 className="uppercase font-serif font-semibold text-2xl">issacs</h1>
                    <div className="w-14 h-full flex-center">
                        <svg className="w-12 fill-slate-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
                            <circle cx="10.5" cy="19.5" r="1.5"></circle>
                            <circle cx="17.5" cy="19.5" r="1.5"></circle>
                        </svg>
                    </div>
                </div>
            </nav>

            <form className="pt-24 px-[5%]">
                <input className="px-[5%] py-4 shadow-lg w-full rounded-xl focus:outline-none" type="text" placeholder="search" />
            </form>

            <div className="pt-8 pl-[5%]">
                <div className="overflow-x-scroll">
                    <div className="flex w-fit gap-4">
                        {categories.map((item) => (
                            <div key={item} className="flex-center flex-col">
                                <div className="w-16 h-16 border-2 shadow-1 border-slate-300 rounded-full overflow-hidden">
                                    <Image src={`https://source.unsplash.com/random/${item}`} width={40} height={40} alt="" />
                                </div>
                                <h2>{item}</h2>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <main className="pt-8 px-[5%]">
                <h1 className="font-serif font-semibold text-xl capitalize">new arivals</h1>

                <div className="columns-2 gap-3 space-y-3">
                    <Card listProduct={listProdct} />
                </div>
            </main>
        </section>
    );
}
