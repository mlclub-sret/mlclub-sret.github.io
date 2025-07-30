import React from 'react';
import { Target, Eye, Users, Award, Lightbulb, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We foster creative thinking and encourage breakthrough ideas in AI and ML.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collective intelligence.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We strive to create solutions that make a positive difference in the world.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain high standards in everything we do, from learning to research.'
    }
  ];

  const coordinators = [
    {
      name: 'Dr. Rajalakshmi S',
      role: 'Faculty Coordinator',
      department: 'Artificial Intelligence and Machine Learning',
      image: 'https://www.sret.edu.in/images/Faculty/newImage/rajalakshmi.jpg'
    },
    {
      name: 'Ms. Anamika Kumari',
      role: 'Faculty Coordinator',
      department: 'Artificial Intelligence and Machine Learning',
      image: 'https://www.sret.edu.in/images/Faculty/newImage/Anamika.jpg'
    }
  ];

  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            About Our <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">ML Club</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
            We are a passionate community of students and faculty at Sri Ramachandra Faculty of Engineering and Technology,
            dedicated to exploring the frontiers of Machine Learning and Artificial Intelligence.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Mission</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our mission is to establish an environment conducive to student collaboration, fostering learning and enhancing their core domain knowledge. We provide ample opportunities for students to volunteer and continuously enhance their skill sets. Our comprehensive plan encompasses a range of engaging and innovative themed events that are specifically designed to benefit students’ aspirations in higher education, placements, and internships.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-600 rounded-xl flex items-center justify-center">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Our Vision</h2>
            </div>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            Our aspiration is to establish ourselves as a prominent technical club. This transformative initiative ensures that the club embarks on a pioneering journey, positioning itself to meet the evolving needs of the future. Ultimately, this enhancement will elevate the ML Club to new heights, setting a benchmark for club organisations within SRET and contributing to the overall improvement of the college's standards.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Story
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              How we started and where we're heading
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
              <div className="space-y-6">
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  The Machine Learning Club (also known as The ML Club) at Sri Ramachandra Faculty of Engineering and Technology, is a student run club which was established on 2022-23 where passionate students and faculties join hands to create a vibrant and insightful environment paving the way for endeavour in Artificial Intelligence and Machine Learning domains.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  What started with just less than 70 members in 2023 has now grown into a thriving community of over 200 students and alumni from various engineering disciplines in 2025. Our club has organized numerous workshops, hackathons, quizzes, and industry talks, creating a platform for students to learn, share, and grow together.
                </p>
                <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                  Today, we're proud to be one of the most active technical clubs in our college, with members who have gone on to work at top tech companies and pursue graduate studies at prestigious institutions both in India and abroad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Our Values
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className="text-center group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col mb-24">
      </div>

      {/* Coordinators */}
      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Meet Our Faculty Coordinators
            </h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              The dedicated leaders who guide our club's vision and activities
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {coordinators.map((coordinator, index) => (
              <div
                key={coordinator.name}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <img
                  src={coordinator.image}
                  alt={coordinator.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-white/20"
                />
                <h3 className="text-xl font-semibold mb-1">{coordinator.name}</h3>
                <p className="text-white/80 font-medium mb-1">{coordinator.role}</p>
                <p className="text-white/70 text-sm">{coordinator.department}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;