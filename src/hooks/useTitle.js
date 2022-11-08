import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-Lawyer Ghhor`
    }, [title])
}
export default useTitle;