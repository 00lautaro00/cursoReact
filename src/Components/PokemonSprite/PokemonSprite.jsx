

export const PokemonSprite = ({data}) => {

    return(<>
    <h1>{data.name}</h1>
    <img src={data.sprites?.front_default} alt="" />
    </>)

}