import React from 'react'

function AnimeBox({anime}) {
    return (
        <article className="anime-box">
            <a 
                href={anime.url}
                target="_blank"
                rel="nonreferrer">
                
                <figure>
                    <img 
                        src={anime.img_url}
                        alt="Anime Image" />
                </figure>
                <h3>{ anime.title }</h3>
            </a>

        </article>

    )
}

export default AnimeBox
