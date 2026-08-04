import { useState } from "react"

const Card = ( {title} ) => {
  const [hasLiked, setHasLiked] = useState(false);
  return(
    <div className="card">
      <h2>{title}</h2>
      <button onClick ={() => setHasLiked(!hasLiked)}>
        {hasLiked ? 'Liked' : 'Like'}
      </button>
    </div>
  )
}

const App = () => {
 
    return(
    <div ClassName= "card-container">
    <Card title = "Kung Fu Panda"/>
    <Card title = "Despicable Me"/>
    <Card title = "Minions"/>
    <Card title = "Cars"/>
    <Card title = "How to Train Your Dragon"/>
    <Card title = "Wreck it Ralph"/>

    </div>
  )
}

export default App
