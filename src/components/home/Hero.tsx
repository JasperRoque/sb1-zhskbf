import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16">
      <div className="relative pt-16 pb-32 sm:pt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-base font-semibold text-purple-600">
                  Welcome to Pino AI
                </span>
                <span className="mt-1 block text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900 dark:text-white">Transform Your Digital</span>
                  <span className="block text-purple-600">Presence Today</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Elevate your business with AI-powered digital solutions. We combine cutting-edge technology 
                with creative expertise to deliver exceptional results.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:text-center lg:mx-0 lg:text-left">
                <button className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                  Schedule Consultation
                  <ArrowRight className="ml-3 -mr-1 h-5 w-5" />
                </button>
              </div>
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-center lg:justify-start gap-4">
                <div className="flex items-center">
                  <Sparkles className="h-5 w-5 text-yellow-400" />
                  <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                    98% Client Satisfaction
                  </span>
                </div>
                <div className="flex items-center">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                        src={`https://images.unsplash.com/photo-${i}?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                        alt=""
                      />
                    ))}
                  </div>
                  <span className="ml-3 text-sm text-gray-500 dark:text-gray-400">
                    Join 1000+ satisfied clients
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-12 sm:mx-auto lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full overflow-hidden rounded-lg bg-purple-600">
                  <img
                    className="w-full opacity-90 hover:opacity-100 transition-opacity"
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                    alt="Team collaboration"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/50 to-blue-600/50 mix-blend-multiply" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}