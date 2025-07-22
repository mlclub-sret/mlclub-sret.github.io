import React from 'react';
import { Users, Calendar, Target, Award } from 'lucide-react';

const Home: React.FC = () => {
  const stats = [
    { label: 'Events Conducted', value: '25+', icon: Calendar },
    { label: 'Years Active', value: '3+', icon: Award },
  ];

  const features = [
    {
      icon: Target,
      title: 'Hands-on Learning',
      description: 'Learn ML through practical projects and real-world applications.',
      enchanceNumber: false,
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'Connect with like-minded students and faculties.',
      enchanceNumber: false,

    },
    {
      icon: Calendar,
      title: 'Events Conducted',
      description: '30+',
      enchanceNumber: true,
    },
    {
      icon: Award,
      title: 'Years Active',
      description: '3+',
      enchanceNumber: true,

    }
  ];

  return (
    <div className="space-y-20">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-teal-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center space-y-8">
            <div className='w-full flex items-center justify-center'>
              <img src="sret/sret-logo-cropped.png" className=''></img>
            </div>
            <div className="space-y-4">
              <h1 className="lg:h-24 md:h-16 text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-teal-600 bg-clip-text text-transparent">
                Machine Learning Club
              </h1>
              {/* <h2 className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium"> Sri Ramachandra Faculty of Engineering and Technology </h2> */}
            </div>

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Empowering the next generation of AI innovators through hands-on learning, collaborative projects,
              and cutting-edge research in Machine Learning and Artificial Intelligence.
            </p>
          </div>
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Why Join Our ML Club?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              {feature.enchanceNumber === false &&
                (<p className="text-slate-600 dark:text-slate-400">
                  {feature.description}
                </p>)
              }
              {feature.enchanceNumber &&
                (<p className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-2">
                  {feature.description}
                </p>)
              }
            </div>
          ))}
        </div>
      </section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col mb-24">
      </div>
    </div>
  );
};

export default Home;