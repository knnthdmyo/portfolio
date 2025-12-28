import { CONTACT, SOCIAL_NETWORKS } from '@/assets/data/dummy';
import LaptopPhone from '@assets/images/laptop-phone.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ReachOut = () => {
  return (
    <div className="box-border md:p-20 p-8 flex flex-col lg:flex-row lg:items-center gap-8">
      <div className="lg:w-1/2 box-border md:p-0 p-8 lg:block hidden">
        <img src={LaptopPhone} alt="workspace" className="object-fit rounded-lg opacity-80" />
      </div>
      <div className="lg:w-1/2 flex flex-col gap-6 lg:pl-20">
        <div className="flex flex-col md:gap-2">
          <span className="text-sm uppercase tracking-widest text-sky-500 font-medium">Get In Touch</span>
          <h1 className="md:text-6xl text-4xl font-light tracking-tight">Let's Connect</h1>
        </div>
        
        <div className="w-20 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400" />

        <div className="flex flex-col gap-3">
          {CONTACT.map((contact, index) => (
            <span className="flex items-center gap-4 text-gray-600 dark:text-gray-300 hover:text-sky-500 dark:hover:text-sky-400 transition-colors" key={index}>
              <FontAwesomeIcon icon={contact.icon} className="text-sky-500 dark:text-sky-400 w-5" />
              {contact.value}
            </span>
          ))}
        </div>
        
        <div className="flex flex-col gap-3 mt-4">
          <span className="text-xs uppercase tracking-widest text-gray-400 dark:text-gray-500 font-medium">Follow Me</span>
          <div className="flex gap-4">
            {SOCIAL_NETWORKS.map((socialNetwork, index) => (
              <a
                className="text-2xl text-gray-500 dark:text-gray-400 hover:text-sky-500 dark:hover:text-sky-400 hover:scale-110 transition-all duration-300"
                href={socialNetwork.link}
                target="_blank"
                rel="noreferrer"
                key={index}
              >
                <FontAwesomeIcon icon={socialNetwork.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
