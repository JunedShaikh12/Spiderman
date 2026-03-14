import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://wallpapercave.com/wp/wp8303662.jpg',
      intro: 'Peter Parker is the original and most famous Spider-Man created by Marvel. After being bitten by a radioactive spider, he gains powers like wall-climbing, super strength, and spider-sense. He is a brilliant science student who lives in New York City.”',
      tag: 'Tobey Maguire',
      number:1
    },
    {
      img: 'https://wallpapercave.com/wp/wp8297842.jpg',
      intro: `Andrew Garfield played Spider-Man in The Amazing Spider-Man and The Amazing Spider-Man 2.
His version of Peter Parker is known for being emotional, intelligent, and witty.
He later returned as Spider-Man in Spider-Man: No Way Home, which made fans very excited.`,
      tag: 'Andrew Garfield',
      number:2
    },
    {
      img: 'https://wallpapercave.com/wp/wp8303671.jpg',
      intro: `Tom Holland plays Spider-Man in the Marvel Cinematic Universe.
He first appeared as Peter Parker in Captain America: Civil War.
He later starred in Spider-Man: Homecoming, Spider-Man: Far From Home, and Spider-Man: No Way Home`,
      tag: 'Tom Holland',
      number:3
    }
  ]

  return (
    <div>
      <Section1  users = {users}/>
      <Section2 />
    </div>
  )
}

export default App