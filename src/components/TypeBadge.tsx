type Props = {
  type: string;
};
export default function TypeBadge(props: Props) {
  let color = "";
  if (props.type == "grass") color = "bg-green-500";
  if (props.type == "fire") color = "bg-red-500";
  if (props.type == "water") color = "bg-blue-500";
  if (props.type == "electric") color = "bg-yellow-500";
  if (props.type == "ice") color = "bg-cyan-500";
  if (props.type == "fighting") color = "bg-red-700";
  if (props.type == "poison") color = "bg-purple-500";
  if (props.type == "ground") color = "bg-yellow-700";
  if (props.type == "flying") color = "bg-indigo-300";
  if (props.type == "psychic") color = "bg-pink-500";
  if (props.type == "bug") color = "bg-lime-500";
  if (props.type == "rock") color = "bg-yellow-800";
  if (props.type == "ghost") color = "bg-purple-700";
  if (props.type == "dragon") color = "bg-amber-500";
  if (props.type == "dark") color = "bg-black";
  if (props.type == "steel") color = "bg-slate-500";
  if (props.type == "fairy") color = "bg-pink-300";
  if (props.type == "normal") color = "bg-gray-500";

  return (
    <p
      key={props.type}
      className={`text-xs text-white mx-1 mt-2 mb-3 rounded-md px-2 py-1 ${color}`}
    >
      {props.type.charAt(0).toUpperCase() + props.type.slice(1)}
    </p>
  );
}
