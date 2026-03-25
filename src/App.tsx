/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle, 
  Users, 
  BookOpen, 
  Briefcase, 
  ArrowRight, 
  Moon, 
  Sun, 
  Menu, 
  X,
  ShieldCheck,
  TrendingUp,
  Target,
  Search,
  PlayCircle
} from 'lucide-react';

function FindBDSP() {
  const bdsps = [
    { name: "Alice Johnson", expertise: "Financial Advisory", certified: true, rating: 4.9 },
    { name: "Bob Smith", expertise: "Marketing Strategy", certified: true, rating: 4.8 },
    { name: "Carol Williams", expertise: "Operations Management", certified: true, rating: 5.0 },
    { name: "David Chen", expertise: "Digital Transformation", certified: true, rating: 4.7 },
    { name: "Eva Martinez", expertise: "Human Resources", certified: true, rating: 4.9 },
    { name: "Frank Okoro", expertise: "Supply Chain", certified: true, rating: 4.8 },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-display font-bold text-[var(--foreground)] mb-4">Find a Certified BDSP</h1>
          <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
            Connect with our network of IMARA-certified professionals ready to help your business scale.
          </p>
        </div>
        <div className="relative w-full md:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted-foreground)] w-5 h-5" />
          <input 
            type="text" 
            placeholder="Search by expertise or name..." 
            className="w-full md:w-80 pl-10 pr-4 py-3 rounded-full border border-[var(--border)] bg-[var(--background)] text-[var(--foreground)] focus:outline-none focus:ring-2 focus:ring-primary-500 transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {bdsps.map((bdsp, i) => (
          <div key={i} className="bg-[var(--background)] p-6 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 font-bold text-xl">
                {bdsp.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold text-[var(--foreground)]">{bdsp.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{bdsp.expertise}</p>
              </div>
            </div>
            <div className="flex items-center justify-between mb-6">
              {bdsp.certified && (
                <div className="flex items-center text-sm font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 rounded-full">
                  <ShieldCheck className="w-4 h-4 mr-1.5" /> IMARA Certified
                </div>
              )}
              <div className="text-sm font-medium text-[var(--foreground)]">
                ⭐ {bdsp.rating}
              </div>
            </div>
            <button className="w-full px-4 py-3 text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-xl transition-colors">
              View Profile & Connect
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function LearningHub() {
  const courses = [
    { title: "Advanced Business Strategy", modules: 12, duration: "4 weeks", level: "Advanced", progress: 0 },
    { title: "Financial Modeling for SMEs", modules: 8, duration: "3 weeks", level: "Intermediate", progress: 45 },
    { title: "Digital Marketing Mastery", modules: 10, duration: "4 weeks", level: "Beginner", progress: 100 },
    { title: "Operational Excellence", modules: 6, duration: "2 weeks", level: "Intermediate", progress: 0 },
  ];

  return (
    <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-in fade-in duration-500">
      <div className="mb-12">
        <h1 className="text-4xl font-display font-bold text-[var(--foreground)] mb-4">IMARA Learning Hub</h1>
        <p className="text-lg text-[var(--muted-foreground)] max-w-2xl">
          Access our integrated Moodle LMS to upskill, earn certifications, and stay ahead in your field.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, i) => (
          <div key={i} className="bg-[var(--background)] rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
            <div className="w-full h-48 bg-[var(--muted)] relative flex items-center justify-center group cursor-pointer">
              <BookOpen className="w-16 h-16 text-[var(--muted-foreground)] opacity-50 group-hover:scale-110 transition-transform" />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <PlayCircle className="w-12 h-12 text-white" />
              </div>
            </div>
            <div className="p-6 flex flex-col flex-grow">
              <div className="flex justify-between items-start mb-3">
                <span className="text-xs font-medium px-2.5 py-1 bg-[var(--muted)] text-[var(--muted-foreground)] rounded-md">
                  {course.level}
                </span>
                <span className="text-xs font-medium text-[var(--muted-foreground)]">
                  {course.duration}
                </span>
              </div>
              <h3 className="text-xl font-bold text-[var(--foreground)] mb-4 line-clamp-2">{course.title}</h3>
              
              <div className="mt-auto">
                <div className="flex justify-between text-sm text-[var(--muted-foreground)] mb-2">
                  <span>{course.modules} Modules</span>
                  <span>{course.progress}% Complete</span>
                </div>
                <div className="w-full bg-[var(--muted)] rounded-full h-2 mb-6">
                  <div 
                    className="bg-primary-600 h-2 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                
                <button className="w-full px-4 py-3 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 rounded-xl transition-colors">
                  {course.progress === 0 ? 'Start Course' : course.progress === 100 ? 'Review Course' : 'Continue Learning'}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  const navLinks = [
    { name: 'Home', href: '#home', page: 'home' },
    { name: 'Find a BDSP', href: '#', page: 'find-bdsp' },
    { name: 'Learning Hub', href: '#', page: 'learning-hub' },
    { name: 'About', href: '#features', page: 'home' },
    { name: 'Contact', href: '#contact', page: 'home' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, link: typeof navLinks[0]) => {
    if (link.page !== currentPage) {
      setCurrentPage(link.page);
    }
    
    if (link.href.startsWith('#') && link.href !== '#') {
      if (link.page !== currentPage) {
        // If changing pages, wait for render then scroll
        setTimeout(() => {
          const el = document.querySelector(link.href);
          if (el) {
            const yOffset = -80; 
            const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({top: y, behavior: 'smooth'});
          }
        }, 100);
      } else {
        e.preventDefault();
        const el = document.querySelector(link.href);
        if (el) {
          const yOffset = -80; 
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({top: y, behavior: 'smooth'});
        }
      }
    } else {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300">
      {/* Navigation */}
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => { setCurrentPage('home'); window.scrollTo(0,0); }}>
              <span className="font-display font-bold text-2xl tracking-tight text-primary-600 dark:text-primary-400">
                IMARA
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`text-sm font-medium transition-colors ${
                    (link.page === currentPage && link.href === '#') || 
                    (link.page === currentPage && link.href === '#home' && currentPage === 'home')
                      ? 'text-primary-600 dark:text-primary-400' 
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-[var(--muted)] transition-colors text-[var(--foreground)]"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-[var(--foreground)] hover:bg-[var(--muted)] transition-colors"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--background)]"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    (link.page === currentPage && link.href === '#') || 
                    (link.page === currentPage && link.href === '#home' && currentPage === 'home')
                      ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' 
                      : 'text-[var(--muted-foreground)] hover:text-[var(--foreground)] hover:bg-[var(--muted)]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {currentPage === 'home' && (
          <div className="animate-in fade-in duration-500">
            {/* Hero Section */}
            <section id="home" className="relative pt-20 pb-32 overflow-hidden">
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-100/50 via-[var(--background)] to-[var(--background)] dark:from-primary-900/20 dark:via-[var(--background)] dark:to-[var(--background)]"></div>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 border border-primary-200 text-black mb-6 shadow-sm">
                    Empowering Growth Through Trusted Connections
                  </span>
                  <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tight text-[var(--foreground)] mb-8 leading-tight">
                    Bridge the Gap Between <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">Expertise & Enterprise</span>
                  </h1>
                  <p className="mt-4 max-w-2xl mx-auto text-xl text-[var(--muted-foreground)] mb-10">
                    Seamlessly connect Business Development Service Providers (BDSPs) with MSMEs and SMEs seeking expert guidance to grow, scale, and succeed.
                  </p>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <button 
                      onClick={() => { setCurrentPage('find-bdsp'); window.scrollTo(0,0); }}
                      className="px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all shadow-lg hover:shadow-primary-500/25 flex items-center justify-center"
                    >
                      Find an Expert
                      <ArrowRight className="ml-2" size={20} />
                    </button>
                    <button 
                      onClick={() => { setCurrentPage('learning-hub'); window.scrollTo(0,0); }}
                      className="px-8 py-4 text-base font-medium text-[var(--foreground)] bg-[var(--background)] border border-[var(--border)] hover:bg-[var(--muted)] rounded-full transition-all flex items-center justify-center"
                    >
                      Join Learning Hub
                    </button>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-[var(--muted)]/50">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--foreground)] mb-4">
                    Why Choose IMARA?
                  </h2>
                  <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                    Our platform is built to ensure quality, trust, and seamless collaboration between businesses and service providers.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                    {
                      icon: <ShieldCheck className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "Verified BDSP Network",
                      description: "Work with professionals certified directly through the IMARA platform, ensuring high-quality support."
                    },
                    {
                      icon: <Target className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "Smart Matching",
                      description: "Connect with the right experts tailored to your specific business needs and industry."
                    },
                    {
                      icon: <BookOpen className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "Integrated Learning",
                      description: "Continuous upskilling and certification for BDSPs via our integrated Moodle LMS."
                    },
                    {
                      icon: <TrendingUp className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "Growth Focused",
                      description: "From mentorship and strategy to operational and financial advisory, we cover all bases."
                    },
                    {
                      icon: <Users className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "Seamless Collaboration",
                      description: "An intuitive, user-friendly experience designed to make working together effortless."
                    },
                    {
                      icon: <Briefcase className="w-6 h-6 text-primary-600 dark:text-primary-400" />,
                      title: "All-in-One Platform",
                      description: "Manage connections, learning, and business development in one accessible place."
                    }
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-[var(--background)] p-8 rounded-2xl border border-[var(--border)] shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-primary-50 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6">
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-[var(--foreground)] mb-3">{feature.title}</h3>
                      <p className="text-[var(--muted-foreground)] leading-relaxed">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Dual Value Proposition */}
            <section className="py-24">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  {/* For MSMEs */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-[var(--foreground)] mb-6">
                      For MSMEs & SMEs
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] mb-8">
                      IMARA simplifies the journey to finding the right expertise. Access a curated network of certified professionals ready to help you scale.
                    </p>
                    <ul className="space-y-4">
                      {[
                        "Find trusted mentors and strategists",
                        "Access operational and financial advisory",
                        "Smart matching based on your specific needs",
                        "Secure and transparent engagement process"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-primary-500 mr-3 flex-shrink-0" />
                          <span className="text-[var(--foreground)]">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => { setCurrentPage('find-bdsp'); window.scrollTo(0,0); }}
                      className="mt-8 px-6 py-3 text-sm font-medium text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 rounded-full transition-colors flex items-center"
                    >
                      Find a BDSP <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>

                  {/* For BDSPs */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bg-[var(--foreground)] text-[var(--background)] p-10 md:p-12 rounded-3xl relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 relative z-10">
                      For Service Providers
                    </h2>
                    <p className="text-lg opacity-90 mb-8 relative z-10">
                      Gain credibility and visibility by completing specialized training and becoming certified via our integrated Moodle LMS.
                    </p>
                    <ul className="space-y-4 relative z-10">
                      {[
                        "Access continuous upskilling courses",
                        "Earn recognized IMARA certifications",
                        "Get matched with businesses needing your skills",
                        "Build your reputation in a trusted network"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="w-6 h-6 text-primary-400 dark:text-primary-600 mr-3 flex-shrink-0" />
                          <span className="opacity-90">{item}</span>
                        </li>
                      ))}
                    </ul>
                    <button 
                      onClick={() => { setCurrentPage('learning-hub'); window.scrollTo(0,0); }}
                      className="mt-8 px-6 py-3 text-sm font-medium text-[var(--foreground)] bg-[var(--background)] hover:opacity-90 rounded-full transition-opacity flex items-center relative z-10"
                    >
                      Join Learning Hub <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section id="contact" className="py-24 bg-primary-600 dark:bg-primary-900 relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/network/1920/1080?blur=10')] opacity-10 mix-blend-overlay"></div>
              <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                  Ready to thrive with confidence?
                </h2>
                <p className="text-xl text-primary-100 mb-10">
                  Join IMARA today and be part of the ecosystem empowering growth through trusted connections.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-4 text-base font-bold text-primary-600 bg-white hover:bg-gray-50 rounded-full transition-colors shadow-lg">
                    Get Started Now
                  </button>
                  <button className="px-8 py-4 text-base font-medium text-white border border-primary-400 hover:bg-primary-700 dark:hover:bg-primary-800 rounded-full transition-colors">
                    Contact Support
                  </button>
                </div>
              </div>
            </section>
          </div>
        )}

        {currentPage === 'find-bdsp' && <FindBDSP />}
        {currentPage === 'learning-hub' && <LearningHub />}
      </main>

      {/* Footer */}
      <footer className="bg-[var(--background)] border-t border-[var(--border)] pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <span className="font-display font-bold text-2xl tracking-tight text-primary-600 dark:text-primary-400 mb-4 block">
                IMARA
              </span>
              <p className="text-[var(--muted-foreground)] max-w-md">
                Empowering Growth Through Trusted Connections. Bridging the gap between expertise and enterprise.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-4">Platform</h4>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                <li><button onClick={() => { setCurrentPage('find-bdsp'); window.scrollTo(0,0); }} className="hover:text-primary-600 transition-colors">Find a BDSP</button></li>
                <li><button onClick={() => { setCurrentPage('learning-hub'); window.scrollTo(0,0); }} className="hover:text-primary-600 transition-colors">Learning Hub</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[var(--foreground)] mb-4">Company</h4>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                <li><button onClick={(e) => handleNavClick(e as any, { name: 'About', href: '#features', page: 'home' })} className="hover:text-primary-600 transition-colors">About Us</button></li>
                <li><button onClick={(e) => handleNavClick(e as any, { name: 'Contact', href: '#contact', page: 'home' })} className="hover:text-primary-600 transition-colors">Contact</button></li>
                <li><a href="#" className="hover:text-primary-600 transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[var(--border)] pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--muted-foreground)] text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} IMARA. All rights reserved.
            </p>
            <div className="flex space-x-6">
              {/* Social placeholders */}
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-[var(--muted-foreground)] hover:text-[var(--foreground)]">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
