import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How do I apply for a scholarship?",
    answer: "You can apply for a scholarship by creating an account, browsing available scholarships, and following the application instructions provided."
  },
  {
    question: "Who is eligible for scholarships?",
    answer: "Eligibility varies depending on the scholarship. Common criteria include academic performance, financial need, and specific fields of study."
  },
  {
    question: "Is there a fee to apply?",
    answer: "No, applying for scholarships through ScholarEase is completely free."
  },
  {
    question: "How will I know if I am selected?",
    answer: "You will receive a notification via email and can check your application status in your dashboard."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50 text-center mb-20">
      <h2 className="text-4xl font-extrabold mb-6 text-gray-800">Frequently Asked Questions</h2>
      <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
        Have questions? We've got answers. Explore our FAQ section to learn more about how ScholarEase works.
      </p>
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white shadow-lg rounded-2xl overflow-hidden">
            <button
              className="w-full flex justify-between items-center p-5 text-left text-lg font-medium text-gray-800 hover:bg-gray-100"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown className={`transition-transform ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-40 p-5" : "max-h-0 p-0"}`}>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
