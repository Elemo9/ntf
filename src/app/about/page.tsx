import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black p-6">
      {/* Card with Dark Gradient Background and Green Glow */}
      <div
        className="p-8 rounded-lg shadow-[0_4px_20px_0px_rgba(0,255,127,0.4)] max-w-4xl"
        style={{
          background: 'linear-gradient(145deg, #1a1a1a, #262626)',
        }}
      >
        <h1 className="text-4xl font-bold text-[#00ff7f] mb-6">About Naija Tech Fair</h1>
        <p className="text-gray-300 mb-6">
          Naija Tech Fair is Nigeria’s premier technology and innovation event, dedicated to showcasing, celebrating, and advancing the country’s dynamic tech ecosystem. The fair serves as a hub where entrepreneurs, investors, industry leaders, academics, and policymakers come together to foster digital transformation, drive collaboration, and accelerate the growth of Nigeria’s tech industry.
        </p>

        <SectionHeading>Our Mission</SectionHeading>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><strong>Fostering Innovation:</strong> Showcasing breakthrough technologies in artificial intelligence, blockchain, fintech, cybersecurity, healthtech, agritech, e-commerce, and other emerging sectors.</li>
          <li><strong>Encouraging Interdisciplinary Collaboration:</strong> Creating platforms for engineers, designers, business strategists, social scientists, and policymakers to collaborate on real-world problems.</li>
          <li><strong>Empowering Talent:</strong> Providing students, researchers, and startups with access to mentorship, training, and resources to develop and commercialize their ideas.</li>
          <li><strong>Driving Investment and Economic Growth:</strong> Connecting startups and innovators with investors, venture capitalists, and government funding opportunities.</li>
        </ul>

        <SectionHeading>Our Vision: Shaping the Future of Technology in Nigeria & Beyond</SectionHeading>
        <p className="text-gray-300 mb-6">
          At Naija Tech Fair, we envision a Nigeria where technology is not just an industry but a catalyst for economic transformation, global influence, and societal progress. Our goal is to position Nigeria as a leading hub for innovation, entrepreneurship, and interdisciplinary collaboration, driving the country towards a digital-first future that competes on the global stage.
        </p>

        <SectionHeading>Empowering the Next Generation of Innovators</SectionHeading>
        <p className="text-gray-300 mb-6">
          We believe that the future belongs to those who create it. Through our platform, we provide young innovators, startups, and students with access to the right tools, mentorship, and exposure needed to develop groundbreaking solutions. By nurturing homegrown talent, we aim to build a self-sustaining ecosystem where ideas flourish into market-ready products and services.
        </p>

        <SectionHeading>Driving Digital Transformation Across Industries</SectionHeading>
        <p className="text-gray-300 mb-6">
          Technology is reshaping the world, and Nigeria must not be left behind. At Naija Tech Fair, we champion the adoption of cutting-edge technologies such as:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li><strong>Artificial Intelligence & Machine Learning</strong> – Revolutionizing businesses, healthcare, finance, and security.</li>
          <li><strong>Blockchain & Web3</strong> – Creating decentralized, transparent, and secure solutions for industries.</li>
          <li><strong>Fintech & Digital Payments</strong> – Enhancing financial inclusion and economic growth.</li>
          <li><strong>Agritech & Food Security</strong> – Leveraging smart farming techniques to boost productivity.</li>
          <li><strong>Healthtech & Medtech</strong> – Bringing AI-powered diagnostics and telemedicine to improve healthcare accessibility.</li>
        </ul>
        <p className="text-gray-300 mb-6">
          By bridging the gap between emerging technology and its practical application, we empower Nigerian businesses and organizations to stay competitive in an ever-evolving global landscape.
        </p>

        <SectionHeading>Bridging Academia and Industry</SectionHeading>
        <p className="text-gray-300 mb-6">
          A nation’s technological progress is fueled by research, education, and industry partnerships. However, many research breakthroughs in Nigerian universities never make it to the market due to a lack of funding, mentorship, and commercial pathways.
        </p>
        <p className="text-gray-300 mb-6">
          Naija Tech Fair is committed to changing this narrative by:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Connecting universities, research institutions, and corporate organizations to foster research-driven solutions.</li>
          <li>Providing a platform for interdisciplinary collaborations where engineers, data scientists, business strategists, and policymakers work together.</li>
          <li>Encouraging the commercialization of academic research into viable products and services that impact real lives.</li>
        </ul>
        <p className="text-gray-300 mb-6">
          Through hackathons, startup incubators, and industry-academic partnerships, we are building a future where Nigerian universities are not just centers of learning but engines of technological innovation.
        </p>

        <SectionHeading>Promoting Inclusive Innovation</SectionHeading>
        <p className="text-gray-300 mb-6">
          True progress is only meaningful if it benefits everyone. Our vision is to ensure technology-driven growth reaches all Nigerians, including underserved communities, emerging talents, and women in tech.
        </p>
        <p className="text-gray-300 mb-6">
          By providing training, resources, and access to funding, we are leveling the playing field, ensuring that innovation is not limited to elite institutions or major cities but reaches every aspiring creator, regardless of background.
        </p>

        <SectionHeading>Positioning Nigeria on the Global Stage</SectionHeading>
        <p className="text-gray-300 mb-6">
          Africa is the next frontier for technological advancement, and Nigeria is at its core. Naija Tech Fair is more than just an event—it is a movement to showcase Nigeria’s tech potential to the world.
        </p>
        <p className="text-gray-300 mb-6">
          We are committed to:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-6">
          <li>Attracting global investors and venture capitalists to fund Nigerian startups.</li>
          <li>Creating cross-border partnerships that connect Nigerian tech solutions with international markets.</li>
          <li>Highlighting Nigerian talent on a global scale, proving that we are not just consumers of technology but creators and pioneers.</li>
        </ul>
        <p className="text-gray-300 mb-6">
          By fostering a globally competitive tech ecosystem, we are ensuring that Nigeria does not just follow trends but sets them.
        </p>

        <SectionHeading>Join the Movement</SectionHeading>
        <p className="text-gray-300 mb-6">
          Naija Tech Fair is not just about what’s happening today—it’s about building the future. Whether you’re a startup founder, investor, student, policymaker, or tech enthusiast, we invite you to be part of a movement that is shaping the next wave of technological breakthroughs.
        </p>
        <p className="text-[#00ff7f] font-semibold">
          Together, we can make Nigeria a powerhouse of innovation, investment, and impact.
        </p>
      </div>
    </div>
  );
};

// Reusable SectionHeading Component
const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-2xl font-bold text-[#00ff7f] mt-8 mb-6 border-l-4 border-[#00ff7f] pl-4">
    {children}
  </h2>
);

export default AboutPage;