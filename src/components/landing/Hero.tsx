import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-8">
            <span>🚀 Now with AI-powered automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Supercharge Your
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Work</span>
            <br />
            Productivity
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
            WorkflowX is the all-in-one developer productivity platform. Manage projects, schedule meetings, 
            create Excel diagrams, and streamline your entire Work workflow in one powerful tool.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center group">
              Start Building
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button className="flex items-center px-6 py-4 text-gray-700 font-medium hover:text-gray-900 transition-colors group">
              <div className="bg-white rounded-full p-2 shadow-lg mr-3 group-hover:shadow-xl transition-shadow">
                <Play className="h-6 w-6 text-blue-600 ml-0.5" />
              </div>
              Watch Demo
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;