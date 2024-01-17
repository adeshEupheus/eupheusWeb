const CardSecond = ({ headLine, para, image }) => {
  return (
    <button className="flex flex-col transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 hover:bg-orange-100 duration-300">
      <div className="box-content h-56 w-56 p-4 border-4 flex flex-col place-items-center justify-center">
        <img src={image} className="w-fit h-12 mb-4" alt="" />
        <h3 className="font-bold text-orange-700">{headLine}</h3>
        <div className="font-medium gap-1">
          <div className="font-medium">{para}</div>
        </div>
      </div>
    </button>
  );
};

export default CardSecond;
