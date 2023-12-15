import Link from "next/link";
import Image from "next/image";

const cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function Card({listProduct}) {
    return (
        <>
            {listProduct.map((item) => (
                <div key={item.id}>
                    <Link href={`/product/${item.id}`}>
                        <Image src={item.images[0]} width={400} height={600} alt={item.title} />
                    </Link>
                </div>
            ))}
        </>
    );
}