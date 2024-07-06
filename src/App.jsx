import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  let whiteText = ["black", "green", "indigo", "olive", "red"];

  const changeBlue = () => {
    color !== "red" ? setColor("red") : setColor("olive");
  };
  return (
    <div
      className="w-full h-screen duration-800"
      style={{ backgroundColor: color }}
    >
      <div className="text-4xl grid place-content-center w-full h-screen">
        {whiteText.find((each) => each === color) ? (
          <h1 className="font-bold uppercase text-white">I am on {color}</h1>
        ) : (
          <h1 className="font-bold uppercase">I am on {color}</h1>
        )}
      </div>
      <div className="fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md">
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-red-600 text-white"
            onClick={changeBlue}
          >
            Red
          </button>

          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-indigo-600 text-white"
            onClick={() =>
              color !== "indigo" ? setColor("indigo") : setColor("olive")
            }
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-yellow-600 text-white"
            onClick={() =>
              color !== "yellow" ? setColor("yellow") : setColor("olive")
            }
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-black text-white"
            onClick={() =>
              color !== "black" ? setColor("black") : setColor("olive")
            }
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-orange-600 text-white"
            onClick={() =>
              color !== "orange" ? setColor("orange") : setColor("olive")
            }
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-pink-600 text-white"
            onClick={() =>
              color !== "pink" ? setColor("pink") : setColor("olive")
            }
          >
            Pink
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-green-600 text-white"
            onClick={() =>
              color !== "green" ? setColor("green") : setColor("olive")
            }
          >
            Green
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
