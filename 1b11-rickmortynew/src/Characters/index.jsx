import './styles.css'
import CharCard from "../CharCard"
const Characters = ({characterList}) => {
    return(
        
        <div>
            <h1>Meus personagens</h1>
            {characterList.map((item) => {return(
                <div>
                    <CharCard item={item}/>
                </div>
                
            )})}
        </div>
    )
}
export default Characters