import React, { useState } from "react";

function App() {
  const [toppings, setToppings] = useState(["Cheese"]);
  const [isPepperoniChecked, setIsPepperoniChecked] = useState(false);

  const handlePepperoniChange = () => {
    setIsPepperoniChecked(!isPepperoniChecked);
    if (!isPepperoniChecked) {
      setToppings([...toppings, "Pepperoni"]);
    } else {
      setToppings(toppings.filter(topping => topping !== "Pepperoni"));
    }
  };

  return (
    <div>
      <label>
        Add Pepperoni
        <input
          type="checkbox"
          checked={isPepperoniChecked}
          onChange={handlePepperoniChange}
        />
      </label>
      <ul>
        {toppings.map(topping => (
          <li key={topping}>{topping}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
