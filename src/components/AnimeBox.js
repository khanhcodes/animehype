import React from 'react'

function AnimeBox({anime}) {
    return (
        <article className="anime-box">
            <a 
                href={anime.url}
                target="_blank"
                rel="noreferrer">
                
                <figure>
                    <img 
                        src={anime.image_url}
                        alt="Anime" />
                    
                </figure>
                <h3>{ anime.title }</h3>
            </a>

        </article>

    )
}

export default AnimeBox
