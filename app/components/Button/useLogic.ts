import { useRouter } from "next/navigation"

export const useLogic = () => {
    const router = useRouter()

    const handleRedirect = (href: string) => {
        router.push(href)
    }

    return {
        handleRedirect
    }
}