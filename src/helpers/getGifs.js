export const getGifs = async( category ) => {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=Qvj8GHkmDs0udoJiDAi3qerrhqocd556&limit=12&q=${ category }`
    const resp = await fetch( apiURL )
    const { data } = await resp.json()
    const gifs = data.map( img => ( {
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    } ) )

    return gifs
}