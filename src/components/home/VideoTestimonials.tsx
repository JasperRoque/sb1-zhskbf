import React from 'react';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'TechStart Inc.',
    thumbnail: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=200&fit=crop&q=80',
    videoUrl: '#'
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'GrowthLabs',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop&q=80',
    videoUrl: '#'
  },
  {
    id: 3,
    name: 'Emma Davis',
    role: 'Product Manager',
    company: 'InnovateCo',
    thumbnail: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=300&h=200&fit=crop&q=80',
    videoUrl: '#'
  }
];

export default function VideoTestimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Client Success Stories
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Hear directly from our clients about their transformation journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={testimonial.thumbnail}
                alt={testimonial.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="bg-white rounded-full p-4">
                  <Play className="w-6 h-6 text-purple-600" />
                </button>
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {testimonial.role} at {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}