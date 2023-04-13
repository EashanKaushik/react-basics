import './App.css';

function App() {
  return (
    <div className="App">
      <User age={23} email="@gmail.com" />
      <User age={21} email="@nyu.edu" />
      <User />
    </div>
  );
}

const User = (props) => {
  const name = "eashan";
  const head = <h1>{name}</h1>;
  const age = <h2>{props.age}</h2>;
  const email = <h2>{props.email}</h2>;
  const subject = <h2>mysubject</h2>;

  const user = (
    <div>
      {head}
      {age}
      {email}
      {subject}
    </div>
  );

  return user;
}

export default App;
