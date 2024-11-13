import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const team = [
  {
    id: 1,
    name: 'Alex Rivera',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&q=80',
    bio: 'Visionary leader with 15+ years in digital transformation',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 2,
    name: 'Lisa Chen',
    role: 'Head of AI',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80',
    bio: 'AI researcher and implementation specialist',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    id: 3,
    name: 'Marcus Johnson',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&q=80',
    bio: 'Award-winning designer and brand strategist',
    social: {
      linkedin: '#',
      twitter: '#'
    }
  }
];

export default function TeamSection() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Experts dedicated to your digital success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {member.name}
                </h3>
                <p className="text-sm text-purple-600 dark:text-purple-400 mb-2">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {member.bio}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={member.social.linkedin}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.social.twitter}
                    className="text-gray-400 hover:text-purple-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}