import { useEffect } from "react";
import { useLocation } from "react-router-dom";


export const ScrollToTop = () => {
    const {pathname, hash} = useLocation()
  return (
    // - Lernvermerk -
    // useEffect() führt Code NACH dem Rendern aus, wenn sich Dependencies ändern
    // useEffect() ohne Dependency-Array wird nach JEDEM Render (bei jedem Rerender) ausgeführt
    // useEffect() mit leerem Dependency-Array [] wird EINMAL nach dem ersten Render ausgeführt
    useEffect(() =>{
        // autoscroll to top wenn durch einen router pagechange kein hash vorhanden ist
        if(!hash){
            window.scrollTo(0,0)
        }
        // wenn ein hash vorhanden ist kuemmert sich react-router-hash-link darum
    },[pathname, hash])
  )
}
