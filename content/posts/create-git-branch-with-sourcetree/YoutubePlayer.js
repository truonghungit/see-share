import * as React from "react"

function YoutubePlayer() {
  return (
    <iframe 
    width="100%" 
    height="415" 
    src="https://www.youtube.com/embed/POOMKhn58Vw?controls=0" 
    title="YouTube video player" frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen></iframe>
  )
}

export default YoutubePlayer
