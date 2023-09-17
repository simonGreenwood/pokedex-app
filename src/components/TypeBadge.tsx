type Props = {
  type: string;
};
export default function TypeBadge(props: Props) {
  let color = "";
  let emoji = "";
  if (props.type == "grass") {
    emoji = "🌱";
    color = "border-green-500";
  }
  if (props.type == "fire") {
    emoji = "🔥";
    color = "border-red-500";
  }
  if (props.type == "water") {
    emoji = "💧";
    color = "border-blue-500";
  }
  if (props.type == "electric") {
    emoji = "⚡️";
    color = "border-yellow-500";
  }
  if (props.type == "ice") {
    emoji = "❄️";
    color = "border-cyan-500";
  }
  if (props.type == "fighting") {
    emoji = "🥊";
    color = "border-red-700";
  }
  if (props.type == "poison") {
    emoji = "☠️";
    color = "border-purple-500";
  }
  if (props.type == "ground") {
    emoji = "🌍";
    color = "border-yellow-700";
  }
  if (props.type == "flying") {
    emoji = "🦅";
    color = "border-indigo-300";
  }
  if (props.type == "psychic") {
    emoji = "🧠";
    color = "border-pink-500";
  }
  if (props.type == "bug") {
    emoji = "🐛";
    color = "border-lime-500";
  }
  if (props.type == "rock") {
    emoji = "🪨";
    color = "border-yellow-800";
  }
  if (props.type == "ghost") {
    emoji = "👻";
    color = "border-purple-700";
  }
  if (props.type == "dragon") {
    emoji = "🐉";
    color = "border-amber-500";
  }
  if (props.type == "dark") {
    emoji = "🌑";
    color = "border-purple-700";
  }
  if (props.type == "steel") {
    emoji = "⚙️";
    color = "border-slate-500";
  }
  if (props.type == "fairy") {
    emoji = "🧚";
    color = "border-pink-300";
  }
  if (props.type == "normal") {
    emoji = "👤";
    color = "border-gray-500";
  }
  if (props.type == "legendary") {
    emoji = "🌟";
    color = "border-yellow-500";
  }

  if (props.type == "mythical") {
    emoji = "✨";
    color = "border-yellow-500";
  }

  return (
    <p
      key={props.type}
      className={`text-xs text-white mx-1 mt-2  rounded-lg px-2 py-1 border ${color} whitespace-nowrap`}
    >
      {emoji} {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
    </p>
  );
}
