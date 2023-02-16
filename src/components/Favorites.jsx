import { useSelector } from "react-redux"




const Favorites = () => {
    const favContent = useSelector(state => state.favorites.content)

    console.log(favContent)
    return (
        <>


            {favContent.map((content) => (
                <h1>
                    {content.title}
                </h1>
            )
            )}

        </>
    )
}

export default Favorites