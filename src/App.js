import styles from './App.module.css';
import { User } from './User.js'
import { Text } from './Text.js'
import { Visible } from "./Visible.js"

function App() {
  const message = "Hello World! from"
  const name = <p>Eashan</p>;

  const userData = [
    { name: "Eashan", age: 16, sex: "M", langauge: ["py", "Ml", "na"] },
    { name: "Srijan", age: 22, sex: "F", langauge: ["se", "gr"] },
    { name: "Rishab", age: 20, sex: "F", langauge: [] },]

  const user = (
    <div>
      {message}{name}
    </div>);

  return (
    <div className={styles.App}>
      {user}
      {
        userData.map((key, value) => {
          return <User key={value} name={key.name} age={key.age} sex={key.sex} langauge={key.langauge} showButton={true} />
        })
      }
      <Text />
      <Visible />
    </div>
  )
}

export default App;
