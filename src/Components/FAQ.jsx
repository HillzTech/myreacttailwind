import React, { useState } from 'react';

const AccordionItem = ({ title, content, isOpen, toggle }) => {
  return (
    
    <div className="border border-t-0 w-[90%] ml-auto mr-auto border-neutral-200 bg-yellow-700 rounded-[20%] mt-3 dark:border-neutral-600 dark:bg-neutral-800" id='FAQ'>
      <h2 className="mb-0">
         
        <button
          className={`${
            isOpen
              ? `text-primary [box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:!text-primary-400 dark:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]`
              : `transition-none rounded-b-[15px]`
          } group relative flex w-full items-center rounded-t-[15px] border-0 bg-black px-5 py-4 text-left text-base text-white transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white`}
          type="button"
          onClick={toggle}
          aria-expanded={isOpen}
        >
          {title}
          <span
            className={`${
              isOpen
                ? `rotate-[-180deg] -mr-1`
                : `rotate-0 fill-[#212529] dark:fill-white`
            } ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out motion-reduce:transition-none dark:fill-blue-300`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </h2>
      {isOpen && (
        <div className="px-5 py-4">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

const Accordion = () => {
  const [accordionItems, setAccordionItems] = useState([
    { id: 1, title: 'Why does my dog eat grass?', content: 'Dogs eat grass to satisfy dietary needs or to provide treatment for themselves when feeling sick. Also, a dog who feels sick to his stomach may find a quick natural remedy for this by eating grass.', isOpen: false },
    { id: 2, title: 'Why should i give my pet medication for heartworm, fleas, or tick?', content: 'Heartworm medication should be provided for pets on a consistent basis by the time they reach the age of six months, especially in areas where mosquitoes are prevalent. It is better to be proactive in fighting fleas and ticks since they can be harmfull to our pets if they pounce.', isOpen: false },
    { id: 3, title: 'How often should i give my pet a bath?', content: 'The recommended frequency for washing your pets is once a month. It is important to remember that washing your pets more frequently than this could cause their skin to get too dry for comfort. However, if the need arise for a second bath, try to use only water for the wash or a shampoo that provides moisture for their skin.', isOpen: false },
  ]);

  const toggleAccordionItem = (itemId) => {
    setAccordionItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <div>
      {accordionItems.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={item.isOpen}
          toggle={() => toggleAccordionItem(item.id)}
        />
      ))}
    </div>
  );
};

export default Accordion;
