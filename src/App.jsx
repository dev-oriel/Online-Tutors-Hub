import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { delayedLazy } from "./utils/delayedLazy";
import WhatsAppButton from "./components/WhatsAppButton";

// Lazy load with artificial delay
const Home = delayedLazy(() => import("./pages/Home"));
const OnlineClass = delayedLazy(() => import("./pages/OnlineClass"));
const AssignmentHelp = delayedLazy(() => import("./pages/AssignmentHelp"));
const CriminalJusticeHelp = delayedLazy(() =>
  import("./pages/CriminalJusticeHelp")
);
const SociologyHelp = delayedLazy(() => import("./pages/SociologyHelp"));
const TakeMyClass = delayedLazy(() => import("./pages/TakeMyClass"));
const AccountingClassHelp = delayedLazy(() =>
  import("./pages/AccountingClassHelp")
);
const EngineeringClassHelp = delayedLazy(() =>
  import("./pages/EngineeringClassHelp")
);
const BiologyClassHelp = delayedLazy(() => import("./pages/BiologyClassHelp"));
const MathClassHelp = delayedLazy(() => import("./pages/MathClassHelp"));
const ExamHelp = delayedLazy(() => import("./pages/ExamHelp"));
const OnlineExams = delayedLazy(() => import("./pages/OnlineExams"));
const FinanceClassHelp = delayedLazy(() => import("./pages/FinanceClassHelp"));
const MarketingClassHelp = delayedLazy(() =>
  import("./pages/MarketingClassHelp")
);
const PhysicsClassHelp = delayedLazy(() => import("./pages/PhysicsClassHelp"));
const TeasExamHelp = delayedLazy(() => import("./pages/TeasExamHelp"));
const Contact = delayedLazy(() => import("./pages/Contact"));
const FAQ = delayedLazy(() => import("./pages/FAQ"));
const Reviews = delayedLazy(() => import("./pages/Reviews"));
const PayForOnlineClass = delayedLazy(() =>
  import("./pages/PayForOnlineClass")
);
const ProctoredExams = delayedLazy(() => import("./pages/ProctoredExams"));
const TakeMyClassReviews = delayedLazy(() =>
  import("./pages/TakeMyClassReviews")
);
const RefundPolicy = delayedLazy(() => import("./pages/RefundPolicy"));
const PrivacyPolicy = delayedLazy(() => import("./pages/PrivacyPolicy"));
const CitationGenerator = delayedLazy(() =>
  import("./pages/CitationGenerator")
);
const PlagiarismChecker = delayedLazy(() =>
  import("./pages/PlagiarismChecker")
);
const ArticleRewriter = delayedLazy(() => import("./pages/ArticleRewriter"));
const NotFound = delayedLazy(() => import("./pages/NotFound"));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/online-class" element={<OnlineClass />} />
            <Route path="/assignment-help" element={<AssignmentHelp />} />
            <Route
              path="/criminal-justice-help"
              element={<CriminalJusticeHelp />}
            />
            <Route path="/sociology-help" element={<SociologyHelp />} />
            <Route path="/take-my-class" element={<TakeMyClass />} />
            <Route
              path="/accounting-class-help"
              element={<AccountingClassHelp />}
            />
            <Route
              path="/engineering-class-help"
              element={<EngineeringClassHelp />}
            />
            <Route path="/biology-class-help" element={<BiologyClassHelp />} />
            <Route path="/math-class-help" element={<MathClassHelp />} />
            <Route path="/exam-help" element={<ExamHelp />} />
            <Route path="/online-exams" element={<OnlineExams />} />
            <Route path="/finance-class-help" element={<FinanceClassHelp />} />
            <Route
              path="/marketing-class-help"
              element={<MarketingClassHelp />}
            />
            <Route path="/physics-class-help" element={<PhysicsClassHelp />} />
            <Route path="/teas-exam-help" element={<TeasExamHelp />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route
              path="/pay-for-online-class"
              element={<PayForOnlineClass />}
            />
            <Route path="/proctored-exams" element={<ProctoredExams />} />
            <Route
              path="/take-my-class-reviews"
              element={<TakeMyClassReviews />}
            />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/citation-generator" element={<CitationGenerator />} />
            <Route path="/plagiarism-checker" element={<PlagiarismChecker />} />
            <Route path="/article-rewriter" element={<ArticleRewriter />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <WhatsAppButton />
        <Footer />
      </div>
    </Suspense>
  );
}

export default App;
