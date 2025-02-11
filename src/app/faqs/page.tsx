import React from 'react';

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Card with Dark Gradient Background and Green Glow */}
      <div
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] max-w-4xl"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #262626)',
        }}
      >
        <h1 className="text-4xl font-bold text-[#00ff7f] mb-6">
          Frequently Asked Questions (FAQs) – Naija Tech Fair
        </h1>

        <SectionHeading>For Startups</SectionHeading>
        <FAQItem
          question="Q1: How can my startup participate in Naija Tech Fair?"
          answer="Startups can participate by applying to exhibit their products or services, joining pitch competitions, or attending workshops and networking sessions. Detailed application guidelines and criteria are available on our official website."
        />
        <FAQItem
          question="Q2: What are the criteria for the Startup Pitch Competition?"
          answer="To qualify, startups should be Nigerian tech-enabled companies with a working prototype or minimum viable product, a scalable business model, and a dedicated team. Typically, startups that have raised less than a certain threshold in external funding (e.g., under 50 million Naira) are eligible."
        />
        <FAQItem
          question="Q3: Are there opportunities for mentorship and funding?"
          answer="Yes. Selected startups gain access to structured mentorship programs, investor networking sessions, and incubation opportunities designed to accelerate growth and bridge the gap between innovation and market success."
        />

        <SectionHeading>For Investors</SectionHeading>
        <FAQItem
          question="Q4: How can investors get involved in Naija Tech Fair?"
          answer="Investors can attend the event to discover promising startups, participate in dedicated panel discussions, and join curated matchmaking sessions with pre-screened companies seeking funding."
        />
        <FAQItem
          question="Q5: Are there dedicated sessions for investors to meet startups?"
          answer="Absolutely. The fair includes investor-only sessions where you can review startup portfolios, ask targeted questions, and explore investment opportunities in a focused environment."
        />
        <FAQItem
          question="Q6: How can I access detailed information about the startups presenting at the fair?"
          answer="Registered investors receive a comprehensive directory before the event. This directory contains business profiles, product details, and contact information, enabling you to plan targeted interactions."
        />

        <SectionHeading>For Students</SectionHeading>
        <FAQItem
          question="Q7: Can students attend Naija Tech Fair?"
          answer="Yes. Students are encouraged to attend to learn about emerging tech trends, network with industry professionals, and explore career opportunities. Special discounted passes are available for students."
        />
        <FAQItem
          question="Q8: Are there opportunities for students to showcase their projects?"
          answer="Yes, students can participate in hackathons, innovation challenges, and designated project showcases that highlight their research and creative solutions."
        />
        <FAQItem
          question="Q9: Will there be internship or job opportunities at the event?"
          answer="Many companies use the fair as a recruitment platform. Students can meet potential employers during networking sessions and visit company booths to learn about internships and job openings."
        />

        <SectionHeading>General Questions</SectionHeading>
        <FAQItem
          question="Q10: What is Naija Tech Fair?"
          answer="Naija Tech Fair is Nigeria’s premier technology and innovation event that unites startups, investors, industry leaders, academics, and policymakers. It features keynote sessions, panel discussions, workshops, exhibitions, and networking events designed to foster collaboration and drive digital transformation."
        />
        <FAQItem
          question="Q11: How do I register for the event?"
          answer="Registration is available on our official website. We offer both general admission and premium packages, along with virtual participation options to accommodate all attendees."
        />
        <FAQItem
          question="Q12: How can I stay updated on event details?"
          answer="Follow us on social media, subscribe to our newsletter, or regularly check our website for the latest news, speaker announcements, and schedule updates."
        />

        <SectionHeading>Other Questions</SectionHeading>
        <FAQItem
          question="Q13: How do I stay updated on event announcements?"
          answer="Follow us on our social media channels and subscribe to our newsletter for the latest updates, speaker announcements, and exclusive content."
        />
        <FAQItem
          question="Q14: I have more questions. How can I reach out?"
          answer="For any additional inquiries, please visit our Contact Us page or email us at inquiry@naijatechfair.com."
        />
      </div>
    </div>
  );
};

// Reusable FAQItem Component
const FAQItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-[#00ff7f] mb-2">{question}</h3>
    <p className="text-gray-300">{answer}</p>
  </div>
);

// Reusable SectionHeading Component
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-[#00ff7f] mt-8 mb-6 border-l-4 border-[#00ff7f] pl-4">
    {children}
  </h2>
);

export default FAQPage;