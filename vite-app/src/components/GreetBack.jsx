import { useState } from "react";

export default function GreetBack() {
  const [isGreetingVisible, setIsGreetingVisible] = useState(false);
  const [userName, setUserName] = useState("User");

  const greetUser = () => {
    setIsGreetingVisible(true);
  };

  /** @type React.ChangeEventHandler<HTMLInputElement> */
  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  return (
    <>
      <label>Your name:</label>
      {" "}
      <input value={userName} onChange={handleUserNameChange} />
      <br />
      <br />
      <button onClick={greetUser}>Greet me!</button>
      {isGreetingVisible && <p>Greetings, {userName}!</p>}
    </>
  );
}
