
interface Props {
  setShowSolution: (value: boolean) => void;
}

export const BtnSolution = ({ setShowSolution }: Props) => {
  return (
    <button
      className="bg-indigo-500 text-white font-bold py-2 px-4 rounded-full my-5 block mx-auto hover:scale-105 hover:bg-indigo-700 transition-all duration-300"
      onClick={() => setShowSolution(true)}
    >Mostrar Solución</button>
  );
};
