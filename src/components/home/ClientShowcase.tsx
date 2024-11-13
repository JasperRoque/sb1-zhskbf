import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const clients = [
  {
    id: 1,
    name: 'TechCorp',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    description: 'Leading technology solutions provider'
  },
  {
    id: 2,
    name: 'InnovateLabs',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    description: 'Innovation research center'
  },
  {
    id: 3,
    name: 'FutureFinance',
    logo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80',
    description: 'Next-gen financial services'
  }
];

export default function ClientShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Join the ranks of innovative companies transforming their digital presence
          </p>
        </div>

        <div className="relative">
          <div className="flex space-x-8 overflow-hidden">
            {clients.map((client) => (
              <div
                key={client.id}
                className="flex-none w-96 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {client.name}
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white dark:bg-gray-900 rounded-full p-2 shadow-lg">
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}