import React from 'react'
interface awardList{
    name : string,
    period : number[][]
    url : string,
    image : string,
    rank : "1st" |"2nd" | "3rd",
    category : string
}

function Awards() {
    const awarsLists:awardList[] = [
        {
            name : "Solana Sandstorm",
            period : [[1,10, 2023], [1, 23, 2023]],
            url : "https://twitter.com/lamportdao/status/1621786505848180736?s=46&t=sBhPLPNPNJD-52PMAo8rPQ",
            image : "/awards/sandstorm.png",
            rank : "1st",
            category : "Human Readable"
        },
        {
            name : "Solana Grizzlython",
            period : [[2,2, 2023], [3, 3, 2023]],
            url : "https://www.sandstormhackathon.com/",
            image : "/awards/sandstorm.png",
            rank  : "3rd",
            category : "Consumer"
        },
        {
            name : "Solana Sandstorm",
            period : [[1,10, 2023], [1, 23, 2023]],
            url : "https://ethglobal.com/showcase/crossbow-qb6r5",
            image : "/awards/sandstorm.png",
            rank : "1st",
            category : "Best use of NFT/Token api"
        },
        
    ]
  return (
    <div>
        <h1>
            Awards
        </h1>
        {awarsLists.map((list:awardList, index : number) => (
            <div>
                
            </div>
        ))}
    </div>
  )
}

export default Awards