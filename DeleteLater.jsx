const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);

const lower_than_200 = prices.filter((p) => {
  return p < 200;
});

console.log(lower_than_200);

const timer = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Done!");
  }, 3000);
});

console.log(timer);

import { useState, useMemo, useCallback } from "react";

function Form() {
  const [email, setEmail] = useState("");

  const emailStats = useMemo(() => {
    return email ? <div>Email is available</div> : <div>Email is empty</div>;
  }, []);

  return (
    <form action="">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      {emailStats}
    </form>
  );
}

function Page() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    console.log("button was clicked");
    setCount(count + 1);
  };

  return (
    <div>
      <Button handleClick={handleClick} />
    </div>
  );
}

const Button = React.memo(({ handleClick }) => {
  return <button onClick={handleClick}>click me</button>;
});
