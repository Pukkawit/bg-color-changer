import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("olive");

  const pureColors = ["blue", "black", "purple", "violet"];

  const whiteText = [
    "black",
    "green",
    "indigo",
    "olive",
    "red",
    "purple",
    "blue",
    "brown",
  ];
  const allColors = [
    "red",
    "green",
    "violet",
    "orange",
    "pink",
    "black",
    "white",
    "indigo",
    "yellow",
    "blue",
    "lime",
    "purple",
    "fuchsia",
  ];

  const selectedPureColors = () => {
    pureColors.find((eachColor) => {
      eachColor === color;

      return eachColor;
    });
  };

  function toTitleCase(str) {
    return str
      .split(" ") // Split the string into words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize the first letter and make the rest lowercase
      .join(" "); // Join the words back into a single string
  }
  /* const changeBlue = () => {
    color !== "red" ? setColor("red") : setColor("olive");
  }; */

  const vowels = ["a", "e", "i", "o", "u"];

  const article = () => {
    const vowel = vowels.find((letter) => color.startsWith(letter));
    if (vowel) {
      return "an";
    } else {
      return "a";
    }
  };
  const transitionDuration = {
    transitionDuration: "300ms",
  };
  return (
    <div
      className="w-full h-screen duration-800"
      style={{ backgroundColor: color }}
    >
      <div className="text-4xl grid place-content-center w-full h-screen duration-100">
        {whiteText.find((each) => each === color) ? (
          <h1 className="font-bold uppercase text-white text-center sm:max-w-72">
            I am a text on {article()} {color}{" "}
            {color === "olive" ? (
              <>
                <span className="italic lowercase">(default)</span> background
              </>
            ) : (
              "background"
            )}
          </h1>
        ) : (
          <h1 className="font-bold uppercase text-center">
            I am on {article()} {color} background
          </h1>
        )}
      </div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-slate-300 px-3 py-2 rounded-md ">
          {allColors.map((eachColor, id) => {
            return (
              <button
                key={`${id}`}
                className={`outline-none px-4 py-[3px] rounded-full  shadow-lg  ${selectedPureColors}
                    ? bg-${eachColor}
                    : bg-${eachColor}-600 
                 hover:bg-${eachColor}-700 active:bg-${eachColor}-800 
                 focus:outline-none focus:ring 
                 focus:ring-${eachColor}-400 
                 ${eachColor === "white" ? "text-black" : "text-white"} 
                 hover:shadow-2xl`}
                style={transitionDuration}
                onClick={() =>
                  color !== eachColor ? setColor(eachColor) : setColor("olive")
                }
              >
                {toTitleCase(eachColor)}
              </button>
            );
          })}

          {/* <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 focus:outline-none focus:ring focus:ring-indigo-400 text-white hover:shadow-2xl"
            style={transitionDuration}
            onClick={() =>
              color !== "indigo" ? setColor("indigo") : setColor("olive")
            }
          >
            Indigo
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-200 text-white hover:shadow-2xl"
            onClick={() =>
              color !== "yellow" ? setColor("yellow") : setColor("olive")
            }
            style={transitionDuration}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-black text-white hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-800 hover:shadow-2xl"
            onClick={() =>
              color !== "black" ? setColor("black") : setColor("olive")
            }
            style={transitionDuration}
          >
            Black
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-orange-600 text-white hover:bg-orange-700 focus:outine-none focus:ring focus:ring-orange-400 hover:shadow-2xl"
            onClick={() =>
              color !== "orange" ? setColor("orange") : setColor("olive")
            }
            style={transitionDuration}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-pink-600 text-white hover:shadow-2xl hover:bg-pink-700 focus:outline-none focus:ring focus:ring-pink-300"
            onClick={() =>
              color !== "pink" ? setColor("pink") : setColor("olive")
            }
            style={transitionDuration}
          >
            Pink
          </button>*/}
          {/* <button
            className="outline-none px-4 py-[3px] rounded-full  shadow-lg bg-lime-600 text-white hover:shadow-2xl hover:bg-green-700 focus:outline-none focus:ring focus:ring-green-300"
            onClick={() =>
              color !== "green" ? setColor("green") : setColor("olive")
            }
            style={transitionDuration}
          >
            Green
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
