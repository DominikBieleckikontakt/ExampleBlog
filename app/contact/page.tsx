import React from "react";

const ContactPage = () => {
  return (
    <main className="max-w-[45rem] mx-auto max-md:mx-5">
      <h2 className="text-center">Contact with me</h2>
      <div className="grid lg:grid-cols-2 gap-5 lg:gap-10 my-5 text-primary/80">
        <div className="grid gap-5">
          <p>
            If you are interested in advertising on our blog, please reach out
            to us at{" "}
            <a
              href="mailto:ads@yourblog.com"
              className="text-primary/100 font-semibold"
            >
              myexampleblog@gmail.com
            </a>
            . We offer various advertising options to fit your needs and budget.
            Contact us to learn more about our rates and available slots.
          </p>
          <p>
            We are always open to new business opportunities and collaborations.
            If you have a proposal for a partnership or any other business
            inquiries, please contact us at{" "}
            <a
              href="mailto:business@yourblog.com"
              className="text-primary/100 font-semibold"
            >
              business.myexampleblog@gmail.com
            </a>
            . We look forward to hearing from you!
          </p>
        </div>
        <div>
          <div className="mb-3">
            Email:{" "}
            <a href="mailto:contact@yourblog.com">myexampleblog@gmail.com</a>
          </div>
          <div className="my-3">Phone: +123 456 7890</div>
          <div className="mt-3">
            Address: 123 Your Street, Your City, Your Country
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
