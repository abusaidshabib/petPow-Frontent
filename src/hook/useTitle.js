import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => {
        document.title = `${title}-petPow`;
        
    }, [title])
}

export default useTitle;