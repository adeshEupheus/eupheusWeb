const ResourceCard = ({ headLine, points }) => {
  return (
    <div className="flex flex-col box-content w-full bg-orange-100 rounded-lg place-items-start h-fit md:w-48 lg:w-52">
      <h3 className="font-normal w-full p-2 place-items-center justify-center text-white rounded-t-lg bg-orange-900 float-left">
        {headLine}
      </h3>
      <div className="font-medium gap-1">
        <ul className="p-2 justify-center gap-2 list-outside pl-6">
          {points.map((point) => {
            return <li className="list-disc">{point}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default ResourceCard;
