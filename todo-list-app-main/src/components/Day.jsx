import ArrowR from "./icons/ArrowR";
import ArrowL from "./icons/ArrowL";

import { getNameDay } from "../helpers/getNameDay";
import { getDate } from "../helpers/getDate";

const Day = ({ dateM, setDateM }) => {
  const addDays = (date) => {
    let addDate = new Date(dateM);
    addDate.setDate(date.getDate() + 1);
    return addDate;
  };
  const restDays = (date) => {
    let restDate = new Date(dateM);
    restDate.setDate(date.getDate() - 1);
    return restDate;
  };

  const handleRight = () => {
    //console.log('right');
    setDateM(addDays(dateM));
  };
  const handleLeft = () => {
    setDateM(restDays(dateM));
  };

  return (
    <section className="flex justify-center items-center gap-8 my-10 text-white">
      <p
        onClick={handleLeft}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <ArrowL />
      </p>
      <div className="w-[155px] text-center">
        <h4 className="text-3xl font-semibold">{getNameDay(dateM)}</h4>
        <p className="text-sm text-white/70">{getDate(dateM)}</p>
      </div>
      <p
        onClick={handleRight}
        className="cursor-pointer hover:scale-110 transition-transform duration-200"
      >
        <ArrowR />
      </p>
    </section>
  );
};

export default Day;
