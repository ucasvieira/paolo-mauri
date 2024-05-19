
import { useLogic } from "./useLogic";

export default function NavLinks() {
    const {navLinks} = useLogic()

    return (
        <nav className="flex gap-[18px] items-end flex-col pr-[69px]">
            {navLinks.map((nav) => (
                <div key={nav} className="flex text-[#5CFAF7] font-extrabold w-max uppercase">
                    {nav}
                </div>
            ))}
        </nav>
    );
}
