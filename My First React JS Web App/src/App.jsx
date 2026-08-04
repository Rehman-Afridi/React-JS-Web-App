const Card = ( {title} ) => {
  return(
    <div style={{
      border: '1px solid #4b5362',
      padding: '20px',
      margin: '10px',
      backgroundColor: '#30363f',
      borderRadius: '10px',
      minHeight: '100px',
    }}>
      <h2>{title}</h2>
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
