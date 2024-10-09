type Props = {
    label : string;
    onClick ?: () => void;
}

export const Button = ({ label, onClick } : Props) => {
    return <button onClick={onClick} 
    className="bg-themePrimary w-full h-14 rounded-xl font-bold text-xl text-white transition-bg duration-500 ease-in-out hover:bg-themePrimary/80 hover:border-2 hover:border-bg-themePrimary" >
        {label}
    </button>
}