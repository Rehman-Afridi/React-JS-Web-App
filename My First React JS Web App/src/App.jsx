import { useState ,useEffect  } from "react"

const Card = ( {title} ) => {
  const [hasLiked, setHasLiked] = useState(false);
  useEffect(() => {
    console.log(`${title} has been liked:${hasLiked}`);
  });
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

    </div>
  )
}

export default App
