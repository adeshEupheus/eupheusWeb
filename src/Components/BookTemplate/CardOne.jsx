const CardOne = ({headLine, points}) => {
    return (
   <div className="box-content h-fit w-48 rounded-lg bg-orange-100">
       <h3 className="font-normal w-full p-2 place-items-center justify-center text-white rounded-t-lg bg-orange-900 float-left">{headLine}</h3>
       <div className="font-medium gap-1">
       <ul className="p-2 justify-center gap-2 list-inside">
       {points.map((point) => {
         return (
         <li className="list-disc">{point}</li>
         )
       })}
     
       </ul>
       </div>
         </div>
   )
 }

 export default CardOne