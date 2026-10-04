import { useState } from "react";
import Child1 from "./Child1";
import Home from "./Home";
import User from "./User";

const App = () => {
    console.log("App Component");

    let [data, setData] = useState("Hii");  // [ud, f]
    let [count, setCount] = useState(0);

    const change = () => setData("Byeee");
    const increment = () => setCount ((prev) => prev + 1);
    const decrement = () => setCount ((prev) => (prev > 0 ? prev - 1 : 0));
    const reset = () => setCount(0);

    const UserData = {
        id: 1,
        fullname: {fname : "John", lname : "Doe" },
        age: 20,
        address : {
            city : "Noida",
            state: "UP",
            pin: 201301,
            location: {lat : 201.389, long : 301.789},
        }
    }
    return (
        <div>
            <h1>I am App Component {data}</h1>
            <button onClick={change}>update</button>

            <h1>Counter {count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={reset}>reset</button>
            
            <hr />
            <Child1 str = "Hello World"/>
            <Child1 str = "Galaxy"/>
            <Child1 str = "Universe"/>

            <hr/>
            <Home UserData={UserData}/>

        </div>
    );
};
export default App;