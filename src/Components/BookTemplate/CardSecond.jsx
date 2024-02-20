const CardSecond = ({ headLine, para, image }) => {
  return (
    <button className="flex flex-col transition ease-in-out delay-150 bg-white hover:-translate-y-1 hover:scale-110 duration-300 xl:justify-center xl:items-center rounded-3xl hover:bg-gray-200 sm:p-3">
      <div className="box-content h-48 w-48 flex flex-col place-items-center p-2 ">
        <img src={image} className="w-fit h-12" alt="" />
        <h3 className="font-bold text-center pt-2">{headLine}</h3>
        <div className="gap-1 font-light w-fit text-center">{para}</div>
      </div>
    </button>
  );
};

export default CardSecond;
