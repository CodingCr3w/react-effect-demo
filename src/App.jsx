import * as React from "react";
import "./styles.css";

function HelloWorld() {
  const [greeting, setGreeting] = React.useState("Hello");
  const [subject, setSubject] = React.useState("World");
  const [_, reRender] = React.useState();

  React.useEffect(() => {
    console.log(
      'SOMETHING changed in "HelloWorld" component, or "HelloWorld" re-rendered'
    );
  }); // <- no dependencies !

  React.useEffect(() => {
    console.log("I will only log once, as I synchronize with NOTHING");
  }, []); // <- empty array as dependencies

  React.useEffect(() => {
    console.log("greeting AND/OR subject changed");
  }, [greeting, subject]); // <- greeting and subject as dependencies

  return (
    <div>
      <button onClick={() => reRender({})}>Force re-render</button>
      <div>
        <label htmlFor="greeting">Greeting : </label>
        <input
          id="greeting"
          value={greeting}
          onChange={(event) => setGreeting(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="subject">Subject : </label>
        <input
          id="subject"
          value={subject}
          onChange={(event) => setSubject(event.target.value)}
        />
      </div>
      <p>
        {greeting} {subject}
      </p>
    </div>
  );
}

export default function App() {
  const [_, reRender] = React.useState();
  return (
    <>
      <button onClick={() => reRender({})}>Force re-render App</button>
      <div className="App">
        <HelloWorld />
      </div>
    </>
  );
}
