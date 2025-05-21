type ValueProps = {
  value: string;
};

const Display = ({ value }: ValueProps) => {
  return (
    <div className="p-4 w-4/5 border-2 bg-yellow-200 text-purple-800 uppercase text-xl text-end font-mono rounded-xl mr-2 my-8 md:p-8 md:text-3xl">
      {value}
    </div>
  );
};

export default Display;
