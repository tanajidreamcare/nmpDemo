import Image from "next/image";
import { AiOutlineMessage } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';

const Martyrs = () => {
  const officerCard = [
    { img : "/officer.png", name:"suyash wagh", post:"IAS", dob:"18-18-2018"},
    { img : "/officer.png", name:"suyash wagh", post:"IAS", dob:"18-18-2018"},
    { img : "/officer.png", name:"suyash wagh", post:"IAS", dob:"18-18-2018"},
  ];

  return (
    <div>
      <div className="text-center mb-14 mt-52">
        <h1 className="text-5xl font-extrabold leading-9 text-[#15233E]">Martyrs</h1>
      </div>
      <div className="flex justify-center w-full">
      <div className="grid items-center justify-center grid-cols-3">
      {officerCard.map((card, index) => (
        <div key={index} className="border rounded-lg p-4 shadow-2xl w-[362px] h-[377px] my-10 mx-5">
          <div className="flex justify-center bg-blue-950 rounded-xl h-[239px]">
            <Image src={card.img} height={253} width={301} />
          </div>
          <div className="text-center">
            <div>
              <h1 className="mt-2 text-lg font-semibold text-orange-600">{card.name}</h1>
            </div>
            <div>
              <h1 className="mt-1 text-sm font-semibold">{card.post}</h1>
            </div>
            <div className="flex justify-center">
              <h1 className="mt-1 text-sm font-semibold text-orange-600">{card.dob}</h1>
            </div>
          </div>
        </div>
      ))}
    </div>
        </div>
    </div>
  );
};

export default Martyrs;
