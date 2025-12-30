'use client';

import { useContact } from '@/viewmodels';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faDownload } from '@fortawesome/free-solid-svg-icons';

const CV_LINK = 'https://drive.google.com/file/d/1BwI5OSUnxb8c8usowPTB-DQKRDB79RC8/view?usp=sharing';

const ReachOut = () => {
  const { contactInfo, socialNetworks, email } = useContact();

  return (
    <div className="box-border flex flex-col">
      <div className="md:py-20 py-12 flex flex-col gap-10 md:gap-14">
        {/* Header */}
        <div className="px-8 md:px-20">
          <span className="text-sm uppercase tracking-widest text-sky-500 font-medium">Get In Touch</span>
          <h1 className="md:text-6xl text-4xl font-light tracking-tight text-gray-800 dark:text-gray-200">Let&apos;s Connect</h1>
          <div className="flex items-center gap-3 mt-3">
            <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-cyan-400" />
            <p className="text-xs text-gray-400">Open for opportunities</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="px-8 md:px-20 flex flex-col gap-4">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <FontAwesomeIcon 
                icon={contact.icon} 
                className="text-sky-500 w-5 group-hover:scale-110 transition-transform duration-300" 
              />
              <span className="text-gray-600 dark:text-gray-300 group-hover:text-sky-500 dark:group-hover:text-sky-400 transition-colors">
                {contact.value}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="px-8 md:px-20 flex flex-wrap gap-4">
          <a
            href={`mailto:${email}?subject=Hello from your portfolio!`}
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-sky-500 hover:bg-sky-400 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: '300ms' }}
          >
            <FontAwesomeIcon icon={faPaperPlane} />
            <span>Say Hello!</span>
          </a>
          <a
            href={CV_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30 opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]"
            style={{ animationDelay: '400ms' }}
          >
            <FontAwesomeIcon icon={faDownload} />
            <span>Download CV</span>
          </a>
        </div>

        {/* Social Networks */}
        <div className="px-8 md:px-20">
          <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-4">Follow Me</p>
          <div className="flex gap-4">
            {socialNetworks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                className="text-2xl text-gray-400 hover:text-sky-500 hover:scale-110 transition-all duration-300"
              >
                <FontAwesomeIcon icon={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200/20 dark:border-gray-700/20 py-8 px-8 md:px-20">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} knnthdmyo • Built with React, TypeScript & too much coffee
          </p>
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-[9px] text-gray-400/50">
            <span>500k+ lines of code</span>
            <span>•</span>
            <span>∞ bugs squashed</span>
            <span>•</span>
            <span>9999+ cups of coffee</span>
            <span>•</span>
            <span>42% will to live</span>
            <span>•</span>
            <span>∞ stackoverflow visits</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReachOut;
