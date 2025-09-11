import React from 'react';
import { FolderOpen, Calendar, FileSpreadsheet, Code, Users, BarChart3 } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: FolderOpen,
      title: "Project Management",
      description: "Organize and track your entire development project lifecycle with intuitive task management and progress tracking."
    },
    {
      icon: Calendar,
      title: "Meeting Scheduler",
      description: "Schedule team meetings, code reviews, and standups with integrated calendar sync and one-click join functionality."
    },
    {
      icon: FileSpreadsheet,
      title: "Excel Diagrams",
      description: "Create technical diagrams, flowcharts, and system architecture directly in Excel with our advanced drawing tools."
    },
    {
      icon: Code,
      title: "Code Integration",
      description: "Seamlessly integrate with your favorite IDEs and version control systems for streamlined development workflows."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Collaborate with your development team in real-time with shared workspaces and instant communication tools."
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Track development velocity, project progress, and team performance with comprehensive analytics dashboards."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Everything developers need in one platform
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful tools designed to streamline development workflows and boost your team's productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-3 inline-block mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;