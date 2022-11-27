import React from "react";
import Card from "./Card";

function Home() {
  const contentList = [
    {
      route: '/mathtest',
      description: 'Test your math Speed',
      img: 'https://images.twinkl.co.uk/tw1n/image/private/t_630/image_repo/66/0a/T-M-364-display-numbers-black.jpg',
    },
    {
      route: '/typingtest',
      description: 'Test your typing speed',
      img: 'https://cdn.mos.cms.futurecdn.net/Y9e8wrwqYEvceR2UECrVVf-1200-80.jpeg',
    },
    {
      route: '/snake',
      description: 'Let\'s play snake!',
      img: 'https://play-lh.googleusercontent.com/fzMvuKPd1TpQsGrlMxDSZEMibAIXdhavx2CaFyqXWpkDe6myRIF250lznddUbNFQuQ',
    },
    {
      route: '/memory',
      description: 'Test your working memory',
      img: 'https://archive.org/download/interspeciesio-zsXP8qeFF6A/interspeciesio-zsXP8qeFF6A.thumbs/Chimp%20vs%20Human!%20_%20Memory%20Test%20_%20BBC%20Earth-zsXP8qeFF6A_000028.jpg',
    },
    {
      route: '/game',
      description: 'WIP game',
      img: 'https://www.aaltopaint.co.nz/assets/entries/_product_large/4_White_Space.jpg',
    },
  ]
  return (
    <div className=" flex justify-center items-center mt-24"> 
      <div className=" mt-10 grid gap-4 grid-cols-2">
        {contentList.map(content => <Card content = {content} />)}
      </div>
    </div>
  )
}

export default Home