import React from "react";
import PageWrapper from "../components/PageWrapper";

const RefundPolicy = () => {
  return (
    <PageWrapper>
      <div className="px-4 sm:px-6 lg:px-16 py-20 bg-white text-gray-900 leading-relaxed">
        <div className="max-w-4xl mx-auto">
          {/* Title + Intro */}
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0A66C2] mb-6 tracking-tight text-center">
            Smartwave Refund Policy
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl text-center mb-12 max-w-2xl mx-auto">
            At Smartwave Tutors Hub, your academic journey is our top priority.
            This refund policy outlines the terms under which we offer refunds
            to ensure transparency and trust.
          </p>

          {/* Section: Refund Eligibility */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Refund Eligibility & Conditions
            </h2>
            <ul className="space-y-5 text-gray-800 text-base sm:text-lg pl-4 list-disc">
              <li>
                <strong>Exam or Online Class Cancellation:</strong> Full refund
                if your scheduled session is cancelled.
              </li>
              <li>
                <strong>Late Delivery:</strong> Eligible for a refund if
                deadlines are missed and deliverables are incomplete.
              </li>
              <li>
                <strong>Change of Mind:</strong> Partial refund is available
                before the service begins.
              </li>
              <li>
                <strong>Poor Grades:</strong> You may request a refund if you
                receive a failing grade (F), upon providing valid proof.
              </li>
            </ul>
          </section>

          {/* Section: Refund Process */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Refund Process
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-4">
              We’ve made the refund process straightforward:
            </p>
            <ul className="space-y-5 text-gray-800 text-base sm:text-lg pl-4 list-disc">
              <li>
                <strong>Exams:</strong> Instant refund after verification — no
                expiration date.
              </li>
              <li>
                <strong>Online Classes:</strong> Stay updated with your tutor’s
                progress. If you're not satisfied, notify us promptly.
              </li>
              <li>
                <strong>Note:</strong> Refunds may be partial if the course is
                near completion due to monthly tutor payments.
              </li>
              <li>
                <strong>Proof of Grades:</strong> Grade screenshots are
                mandatory for exam-related refunds.
              </li>
            </ul>
          </section>

          {/* Section: How to Request */}
          <section className="mb-16">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              How to Request a Refund
            </h2>
            <ol className="list-decimal list-inside space-y-5 text-gray-800 text-base sm:text-lg">
              <li>
                <strong>Notify Smartwave:</strong> Email us within 7 days of
                your service completion at{" "}
                <a
                  href="mailto:smartwavetutorshub@gmail.com"
                  className="text-[#0A66C2] underline"
                >
                  smartwavetutorshub@gmail.com
                </a>
                .
              </li>
              <li>
                <strong>Provide Explanation:</strong> Let us know the reason for
                your request.
              </li>
              <li>
                <strong>Attach Proof:</strong> Screenshots of your grades,
                session logs, or confirmation emails help us evaluate quickly.
              </li>
              <li>
                <strong>Evaluation:</strong> Our team will review your request
                and update you on its status.
              </li>
              <li>
                <strong>Refund Issuance:</strong> Approved refunds are sent back
                via your original payment method.
              </li>
            </ol>
          </section>

          {/* Section: Contact */}
          <section className="mb-4">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#0A66C2] mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-700 text-base sm:text-lg mb-2">
              We’re here to help. Reach out to us anytime:
            </p>
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
              <li>Live Chat: Available on our website</li>
            </ul>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
};

export default RefundPolicy;
