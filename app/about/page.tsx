import Image from 'next/image';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Topic from '@/components/shared/Topic';

const companyHistory = [
  { year: '2024', event: 'Founded टेकमन्थन' },
  // { year: '2020', event: 'Expanded services to include Blockchain and SEO' },
  // { year: '2021', event: 'Opened second office and doubled team size' },
  // { year: '2023', event: 'Expanded services to include AI/ML Development' },
];

const teamHighlights = [
  { name: 'Sunit Kumar Panda', role: 'Senior Engineer', image: 'https://techtideinnovations.vercel.app/assets/images/team/sunitkumarpanda.png' },
  { name: 'Subhankar Pahi', role: 'Senior AI Engineer', image: 'https://techtideinnovations.vercel.app/assets/images/team/subhankarpahi.png' },
  { name: 'Raj Kishore Behera', role: 'Smart Contract Engineer', image: 'https://techtideinnovations.vercel.app/assets/images/team/rajkishorebehera.png' },
];

export default function AboutUs() {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row mt-32" id="about-us">
        <Topic title="About Us" description="Learn about our journey, mission, and the team behind our success." />
      </div>
      <div className="flex flex-col gap-12 py-10">
        <div className="p-12 bg-zinc-100 dark:bg-background rounded-[45px] border border-zinc-300 dark:border-zinc-700 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <h2 className="text-3xl font-medium mb-6">Our Mission</h2>
          <p className="text-xl">
          We are a comprehensive software development agency dedicated to crafting custom web applications and scalable SaaS platforms. 
          Leveraging technologies such as JavaScript, PHP, Node.js, Python, and advanced SEO, we deliver exceptional digital marketing and development solutions.
          </p>
        </div>
        <div className="p-12 bg-zinc-100 dark:bg-background rounded-[45px] border border-zinc-300 dark:border-zinc-700 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <h2 className="text-3xl font-medium mb-6">Our Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {companyHistory.map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-2xl font-bold text-primary">{item.year}</div>
                <div className="text-xl">{item.event}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-12 bg-zinc-100 dark:bg-background rounded-[45px] border border-zinc-300 dark:border-zinc-700 [box-shadow:0_-20px_80px_-20px_#8686f01f_inset]">
          <h2 className="text-3xl font-medium mb-6">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamHighlights.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <Image src={member.image} alt={member.name} width={150} height={150} className="rounded-full mb-4" />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="p-12 bg-gray-900 rounded-[45px] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-medium mb-4">Ready to grow your business?</h2>
              <p className="text-xl mb-6">Let&apos;s collaborate to create a tailored digital services that drives results for your brand.</p>
              <Link
                href="https://cal.com/acex-labs"
                className="px-8 py-4 bg-primary text-black rounded-[14px] text-xl font-normal inline-block hover:bg-primary-dark transition-colors"
              >
                Get in touch
              </Link>
            </div>
            <div className="hidden md:block">
              <Image src="./services/04.svg" alt="Team collaboration illustration" width={400} height={300} className="invert" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
