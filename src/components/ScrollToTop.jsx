import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const ScrollToTop = () => {
    const {pathname, hash} = useLocation()
  return (
    useEffect(() =>{
        // autoscroll to top wenn durch einen router pagechange kein hash vorhanden ist
        if(!hash){
            window.scrollTo(0,0)
        }
        // wenn ein hash vorhanden ist kuemmert sich react-router-hash-link darum
    },[pathname, hash])
  )
}
