import { CONTACT, SOCIAL_NETWORKS } from "@/assets/data/dummy";
import LaptopPhone from "@assets/images/laptop-phone.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

interface ReachOutProps {}

const ReachOut: FunctionComponent<ReachOutProps> = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col lg:flex-row lg:items-center   gap-4 bg-zinc-900 text-white">
      <div className="lg:w-1/2 box-border md:p-0 p-8 lg:block hidden">
        <img src={LaptopPhone} alt="cofveve" className="object-fit" />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-4 lg:pl-20">
        <h1 className="text-4xl ">Reach Out</h1>
        <div className="border-[0.5px] xl:w-2/3 w-full border-white" />

        {CONTACT.map((contact, index) => (
          <span className="flex items-center gap-4" key={index}>
            <FontAwesomeIcon icon={contact.icon} />
            {contact.value}
          </span>
        ))}
        <h1>Connect with me: </h1>
        <div className="flex gap-4">
          {" "}
          {SOCIAL_NETWORKS.map((socialNetwork) => (
            <a
              className="pointer text-2xl"
              href={socialNetwork.link}
              target="_blank"
              rel="noreferrer"
              key={socialNetwork.title}
            >
              <FontAwesomeIcon icon={socialNetwork.icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
