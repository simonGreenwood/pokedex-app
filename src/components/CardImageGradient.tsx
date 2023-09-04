export default function Gradient(props: { children: React.ReactNode }) {
  return (
    // add a cool gradient to props.children. it should look like this:
    //relative flex place-items-center
    // before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10  before:lg:h-[360px] z-[-1]
    //after:absolute after:-z-20 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-['']
    <div>
      <div className="bg-gradient-radial via-orange-300 to-purple-800 ">
        <div className="bg-gradient-conic from-transparent via-blue-700 via-30% ">
          {props.children}
        </div>
      </div>
    </div>
  );
}
