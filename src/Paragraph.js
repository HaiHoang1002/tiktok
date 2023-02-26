import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"


function Paragraph(){
    const Context = useContext(ThemeContext)
    return(
        <p className={Context.theme}>
            Context provides a way to pass through the component tree without having to pass props down manually at every level.
        </p>
    )
}
export default Paragraph