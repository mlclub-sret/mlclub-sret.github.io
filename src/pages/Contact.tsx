import React from 'react';
import { Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const teamMembers = [
    {
      name: 'Sakthi R',
      role: 'Head of the Club',
      email: 'e0123009@sriher.edu.in',
      image: 'images/avatars/sakthi-r.png'
    },
    {
      name: 'Leelanandha Kishore',
      role: 'Associate Head of the Club',
      email: 'e0123015@sriher.edu.in',
      image: 'images/avatars/leela-nandha-kishore.jpeg'
    },
    {
      name: 'Nivedh Manoj',
      role: 'Secretary & Technical Editor',
      email: 'e0123003@sriher.edu.in',
      image: 'images/avatars/nivedh-manoj.png'
    },
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Get in <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Have questions about our club, events, or want to collaborate? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Contact Form and Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 border border-slate-200 dark:border-slate-700">
            <div className="mb-4">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Send us a Message
              </h2>
              <p className="text-slate-600 dark:text-slate-400">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </div>

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfAIv1Z5IehRtX-zN1KqUKGJqKGPSkpfrUhzVd3mmzOZqV6Ng/viewform?embedded=true" width="100%" height="640" frameBorder="0" marginHeight={0} marginWidth={0}>Loading…</iframe>
          </div>

          {/* Team Contact */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Contact Our Team
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Reach out directly to our core team members for specific inquiries.
              </p>
            </div>

            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div
                  key={member.name}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        {member.role}
                      </p>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-slate-600 dark:text-slate-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {member.email}
                      </a>
                    </div>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Quick answers to common questions about our ML Club
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Do I need prior ML experience?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Not at all! We welcome beginners and conduct insightful events to help you get started with machine learning.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2">
                  Can I propose a project idea?
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm">
                  Absolutely! We encourage everyone to propose and lead their own projects. Contact our core team to discuss your ideas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;