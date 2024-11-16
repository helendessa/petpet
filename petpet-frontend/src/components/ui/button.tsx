
type Props = {
    label: string;
    onClick?: () => void;
    size: 1 | 2 | 3;
}

export const Button = ({ label, onClick, size}: Props) => {
    return (
        <div 
            onClick={onClick}
            className={`flex justify-center items-center cursor-pointer bg-blue-700 text-yellow-200 h-14 rounded-md
                ${size === 1 && 'h-14 text-lg'}
                ${size === 2 && 'h-10 text-md'}
                ${size === 3 && 'h-7 text-xs'}`}
        >
            {label}

        </div>
    );
}