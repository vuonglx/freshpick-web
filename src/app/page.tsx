import { Button } from "@/components/ui/button";
import { Carousel } from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRightIcon, ChartBarIcon, CpuChipIcon, CloudArrowUpIcon, ChartPieIcon } from "@heroicons/react/24/outline";
import fs from 'fs';
import path from 'path';

const features = [
  {
    name: 'AI-Driven Inspection',
    description: 'Advanced machine learning algorithms for real-time produce quality assessment',
    icon: CpuChipIcon,
  },
  {
    name: 'Real-time Analysis',
    description: 'Instant quality metrics and actionable insights for your produce',
    icon: ChartBarIcon,
  },
  {
    name: 'Cloud Integration',
    description: 'Seamless data synchronization and access from anywhere',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and reporting tools',
    icon: ChartPieIcon,
  },
];

const stats = [
  { id: 1, name: 'Reduction in Food Waste', value: '30%' },
  { id: 2, name: 'Inspection Accuracy', value: '99.8%' },
  { id: 3, name: 'Processing Speed', value: '1.2s' },
  { id: 4, name: 'Quality Improvement', value: '25%' },
];

export default function Home() {
  // Get all images from the solution_images directory
  const solutionImagesDir = path.join(process.cwd(), 'public/solution_images');
  const imageFiles = fs.existsSync(solutionImagesDir) 
    ? fs.readdirSync(solutionImagesDir)
      .filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file))
      .map(file => `/solution_images/${file}`)
    : ['/placeholder-app.png']; // Fallback to placeholder image

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative isolate pt-14">
        <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20 lg:px-8">
          <div className="lg:flex lg:gap-x-16 lg:items-center">
            {/* Left side - Hero content */}
            <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
              <div className="mb-8">
                <div className="inline-flex rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                  Latest Updates{' '}
                  <a href="#" className="font-semibold text-primary-600">
                    <span className="absolute inset-0" aria-hidden="true" />
                    Just shipped v1.0 <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                AI-Powered<br />Produce Inspection<br />& Sorting
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Reduce waste, improve quality, and optimize your supply chain with our advanced AI-driven produce inspection system.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button asChild>
                  <Link href="/contact">Get started</Link>
                </Button>
                <Link href="/about" className="text-sm font-semibold leading-6 text-gray-900">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>

            {/* Right side - App Screenshot */}
            <div className="mt-16 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
              <div className="rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl lg:p-4">
                <div className="rounded-md bg-white shadow-2xl ring-1 ring-gray-900/10">
                  <Carousel images={imageFiles} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Problem Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">The Challenge</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              The Challenge of Food Waste
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Approximately 30% of all food produced globally is lost or wasted. Retail outlets experience 5-10% spoilage rates, 
              translating into substantial financial losses and environmental impact.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.id} className="flex flex-col">
                  <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                  <dd className="text-3xl font-bold leading-9 tracking-tight text-primary-600">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Advanced Technology</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fresh Pick's AI-Driven Solution
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our intelligent system uses cutting-edge AI and machine learning to assess freshness by analyzing images 
              and sensor data in real-time.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {features.map((feature) => (
                <div key={feature.name} className="flex flex-col bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <feature.icon className="h-5 w-5 flex-none text-primary-600" aria-hidden="true" />
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How Fresh Pick Works
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our advanced system streamlines the entire produce inspection process, from initial scanning to final sorting decisions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8">
              <div className="relative">
                <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 text-xl font-bold">1</div>
                <div className="pl-16">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Image Capture</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">High-resolution cameras capture detailed images of produce from multiple angles</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 text-xl font-bold">2</div>
                <div className="pl-16">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">AI Analysis</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">Our neural networks analyze visual data to assess quality and detect defects</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 text-xl font-bold">3</div>
                <div className="pl-16">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Quality Assessment</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">Produce is categorized based on freshness, size, and quality metrics</p>
                </div>
              </div>
              <div className="relative">
                <div className="absolute flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 text-xl font-bold">4</div>
                <div className="pl-16">
                  <h3 className="text-base font-semibold leading-7 text-gray-900">Sorting Decision</h3>
                  <p className="mt-2 text-base leading-7 text-gray-600">Automated sorting systems execute decisions based on AI analysis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Target Market Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Who We Serve</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Built for Industry Leaders
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fresh Pick serves a wide range of agricultural and food industry professionals, helping them optimize their operations.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                {
                  title: 'Producers & Growers',
                  description: 'Optimize sorting operations and maximize produce quality at the source',
                },
                {
                  title: 'Processing Facilities',
                  description: 'Streamline quality control and enhance processing efficiency',
                },
                {
                  title: 'Retail Chains',
                  description: 'Ensure consistent quality and reduce waste in your supply chain',
                },
              ].map((market) => (
                <div key={market.title} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{market.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{market.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Competitive Advantage Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Unique Advantages
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fresh Pick combines cutting-edge technology with industry expertise to deliver superior results.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Advanced AI Technology',
                  description: 'State-of-the-art neural networks and machine learning algorithms for superior accuracy',
                },
                {
                  title: 'Real-time Processing',
                  description: 'Lightning-fast analysis and decision-making for high-throughput operations',
                },
                {
                  title: 'Scalable Solution',
                  description: 'Flexible system that grows with your business needs',
                },
              ].map((advantage) => (
                <div key={advantage.title} className="relative bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{advantage.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Our Team</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Meet the Experts
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team combines expertise in AI, agriculture, and technology to deliver innovative solutions.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
              {[
                {
                  name: 'Vo Toan Tram',
                  role: 'CEO',
                  description: '28 years of experience in business development and sales executive roles across diverse industries. Expert in implementing country-wide business development strategies.',
                },
                {
                  name: 'Dr. Le Viet Thang',
                  role: 'CBDO',
                  description: '21 years of experience in food industry. PhD in Food Science with expertise in brewery industry and project management.',
                },
                {
                  name: 'Le Xuan Vuong',
                  role: 'CTO',
                  description: 'Over 15 years of experience in IT, specializing in Solution Architecture and Software Development within the banking industry.',
                },
                {
                  name: 'Đào Huu Duy',
                  role: 'CSCO',
                  description: '19 years of experience in procurement and strategic sourcing. Expert in developing purchasing strategies and supplier partnerships.',
                },
                {
                  name: 'Nguyen Le Quynh Thu',
                  role: 'CFO',
                  description: '19 years of experience as a registered accountant across healthcare, marketing, and hospitality industries.',
                },
              ].map((member) => (
                <div key={member.name} className="relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="w-16 h-16 rounded-full bg-primary-100 mb-6"></div>
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-gray-900">{member.name}</h3>
                  <p className="text-base font-semibold leading-7 text-primary-600">{member.role}</p>
                  <p className="mt-4 text-base leading-7 text-gray-600">{member.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-primary-600">Development Timeline</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our Roadmap to Success
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Fresh Pick's strategic journey from development to market launch and beyond.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid gap-8">
              {[
                {
                  date: 'December 2024',
                  title: 'Minimum Viable Product (MVP) Development',
                  items: [
                    'Finalizing project scope, objectives, and timeline',
                    'Establishing development team and resources',
                    'Creating system architecture and design documents',
                    'Completing initial prototypes of AI algorithms',
                    'Training CNNs and deep learning models'
                  ]
                },
                {
                  date: 'February 2025',
                  title: 'Beta Testing and Initial Marketing',
                  items: [
                    'Conducting beta testing to refine algorithms',
                    'Creating demo videos and marketing materials',
                    'Setting up social media presence',
                    'Producing video explainers and content'
                  ]
                },
                {
                  date: 'May 2025',
                  title: 'Partnerships and Pilot Programs',
                  items: [
                    'Developing partnerships with agricultural cooperatives',
                    'Securing industry professional endorsements',
                    'Promoting to food processing companies',
                    'Publishing press releases',
                    'Initiating discussions with retail chains'
                  ]
                },
                {
                  date: 'August 2025',
                  title: 'Product Launch Preparation',
                  items: [
                    'Conducting final testing',
                    'Finalizing marketing plan and support resources',
                    'Developing pilot programs with retailers',
                    'Expanding social media presence',
                    'Attending industry trade shows'
                  ]
                },
                {
                  date: 'September 2025',
                  title: 'Product Launch',
                  items: [
                    'Official market launch'
                  ]
                },
                {
                  date: 'May 2026',
                  title: 'Iterative Improvements',
                  items: [
                    'Implementing user feedback',
                    'Refining AI models',
                    'Improving software performance',
                    'Fixing bugs and optimizing systems'
                  ]
                }
              ].map((phase, index) => (
                <div key={phase.date} className="relative pl-16 py-6">
                  {/* Timeline line */}
                  <div className="absolute left-0 top-0 h-full w-px bg-primary-200" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-8px] top-8 h-4 w-4 rounded-full bg-primary-600 ring-4 ring-white" />
                  
                  {/* Content */}
                  <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                    <div className="text-sm font-semibold text-primary-600 mb-2">{phase.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">{phase.title}</h3>
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start">
                          <div className="flex-shrink-0 h-1.5 w-1.5 rounded-full bg-primary-600 mt-2 mr-3" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-primary-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to optimize your produce operations?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join industry leaders who are already benefiting from Fresh Pick's AI-powered solution.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-primary-600 shadow-sm hover:bg-gray-100">
                Get started
              </Button>
              <a href="#contact" className="text-sm font-semibold leading-6 text-white">
                Contact sales <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
