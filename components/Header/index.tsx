import React from "react";

const Header = () => {
  return (
    <section className="max-w-[45rem] mx-auto my-24">
      <h1 className="text-center text-4xl sm:text-5xl font-extralight font-greatVibes ">
        myExampleBlog
      </h1>
      <ul className="flex max-md:flex-col max-md:items-center max-md:gap-5 justify-between text-sm my-5 font-light">
        <li>Health and self-care</li>
        <li>Spare time and travels</li>
        <li>Movies & series</li>
        <li>Literature & cultrue</li>
      </ul>
    </section>
  );
};

export default Header;
