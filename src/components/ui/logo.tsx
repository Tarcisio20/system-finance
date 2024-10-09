import Image from "next/image"

type Props = {
    alt ?: string;
    width :  number;
    height : number;

}

export const Logo = ({alt, width, height } : Props) => {
    return <div>
        <Image src="/assets/finance.png" alt={alt ? alt : ''} width={width} height={height} />
    </div>
}