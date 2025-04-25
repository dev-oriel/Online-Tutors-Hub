import React from "react";
import PageWrapper from "../components/PageWrapper";

const PrivacyPolicy = () => {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-6 lg:px-16 py-20 bg-white text-gray-900 leading-relaxed">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0A66C2] mb-6 tracking-tight text-center">
            Privacy Policy
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl text-center mb-12 max-w-2xl mx-auto">
            Your privacy is important to us. This Privacy Policy explains how
            Smartwave Tutors Hub collects, uses, and safeguards your personal
            information.
          </p>

          {/* Section: Information Collection */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Information We Collect
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-800 text-base sm:text-lg">
              <li>
                Personal information (e.g., name, email address, phone number)
              </li>
              <li>Academic details and service requests</li>
              <li>Payment and billing information</li>
              <li>Usage data (e.g., pages visited, session duration)</li>
            </ul>
          </section>

          {/* Section: How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-4 text-gray-800 text-base sm:text-lg">
              <li>To deliver academic services as requested</li>
              <li>To process payments securely</li>
              <li>To improve our platform and offerings</li>
              <li>To communicate updates, offers, and responses</li>
            </ul>
          </section>

          {/* Section: Sharing Information */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Information Sharing
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              We do not sell or rent your personal information. We may share
              information with trusted service providers (e.g., payment
              processors) only when necessary to fulfill your request or comply
              with legal obligations.
            </p>
          </section>

          {/* Section: Cookies & Tracking */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Our website uses cookies to enhance user experience and analyze
              site traffic. You can control cookie preferences through your
              browser settings.
            </p>
          </section>

          {/* Section: Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Children’s Privacy
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              Our services are not directed to children under 13. We do not
              knowingly collect personal information from children without
              parental consent.
            </p>
          </section>

          {/* Section: Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Your Privacy Rights
            </h2>
            <p className="text-gray-700 text-base sm:text-lg">
              You have the right to access, update, or delete your personal
              information. To exercise these rights, contact us using the
              information below.
            </p>
          </section>

          {/* Section: Contact */}
          <section className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Contact Us
            </h2>
            <ul className="text-gray-800 text-base sm:text-lg space-y-2 pl-4 list-disc">
              <li>
                Email:{" "}
                <a
                  href="mailto:smartwavetutorshub@gmail.com"
                  className="text-[#0A66C2] underline"
                >
                  smartwavetutorshub@gmail.com
                </a>
              </li>
              <li>Phone: </li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default PrivacyPolicy;
