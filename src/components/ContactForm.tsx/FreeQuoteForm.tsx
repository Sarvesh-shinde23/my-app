import React from 'react';

function FreeQuoteForm() {
  return (
    <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col px-12 pt-20 pb-32 mx-auto w-full bg-white rounded-none max-md:px-5 max-md:pb-24 max-md:mt-2.5 max-md:max-w-full">
        <div className="flex gap-5 justify-between items-start max-md:max-w-full">
          <div className="flex flex-col mt-2.5">
            <h2 className="text-4xl font-bold leading-tight text-blue-950">
              Get a free quote
            </h2>
            <p className="self-start mt-6 text-lg leading-loose text-blue-950 text-opacity-80">
              Protect your awesome family
            </p>
          </div>
          <div
            className="flex shrink-0 bg-cyan-100 h-[75px] rounded-[37px] w-[75px]"
            aria-hidden="true"
          />
        </div>
        <form className="mt-12 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
          <div className="flex gap-5 justify-between text-base whitespace-nowrap text-neutral-500">
            <label className="sr-only" htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              placeholder="Name"
              className="overflow-hidden px-5 py-5 bg-white rounded-xl border border-gray-200 border-solid shadow-[0px_0px_20px_rgba(20,39,82,0.1)] max-md:px-5"
            />
            <label className="sr-only" htmlFor="phone">Phone</label>
            <input
              id="phone"
              type="tel"
              placeholder="Phone"
              className="overflow-hidden px-5 py-5 bg-white rounded-xl border border-gray-200 border-solid shadow-[0px_0px_20px_rgba(20,39,82,0.1)] max-md:px-5"
            />
          </div>
          <label className="sr-only" htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Email"
            className="overflow-hidden px-5 py-5 mt-5 text-base whitespace-nowrap bg-white rounded-xl border border-gray-200 border-solid shadow-[0px_0px_20px_rgba(20,39,82,0.1)] text-neutral-500 max-md:px-5 max-md:mr-2.5 max-md:max-w-full w-full"
          />
          <label className="sr-only" htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your message"
            className="flex shrink-0 mt-5 max-w-full bg-white rounded-xl border border-gray-200 border-solid h-[172px] shadow-[0px_0px_20px_rgba(20,39,82,0.1)] w-full max-md:mr-2.5 p-5"
          />
          <button
            type="submit"
            className="px-16 py-5 mt-5 text-lg leading-none text-center text-white bg-sky-500 rounded-[150px] shadow-[0px_0px_20px_rgba(20,39,82,0.1)] max-md:px-5 max-md:mr-2.5 max-md:max-w-full w-full"
          >
            Get a quote
          </button>
        </form>
      </div>
    </div>
  );
}

export default FreeQuoteForm;
