const Card = ( {title} ) => {
  return(
    <div>
      <h2>{title}</h2>
    </div>
  )
}

const App = ({title}) => {
  return(
    <div>
    <h2>Functional Arrow Components</h2>
    <Card title = "Kung Fu Panda"/>
    <Card title = "Despicable Me"/>
    <Card title = "Minions"/>
    <Card title = "Cars"/>

    </div>
  )
}

export default App
