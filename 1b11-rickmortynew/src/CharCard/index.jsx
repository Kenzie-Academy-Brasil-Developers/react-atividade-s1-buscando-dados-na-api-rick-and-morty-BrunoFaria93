import './styles.css'
const CharCard = ({item}) => {
    return(
        <div className='container'>
            {item.name}
            <img src={item.image} alt="" />
        </div>
        
    )
}
export default CharCard