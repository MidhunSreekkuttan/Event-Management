import React from "react";

const TermsandConditions = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white shadow-sm rounded-2xl p-8 md:p-12">

        {/* Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Terms & Conditions
        </h1>

        <p className="text-gray-600 leading-8 mb-10">
          Welcome to our Event Management website. By accessing our website
          and using our services, you agree to comply with the following
          Terms & Conditions. Please read them carefully.
        </p>

        {/* Sections */}
        <div className="space-y-8 text-gray-700 leading-8">

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              1. Acceptance of Terms
            </h2>
            <p>
              By using this website, booking our services, or accessing any
              content, you agree to follow these terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              2. Services
            </h2>
            <p>
              We provide event planning and management services including
              personal, corporate, educational, cultural, and entertainment
              events.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              3. Bookings & Payments
            </h2>
            <p>
              Bookings are subject to availability. Advance payments may be
              required to confirm your reservation. Remaining balance must be
              completed before the event date.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              4. Cancellation & Refunds
            </h2>
            <p>
              Cancellation requests must be submitted in advance. Refunds, if
              applicable, depend on planning progress and vendor commitments.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              5. Client Responsibilities
            </h2>
            <p>
              Clients must provide accurate event details including date,
              venue, guest count, budget, and special requests.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              6. Event Changes
            </h2>
            <p>
              Changes to event schedule, venue, services, or guest count may
              incur additional charges.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              7. Third-Party Vendors
            </h2>
            <p>
              Some services may involve external vendors such as caterers,
              photographers, decorators, and venues. Their services may be
              subject to separate terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              8. Liability
            </h2>
            <p>
              We are not responsible for delays or losses caused by natural
              disasters, strikes, technical failures, or events beyond our
              control.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              9. Website Usage
            </h2>
            <p>
              Users must not misuse the website, attempt unauthorized access,
              upload harmful content, or disrupt services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              10. Intellectual Property
            </h2>
            <p>
              All logos, designs, text, images, and website content belong to
              our company unless otherwise stated.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              11. Changes to Terms
            </h2>
            <p>
              We may update these Terms & Conditions at any time. Continued
              use of the website means acceptance of revised terms.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              12. Contact Us
            </h2>
            <p>
              For any questions regarding these Terms & Conditions, please
              contact us through our official contact page.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TermsandConditions;