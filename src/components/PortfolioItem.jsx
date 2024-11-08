import React from 'react';

const PortfolioItem = ({ title, imgUrl, stack, link, githubLink, description, backendLink }) => {
  return (
    <div className="flex flex-col border-2 border-stone-900 dark:border-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden group"
      >
        <img
          src={imgUrl}
          alt={title}
          className="p-5 w-full h-36 md:h-48 object-contain group-hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
        />
      </a>

      <div className="w-full p-6 bg-white dark:bg-stone-800 flex flex-col justify-between flex-grow">
        <h3 className="text-xl md:text-2xl mb-3 font-semibold text-stone-900 dark:text-white transition-colors duration-200 ease-in-out group-hover:text-[#995269]">
          {title}
        </h3>

        <div className="flex flex-wrap gap-2 items-center mb-4">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-xs md:text-sm font-semibold border-2 border-stone-900 dark:border-white rounded-full transition-colors duration-200 ease-in-out dark:text-white text-stone-700 hover:bg-[#29ac36] hover:text-[#995269]"
            >
              {item}
            </span>
          ))}
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-3 py-1 text-xs md:text-sm font-semibold border-2 border-[#995269] bg-[#995269] text-white rounded-full mt-2 md:mt-0 hover:bg-transparent hover:text-[#995269] transition-all duration-300"
          >
            GitHub
          </a>
        </div>

        <div className="my-4">
          <span className="text-sm md:text-base text-stone-700 dark:text-white text-left mb-2 block">
            {backendLink && 'Backend Repo:'}
          </span>
          <a
            href={backendLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`${backendLink ? 'bg-gradient-to-r from-[#e16b8c] via-[#995269] to-[#42a5f5]' : 'min-h-[100px]'} inline-block text-sm md:text-base font-semibold  text-white py-2 px-4 rounded-full shadow-lg hover:scale-105 transform transition-all duration-300 ease-in-out hover:shadow-xl`}
          >
            {backendLink}
          </a>
        </div>
        <p className="text-sm md:text-base text-stone-700 dark:text-white text-justify mb-4 flex-grow">
          {description}
        </p>

        <hr className="my-4 border-stone-900 dark:border-white" />
        <p className="text-xs md:text-sm text-center text-stone-500 dark:text-gray-300 mt-3">
          Click above for more details or visit the GitHub repo!
        </p>
      </div>
    </div>
  );
};

export default PortfolioItem;
