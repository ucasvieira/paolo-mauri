import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

type Props = {
    handleHideHeader: any
    isHidden?: boolean
}

export default function HideHeaderButton({handleHideHeader, isHidden}: Props) {

    return (
        <button className="flex flex-col items-center text-[20px] w-[120px] h-[50%] p-[10px] bg-gradient-to-b 
            border-[1px] border-[#5CFAF7] rounded-[8px] transition-all ease-in-out duration-500" onClick={handleHideHeader}>
                {isHidden ? <FaEye/> : <FaEyeSlash/>}
        </button>
    );
}
