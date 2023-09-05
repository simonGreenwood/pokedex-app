export default function Gradient(props: {
  type: string;
  children: React.ReactNode;
}) {
  // add a cool gradient to props.children. it should look like this:
  //relative flex place-items-center
  // before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10  before:lg:h-[360px] z-[-1]
  //after:absolute after:-z-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']

  const generateColors = (type: string) => {
    let color1 = "";
    let color2 = "";
    if (type == "grass") {
      color1 = "from-teal-400";
      color2 = "via-lime-800";
    }
    if (type == "fire") {
      color1 = "from-red-400";
      color2 = "via-yellow-800";
    }
    if (type == "water") {
      color1 = "from-cyan-400";
      color2 = "via-blue-800";
    }
    if (type == "electric") {
      color1 = "from-yellow-400";
      color2 = "via-yellow-800";
    }
    if (type == "ice") {
      color1 = "from-cyan-600";
      color2 = "via-blue-300";
    }
    if (type == "fighting") {
      color1 = "from-red-300";
      color2 = "via-orange-800";
    }
    if (type == "poison") {
      color1 = "from-fuchsia-600";
      color2 = "via-purple-800";
    }
    if (type == "ground") {
      color1 = "from-amber-600";
      color2 = "via-orange-800";
    }
    if (type == "flying") {
      color1 = "from-cyan-300";
      color2 = "via-blue-300";
    }
    if (type == "psychic") {
      color1 = "from-fuchsia-400";
      color2 = "via-pink-800";
    }
    if (type == "bug") {
      color1 = "from-lime-400";
      color2 = "via-green-800";
    }
    if (type == "rock") {
      color1 = "from-orange-400";
      color2 = "via-stone-500";
    }

    if (type == "ghost") {
      color1 = "from-fuchsia-400";
      color2 = "via-purple-800";
    }

    if (type == "dragon") {
      color1 = "from-amber-300";
      color2 = "via-yellow-700";
    }

    if (type == "dark") {
      color1 = "from-purple-800";
      color2 = "via-gray-700";
    }

    if (type == "steel") {
      color1 = "from-slate-400";
      color2 = "via-cyan-950";
    }

    if (type == "fairy") {
      color1 = "from-fuchsia-400";
      color2 = "via-pink-400";
    }

    if (type == "normal") {
      color1 = "from-white";
      color2 = "via-gray-600";
    }
    return { color1, color2 };
  };
  const colors = generateColors(props.type);
  return (
    <div className="p-1">
      <div className={`bg-gradient-radial ${colors.color1} `}>
        <div
          className={`bg-gradient-conic from-transparent ${colors.color2} via-30% `}
        >
          <div className="bg-gradient-radial from-transparent to-gray-800 to-70%">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
}
