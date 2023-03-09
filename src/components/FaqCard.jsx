import React from "react";
import Chevron from "./Chevron";

const FaqCard = (faq) => {
  return (
    <div className="pt-8 pb-6" onClick={() => faq.currTabListener(faq.id)}>
      <div className="flex justify-between items-center">
        <p className="text-neutral-dark-gray text-lg font-medium">{faq.question}</p>
        <Chevron class={`${faq.isOpen ? 'transition-all ease-linear duration-200 stroke-primary-red rotate-180': 'stroke-primary-blue'}`} />
      </div>
      <div
        className={`description h-0 my-0 overflow-hidden transition-all ease-in-out duration-200 ${faq.isOpen && 'h-full my-4'}`}
      >
        Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa,
        ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet
        convallis ultricies. Mauris augue massa, ultricies non ligula.
        Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies.
        Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.
      </div>
    </div>
  );
};

export default FaqCard;
