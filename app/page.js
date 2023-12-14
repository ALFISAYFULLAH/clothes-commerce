import Card from "@/components/Card";
import Image from "next/image";



export default function Home() {
    return (
        <section className="mb-28 relative">
            <nav className="absolute top-[5vh] px-4 h-16 w-full flex items-center justify-between">
                <input className="w-8/12 h-12 px-4" placeholder="search" type="text" />
                <div className="w-12 h-12 bg-white"></div>
                <div className="w-12 h-12 bg-white"></div>
            </nav>

            <div className="h-64 bg-green-500"></div>

            <div className="bg-white max-w-[300px] h-20 -mt-10 mx-auto relative z-10"></div>

            <div className="relative z-0 -mt-10 pt-14 pb-6 gap-6 bg-green-500">
                <div className="flex gap-6 justify-center">
                    <div className="w-12 h-12 bg-white"></div>
                    <div className="w-12 h-12 bg-white"></div>
                    <div className="w-12 h-12 bg-white"></div>
                    <div className="w-12 h-12 bg-white"></div>
                    <div className="w-12 h-12 bg-white"></div>
                </div>
                <div className="flex justify-between h-24 px-2 mt-8">
                    <div className="w-60 h-full bg-blue-600"></div>
                    <div className="w-28 h-full bg-blue-600"></div>
                </div>
            </div>

            <div className="my-8 ml-4 h-40"></div>

            <div className="px-[5%] mt-8">
                <h1 className="font-poppins uppercase font-bold text-[100%]">rekomendasi</h1>
                <div className="flex flex-wrap gap-x-2 justify-evenly">
                    <Card />
                </div>
            </div>

            <div className="dots mx-auto mt-8"></div>

            <nav className="fixed bottom-4 flex justify-center w-full h-14">
                <div className="flex justify-evenly max-w-[350px] w-full bg-green-600 rounded-full">
                    <div className="w-14 h-14 bg-green-500"></div>
                    <div className="w-14 h-14 bg-green-500"></div>
                    <div className="w-14 h-14 bg-green-500"></div>
                    <div className="w-14 h-14 bg-green-500"></div>
                </div>
            </nav>
        </section>
    );
}
