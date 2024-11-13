import React from 'react';
import { 
  Globe, 
  Share2, 
  Video, 
  Brain, 
  Palette, 
  Building2, 
  ShoppingBag, 
  PenTool 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web solutions built with cutting-edge technologies for optimal performance and user experience.',
    icon: Globe,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Social Media',
    description: 'Strategic social media management to boost engagement and grow your brand presence.',
    icon: Share2,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Video Marketing',
    description: 'Compelling video content that tells your story and captures your audience\'s attention.',
    icon: Video,
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 4,
    title: 'AI-Powered CRM',
    description: 'Intelligent customer relationship management systems that automate and optimize your business processes.',
    icon: Brain,
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 5,
    title: 'Branding',
    description: 'Comprehensive brand identity development that sets you apart in the market.',
    icon: Palette,
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    id: 6,
    title: 'Real Estate',
    description: 'Digital solutions tailored for real estate professionals and agencies.',
    icon: Building2,
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 7,
    title: 'E-commerce',
    description: 'Full-featured online stores with seamless shopping experiences.',
    icon: ShoppingBag,
    gradient: 'from-pink-500 to-rose-500'
  },
  {
    id: 8,
    title: 'Content Creation',
    description: 'Engaging content that drives traffic and converts visitors into customers.',
    icon: PenTool,
    gradient: 'from-teal-500 to-cyan-500'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
            Our Services
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Comprehensive digital solutions to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="p-6">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.gradient} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500 rounded-xl transition-colors duration-300" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </div>
  );
}