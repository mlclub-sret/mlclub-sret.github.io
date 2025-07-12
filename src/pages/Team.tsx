import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import {team_details} from '../data/team';

const Team: React.FC = () => {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Meet Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            The dedicated individuals who drive innovation and make our ML Club a thriving community
          </p>
        </div>
      </section>

      {team_details.map((details, index) => (
        <section key={index} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Core Team {details.batch}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {details.team.map((member, index) => (
            <div
              key={member.name}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-2 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center space-y-4">
                <div className="relative">
                  <img
                    src={member.image ? member.image : 'images/avatars/avatar-placeholder.png'}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-gradient-to-r from-blue-500 to-purple-600"
                  />
                  <div className="absolute inset-0 w-24 h-24 rounded-full mx-auto bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity"></div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium">{member.role}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{member.department}</p>
                </div>
                <div className="flex justify-center space-x-4">
                  {member.github && (<a
                    href={member.github}
                    className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                  </a>) }
                  { member.linkedin && (<a
                    href={member.linkedin}
                    className="p-2 text-slate-400 hover:text-blue-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>) }
                  { member.email && (<a
                    href={`mailto:${member.email}`}
                    className="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </a>) }
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      ))}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      </div>
    </div>
  );
};

export default Team;