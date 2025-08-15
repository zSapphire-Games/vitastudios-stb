import { useState, useEffect } from 'react';
import {
  Play,
  Star,
  Users,
  Code,
  Palette,
  Music,
  FileText,
  ChevronRight,
  Mail,
  Twitter,
  MapPin,
  Calendar,
  Award,
  Youtube,
} from 'lucide-react';
import React from 'react';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [hoveredPortfolio, setHoveredPortfolio] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [portfolioTooltipTimeout, setPortfolioTooltipTimeout] =
    useState<NodeJS.Timeout | null>(null);
  const [teamTooltipTimeout, setTeamTooltipTimeout] =
    useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    if (hoveredMember !== null || hoveredPortfolio !== null) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [hoveredMember, hoveredPortfolio]);

  const handlePortfolioMouseEnter = (index: number) => {
    if (portfolioTooltipTimeout) {
      clearTimeout(portfolioTooltipTimeout);
    }
    setHoveredPortfolio(index);
  };

  const handlePortfolioMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredPortfolio(null);
    }, 100); // Small delay to prevent flickering
    setPortfolioTooltipTimeout(timeout);
  };

  const handleTeamMouseEnter = (index: number) => {
    if (teamTooltipTimeout) {
      clearTimeout(teamTooltipTimeout);
    }
    setHoveredMember(index);
  };

  const handleTeamMouseLeave = () => {
    const timeout = setTimeout(() => {
      setHoveredMember(null);
    }, 100); // Small delay to prevent flickering
    setTeamTooltipTimeout(timeout);
  };

  const portfolioItems = [
    {
      title: 'Concept Art',
      description: 'Visual development and world-building artwork',
      icon: <Palette className="w-6 h-6" />,
      image:
        'https://i.ibb.co/G4kj5vf9/Chat-GPT-Image-8-juli-2025-19-07-43.png',
      category: 'Visual',
      details: {
        tools: ['Photoshop', 'Figma', 'Blender', 'Artificial Intelligence'],
        projects: ['A Better Tomorrow', 'Character Designs'],
        status: 'Active Development',
        lead: 'Sapphire & BatCat',
      },
    },
    {
      title: '3D Models',
      description: 'Character and environment modeling',
      icon: <Code className="w-6 h-6" />,
      image:
        'https://i.ibb.co/YBtYbsdk/swordy3.webp',
      category: 'Technical',
      details: {
        tools: ['Blender', 'Maya', 'Substance Painter', 'Unreal Engine'],
        projects: ['Character Assets', 'Environment Props'],
        status: 'In Production',
        lead: 'Limited & BatCat',
      },
    },
    {
      title: 'Music & Sound',
      description: 'Original compositions and audio design',
      icon: <Music className="w-6 h-6" />,
      image:
        'https://images.unsplash.com/photo-1509310202330-aec5af561c6b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      category: 'Audio',
      details: {
        tools: ['FL Studio', 'Logic Pro X'],
        projects: ['Game Soundtrack', 'SFX Library'],
        status: 'Recording',
        lead: 'De9d & Chris',
      },
    },
    {
      title: 'Code & Systems',
      description: 'Game mechanics and technical implementation',
      icon: <Code className="w-6 h-6" />,
      image: 'https://images8.alphacoders.com/123/thumb-1920-1238526.png',
      category: 'Technical',
      details: {
        tools: ['Unreal Engine', 'C++', 'Python', '& more...'],
        projects: ['Core Systems', 'Gameplay Mechanics'],
        status: 'Development',
        lead: 'Sapphire & Nick Kiafas',
      },
    },
    {
      title: 'Worldbuilding',
      description: 'Lore, narrative, and creative writing',
      icon: <FileText className="w-6 h-6" />,
      image:
        'https://i.ibb.co/nMksHXbz/Highres-Screenshot00057.webp',
      category: 'Narrative',
      details: {
        tools: ['Unreal Engine', 'World Editing', 'Sculpting Systems', 'Gaea'],
        projects: ['Universe Bible', 'Character Backstories'],
        status: 'Expanding',
        lead: 'Sapphire & Aaron',
      },
    },
    {
      title: 'Character Design',
      description: 'Hero and character development',
      icon: <Users className="w-6 h-6" />,
      image: 'https://i.ibb.co/3yZTNh2Y/MISTAKOOOL.jpg',
      category: 'Visual',
      details: {
        tools: ['Character Creator', 'ZBrush', 'Photoshop'],
        projects: ['Hero Designs', 'NPC Gallery'],
        status: 'Concept Phase',
        lead: 'MrKool',
      },
    },
  ];

  const teamMembers = [
    {
      name: 'Aaron',
      role: 'Founder & CEO',
      specialty: 'Script Writing & Creative Planning',
      image:
        'https://media.discordapp.net/attachments/1250514778863046666/1392525560894324798/Headshot.jpg?ex=686fd9fd&is=686e887d&hm=d24b088cbf401ac7c977667cc639a49d805df400194f516e1ab208c36bd9cd26&=&format=webp&width=1122&height=1402',
      country: 'US', // United States
      tier: 'founder',
      cv: {
        experience: [
          '5+ years of experience in Creative Direction for Video Game Development & Team Management',
        ],

        skills: ['Narrative Design', 'Project Management', 'Creative Writing'],
        achievements: [
          'Founded Vita Studios',
          'Lead Writer for A Better Tomorrow',
          'Wrote and developed 3 immersive video game scripts, totaling over 850 pages of original narrative content',
          'Skilled in world-building, character development, and interactive storytelling that captivates players',
          'Proven ability to turn ambitious ideas into finished, engaging products through clear vision and leadership',
        ],
        location: 'United States',
      },
    },
    {
      name: 'Lukas Sandvik',
      role: 'Co-Founder & Project Director',
      specialty: 'Marketing & UI Design',
      image: 'https://i.ibb.co/hxhh7MWT/teeest.jpg',
      country: 'NO', // Norway
      tier: 'founder',
      cv: {
        experience: '3+ years in Game Design',
        skills: [
          'UI/UX Design',
          'Marketing Strategy',
          'Unreal Engine',
          'Online Sales for Existing Markets',
        ],
        achievements: [
          'Co-founded Vita Studios',
          'Helped market a video game to several thousand members',
          'Digital Camerawork',
        ],
        location: 'Norway',
      },
    },
    {
      name: 'De9d',
      role: 'Audio Designer',
      specialty: 'Music & Sound',
      image:
        'https://yt3.googleusercontent.com/u0wHpNwTDteqV2Ae7BC-U3HsKFzTsD9KJQQFM_hUUC6cwiXu9LTa4_BXpC9GwRAkep1KOPFa=s160-c-k-c0x00ffffff-no-rj',
      country: 'US', // United States
      tier: 'developer',
      cv: {
        experience: '2+ years in Audio Production',
        skills: [
          'Music Composition',
          'Sound Design',
          'Audio Engineering',
          'Animation',
        ],
        achievements: [
          'Composed soundtracks for multiple games',
          'Audio lead for A Better Tomorrow',
        ],
        location: 'United States',
      },
    },
    {
      name: 'Nick Kiafas',
      role: 'Project Director',
      specialty: 'Programming and World Building',
      image:
        'https://media.discordapp.net/attachments/1324459238671646872/1392249353657254010/df287ffadf4993e0fa263ea6ca1bdbbc.jpg?ex=686ed8c0&is=686d8740&hm=a7fa8d69496ba44a7b968d130a2b4f022ea32724e4315bde60e1257b8538ce7b&=&format=webp&width=472&height=472',
      country: 'GR', // Greece
      tier: 'developer',
      cv: {
        experience: '2+ years in Game Development',
        skills: [
          'Programming',
          'C++',
          'Python',
          'Game Design',
          'System Architecture',
        ],
        achievements: [
          'Project Director for multiple titles',
          'Programming expert',
        ],
        location: 'Greece',
      },
    },
    {
      name: 'Limited',
      role: 'YouTuber & 3D Modeler',
      specialty: '3D Modelling & Creative Editing',
      image:
        'https://images.socialblade.com/256x,q75/https://yt3.ggpht.com/tTQ8OIgVGufc8KhAW9iuFTyRs5qIMxtgLcMIbmf0WmWH4Fd9uGLqVDrXIV6J72aYv9dqC8Aa=s192-c-k-c0x00ffffff-no-rj',
      country: 'AU', // Australia
      tier: 'developer',
      cv: {
        experience: '5+ years in Content Creation',
        skills: [
          '3D Modeling',
          'Video Editing',
          'Content Creation',
          'Animation',
        ],
        achievements: [
          'Successful YouTube channel',
          '3D assets for multiple projects',
        ],
        location: 'Australia',
      },
    },
    {
      name: 'BatCat',
      role: '3D Modeler and VFX Student',
      specialty: 'Modeling and Visual Design',
      image:
        'https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/53a403e2bb494f0aa343d8088ee5509f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=10399&refresh_token=76fe2be2&x-expires=1752174000&x-signature=pMqdYaHbXG8oxvt%2BEvW8H5e1GoQ%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=no1a',
      country: 'GE', // United States
      tier: 'developer',
      cv: {
        experience: '1+ year in 3D Modeling',
        skills: ['3D Modeling', 'VFX', 'Visual Design', 'UI Design'],
        achievements: ['VFX student', 'Modeling specialist'],
        location: 'Georgia',
      },
    },
    {
      name: 'MrKool',
      role: 'Project Director',
      specialty: 'Concept Artist and Modeler',
      image: 'https://i.ibb.co/3yZTNh2Y/MISTAKOOOL.jpg',
      country: 'CA', // Canada
      tier: 'developer',
      cv: {
        experience: '1+ years in Concept Art',
        skills: ['Concept Art', '3D Modeling', 'Character Design'],
        achievements: [
          'Lead concept artist',
          'Character design for A Better Tomorrow',
        ],
        location: 'Canada',
      },
    },
    {
      name: 'Chris',
      role: 'Composer and Script Writer',
      specialty: 'Working with Directors and Clients',
      image:
        'https://media.discordapp.net/attachments/1392269412655960075/1392276137996189786/image.png?ex=686ef1b2&is=686da032&hm=483383ea76eea18f847619776e566ddde16a0c64de89841bcbdabb1b5082ac25&=&format=webp&quality=lossless&width=480&height=480',
      country: 'AU', // Australia
      tier: 'developer',
      cv: {
        experience: '6+ years in Composing',
        skills: ['Composing', 'Works Fast', 'Creative'],
        achievements: ['Self Taught', 'Freelance Composer'],
        location: 'Australia',
      },
    },
    {
      name: 'Breadley',
      role: 'Graphics Designer',
      specialty: 'Video Editing & Writing',
      image:
        'https://images.socialblade.com/256x,q75/https://yt3.ggpht.com/UYvyPi2TvTRbqDlVT9VaG-_6jxswICBypnFx5APhrbG9QYriOd0H_UHDaN34GqqknwekS671=s192-c-k-c0x00ffffff-no-rj',
      country: 'GB', // UK
      tier: 'developer',
      cv: {
        experience: '6+ years in Graphic Design',
        skills: ['Graphic Design', 'Video Editing', 'Artist', 'Writer'],
        achievements: [
          'Written & Illustrated 2 Comic Books',
          'Becoming a YouTube Partner',
        ],
        location: 'England',
      },
    },
    {
      name: 'Justin',
      role: 'Untitled',
      specialty: 'Untitled',
      image:
        'https://media.discordapp.net/attachments/1250514778863046666/1392525277720219728/IMG_4057.png?ex=686fd9ba&is=686e883a&hm=b02b1e85e031af01b7cb68844da018d180ba78f05c9664d26a85447776040a5e&=&format=webp&quality=lossless&width=646&height=1400',
      country: 'US', // US
      tier: 'unknown',
      cv: {
        experience: '0+ years in Untitled',
        skills: ['?', '?', '?'],
        achievements: ['Untitled', 'Untitled'],
        location: 'United States',
      },
    },
    {
      name: 'Logan',
      role: 'Untitled',
      specialty: 'Untitled',
      image: 'https://i.ibb.co/wrx5Drzc/IMG-9398.webp',
      country: 'US', // US
      tier: 'unknown',
      cv: {
        experience: '0+ years in Untitled',
        skills: ['?', '?', '?'],
        achievements: ['Untitled', 'Untitled'],
        location: 'United States',
      },
    },
    {
      name: 'TheGoatMan',
      role: 'Untitled',
      specialty: 'Untitled',
      image: 'https://i.ibb.co/DPdS9kh2/tessar.jpg',
      country: 'MC', // Untitled
      tier: 'unknown',
      cv: {
        experience: '0+ years in Untitled',
        skills: ['?', '?', '?'],
        achievements: ['Untitled', 'Untitled'],
        location: 'Untitled',
      },
    },
  ];

  // Group team members by tier
  const founders = teamMembers.filter((member) => member.tier === 'founder');
  const developers = teamMembers.filter(
    (member) => member.tier === 'developer'
  );
  const unknownMembers = teamMembers.filter(
    (member) => member.tier === 'unknown'
  );
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-commissioner">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Deep space gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-violet-900"></div>

        {/* Animated starfield */}
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 0.5}px`,
              height: `${Math.random() * 2 + 0.5}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 2 + 2}s`,
            }}
          />
        ))}

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="particle animate-drift"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}

        {/* Nebula-like gradients */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-violet-500/10 to-transparent rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold font-commissioner bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-glow">
              VITA STUDIOS
            </span>
            <div className="hidden md:flex items-center space-x-8 font-commissioner">
              <a
                href="#home"
                className="hover:text-cyan-400 transition-all duration-300 hover:text-glow"
              >
                Home
              </a>
              <a
                href="#portfolio"
                className="hover:text-cyan-400 transition-all duration-300 hover:text-glow"
              >
                Portfolio
              </a>
              <a
                href="#game"
                className="hover:text-cyan-400 transition-all duration-300 hover:text-glow"
              >
                Our Game
              </a>
              <a
                href="#team"
                className="hover:text-cyan-400 transition-all duration-300 hover:text-glow"
              >
                Team
              </a>
              <a
                href="#contact"
                className="hover:text-cyan-400 transition-all duration-300 hover:text-glow"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center px-6"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60"></div>

        {/* Light rays */}
        <div className="absolute top-1/4 left-1/2 w-1 h-32 bg-gradient-to-b from-cyan-400/60 to-transparent transform -translate-x-1/2 rotate-45 animate-light-ray"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-24 bg-gradient-to-b from-violet-400/60 to-transparent transform rotate-12 animate-light-ray"
          style={{ animationDelay: '1s' }}
        ></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-300 via-violet-300 to-pink-300 bg-clip-text text-transparent text-glow leading-tight">
            Welcome to
            <br />
            VITA STUDIOS
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 leading-relaxed font-commissioner font-light max-w-3xl mx-auto">
            An independent game studio crafting bold, story-driven experiences
            that explore the extraordinary in the everyday.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-semibold font-commissioner hover:from-cyan-400 hover:to-violet-400 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 holographic-card animate-float">
              <Play className="w-5 h-5 group-hover:animate-pulse" />
              <span>VIEW OUR WORK</span>
            </button>
            <button className="group px-8 py-3 border-2 border-cyan-400/50 rounded-full font-semibold font-commissioner hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center space-x-2 holographic-card animate-float-reverse">
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Portfolio Section */}
      <section id="portfolio" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-glow relative z-10">
              OUR PORTFOLIO
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
              Discover the diverse talents and creative disciplines that bring
              our vision to life.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <div
                key={index}
                className="holographic-card rounded-2xl overflow-hidden transition-all duration-500 animate-float"
                style={{ animationDelay: `${index * 0.2}s` }}
                onMouseEnter={() => handlePortfolioMouseEnter(index)}
                onMouseLeave={handlePortfolioMouseLeave}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-xl">
                      {item.icon}
                    </div>
                    <span className="text-sm text-cyan-400 font-semibold font-commissioner tracking-wider">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 font-commissioner text-glow">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 font-commissioner font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Portfolio HUD Tooltip */}
        {hoveredPortfolio !== null && (
          <div
            className="fixed z-50 pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: Math.min(mousePosition.x + 30, window.innerWidth - 320), // Prevent going off-screen
              top: Math.max(mousePosition.y - 50, 20), // Keep some distance from cursor and screen edge
              transform: 'translateY(-50%)',
            }}
          >
            <div className="holographic-card p-4 rounded-xl max-w-xs bg-black/90 border-2 border-cyan-400/60 shadow-2xl animate-hud-appear">
              {/* HUD-style header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wider">
                    PROJECT FILE
                  </span>
                </div>
                <div className="text-xs text-cyan-400/60 font-mono">
                  #{String(hoveredPortfolio + 1).padStart(3, '0')}
                </div>
              </div>

              {/* Project name and category */}
              <div className="mb-3">
                <h4 className="text-sm font-bold font-commissioner text-white text-glow mb-1">
                  {portfolioItems[hoveredPortfolio].title}
                </h4>
                <p className="text-xs text-cyan-400 font-commissioner">
                  {portfolioItems[hoveredPortfolio].category}
                </p>
              </div>

              {/* Status */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <div className="w-3 h-3 text-cyan-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  </div>
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    STATUS
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-commissioner pl-5">
                  {portfolioItems[hoveredPortfolio].details.status}
                </p>
              </div>

              {/* Tools */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Code className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    TOOLS
                  </span>
                </div>
                <div className="pl-5 space-y-1">
                  {portfolioItems[hoveredPortfolio].details.tools.map(
                    (tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        <span className="text-xs text-gray-300 font-commissioner">
                          {tool}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Projects */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <FileText className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    PROJECTS
                  </span>
                </div>
                <div className="pl-5 space-y-1">
                  {portfolioItems[hoveredPortfolio].details.projects.map(
                    (project, projIndex) => (
                      <div
                        key={projIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
                        <span className="text-xs text-gray-300 font-commissioner">
                          {project}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Lead */}
              <div className="pt-2 border-t border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <Users className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    LEAD
                  </span>
                  <span className="text-xs text-gray-300 font-commissioner ml-auto">
                    {portfolioItems[hoveredPortfolio].details.lead}
                  </span>
                </div>
              </div>

              {/* HUD-style footer */}
              <div className="mt-3 pt-2 border-t border-cyan-400/30 flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
                <span className="text-xs text-cyan-400/60 font-mono">
                  VITA_SYS
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Enhanced Game Highlight Section */}
      <section id="game" className="py-16 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-glow relative z-10">
              OUR GAMES
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
              Immersive experiences that blend stunning visuals with emotional
              depth and compelling narratives.
            </p>
          </div>

          {/* A Better Tomorrow */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-sm font-bold font-commissioner mb-6 animate-pulse-glow">
                COMING SOON
              </div>
              <h3 className="text-4xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent text-glow">
                A BETTER TOMORROW
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed font-commissioner font-light">
                A cinematic open-world superhero adventure about legacy,
                purpose, and cosmic power. Experience an immersive narrative
                that blends stunning visuals with emotional depth.
              </p>
            </div>
            <div className="relative animate-float">
              <div className="holographic-card rounded-2xl overflow-hidden">
                <img
                  src="https://i.ibb.co/gM41hB5k/image.webp"
                  alt="A Better Tomorrow"
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10">
                  <blockquote className="text-xl font-light italic text-white mb-4 font-commissioner text-glow">
                    "The universe doesn't make heroes. We choose to become
                    them."
                  </blockquote>
                  <p className="text-cyan-400 font-commissioner font-semibold">
                    — From the script of A Better Tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IntoTheSpeedForce */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full text-sm font-bold font-commissioner mb-6 animate-pulse-glow">
                  PREV. DEVELOPMENT
                </div>
                <h3 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-red-300 via-yellow-300 to-orange-300 bg-clip-text text-transparent text-glow">
                  IntoTheSpeedForce
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed font-commissioner font-light">
                  The Flash game made by fans, for fans. Experience the Speed
                  Force like never before in this high-octane adventure
                  celebrating the Scarlet Speedster's legacy.
                </p>
              </div>
              <div
                className="relative animate-float"
                style={{ animationDelay: '1s' }}
              >
                <div className="holographic-card rounded-2xl overflow-hidden">
                  <img
                    src="https://i.ibb.co/xp5zzyv/Highres-Screenshot00034.webp"
                    alt="IntoTheSpeedForce"
                    className="w-full h-full object-cover opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-10 left-10 right-10">
                    <blockquote className="text-xl font-light italic text-white mb-4 font-commissioner text-glow">
                      "My name is Barry Allen, and I am the fastest man alive."
                    </blockquote>
                    <p className="text-yellow-400 font-commissioner font-semibold">
                      — The Flash
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Placeholder Game */}
            <div>
              <div className="text-center mb-12">
                <div className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-bold font-commissioner mb-6 animate-pulse-glow">
                  IN DEVELOPMENT
                </div>
                <h3 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-purple-300 via-pink-300 to-violet-300 bg-clip-text text-transparent text-glow">
                  Project Nexus
                </h3>
                <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed font-commissioner font-light">
                  An ambitious new project pushing the boundaries of interactive
                  storytelling. More details coming soon as we craft something
                  truly extraordinary.
                </p>
              </div>
              <div
                className="relative animate-float"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="holographic-card rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-purple-900 via-violet-900 to-pink-900 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                        <Star className="w-8 h-8 text-white animate-pulse" />
                      </div>
                      <p className="text-white font-commissioner text-lg font-bold text-glow">
                        CLASSIFIED
                      </p>
                      <p className="text-purple-300 font-commissioner text-sm mt-2"></p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Remove the old single game section content */}
      <section className="hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 to-blue-950/30"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full text-sm font-bold font-commissioner mb-6 animate-pulse-glow">
              Coming Soon
            </div>
            <h2 className="text-4xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-300 to-violet-300 bg-clip-text text-transparent text-glow">
              A Better Tomorrow
            </h2>
            <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed font-commissioner font-light">
              A cinematic open-world superhero adventure about legacy, purpose,
              and cosmic power. Experience an immersive narrative that blends
              stunning visuals with emotional depth.
            </p>
          </div>
          <div className="relative animate-float">
            <div className="holographic-card rounded-2xl overflow-hidden">
              <img
                src="https://i.ibb.co/gM41hB5k/image.webp"
                alt="A Better Tomorrow"
                className="w-full h-full object-cover opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 right-10">
                <blockquote className="text-xl font-light italic text-white mb-4 font-commissioner text-glow">
                  "The universe doesn't make heroes. We choose to become them."
                </blockquote>
                <p className="text-cyan-400 font-commissioner font-semibold">
                  — From the script of A Better Tomorrow
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section id="team" className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-glow relative z-10">
              MEET THE TEAM
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
              The creative minds behind Vita Studios, united by passion and
              vision.
            </p>
          </div>

          {/* Founders Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
                FOUNDERS
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 justify-center">
              {founders.map((member, index) => (
                <div
                  key={`founder-${index}`}
                  className="text-center group animate-float"
                  style={{ animationDelay: `${index * 0.3}s` }}
                  onMouseEnter={() =>
                    handleTeamMouseEnter(teamMembers.indexOf(member))
                  }
                  onMouseLeave={handleTeamMouseLeave}
                >
                  <div className="relative mb-8">
                    {/* Country Flag - positioned above the profile picture */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
                      <img
                        src={`https://flagcdn.com/w40/${member.country.toLowerCase()}.png`}
                        alt={`${member.country} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="holographic-card w-32 h-32 mx-auto rounded-full p-1 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-commissioner text-glow">
                    {member.name}
                  </h3>
                  <p className="text-yellow-400 font-semibold mb-2 font-commissioner">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm font-commissioner font-light">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Developers Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <h3 className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
                DEVELOPERS
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-violet-400 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {developers.map((member, index) => (
                <div
                  key={`developer-${index}`}
                  className="text-center group animate-float"
                  style={{ animationDelay: `${(index + 3) * 0.3}s` }}
                  onMouseEnter={() =>
                    handleTeamMouseEnter(teamMembers.indexOf(member))
                  }
                  onMouseLeave={handleTeamMouseLeave}
                >
                  <div className="relative mb-8">
                    {/* Country Flag - positioned above the profile picture */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
                      <img
                        src={`https://flagcdn.com/w40/${member.country.toLowerCase()}.png`}
                        alt={`${member.country} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="holographic-card w-32 h-32 mx-auto rounded-full p-1 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-commissioner text-glow">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-semibold mb-2 font-commissioner">
                    {member.role}
                  </p>
                  <p className="text-gray-400 text-sm font-commissioner font-light">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Unknown Members Section */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-gray-300 max-w-2xl mx-auto font-commissioner font-light leading-relaxed relative z-10">
                UNKNOWN
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-gray-400 to-gray-600 mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {unknownMembers.map((member, index) => (
                <div
                  key={`unknown-${index}`}
                  className="text-center group animate-float opacity-60"
                  style={{ animationDelay: `${(index + 10) * 0.3}s` }}
                  onMouseEnter={() =>
                    handleTeamMouseEnter(teamMembers.indexOf(member))
                  }
                  onMouseLeave={handleTeamMouseLeave}
                >
                  <div className="relative mb-8">
                    {/* Country Flag - positioned above the profile picture */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 translate-x-3 w-8 h-8 rounded-full overflow-hidden border-2 border-white shadow-lg z-10">
                      <img
                        src={`https://flagcdn.com/w40/${member.country.toLowerCase()}.png`}
                        alt={`${member.country} flag`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="holographic-card w-32 h-32 mx-auto rounded-full p-1 overflow-hidden">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-commissioner text-glow">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 font-semibold mb-2 font-commissioner">
                    {member.role}
                  </p>
                  <p className="text-gray-500 text-sm font-commissioner font-light">
                    {member.specialty}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CV Tooltip */}
        {hoveredMember !== null && (
          <div
            className="fixed z-50 pointer-events-none transition-all duration-300 ease-out"
            style={{
              left: Math.min(mousePosition.x + 30, window.innerWidth - 320), // Prevent going off-screen
              top: Math.max(mousePosition.y - 50, 20), // Keep some distance from cursor and screen edge
              transform: 'translateY(-50%)',
            }}
          >
            <div className="holographic-card p-4 rounded-xl max-w-xs bg-black/90 border-2 border-cyan-400/60 shadow-2xl animate-hud-appear">
              {/* HUD-style header */}
              <div className="flex items-center justify-between mb-3 pb-2 border-b border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wider">
                    PERSONNEL FILE
                  </span>
                </div>
                <div className="text-xs text-cyan-400/60 font-mono">
                  #{String(hoveredMember + 1).padStart(3, '0')}
                </div>
              </div>

              {/* Name and role */}
              <div className="mb-3">
                <h4 className="text-sm font-bold font-commissioner text-white text-glow mb-1">
                  {teamMembers[hoveredMember].name}
                </h4>
                <p className="text-xs text-cyan-400 font-commissioner">
                  {teamMembers[hoveredMember].role}
                </p>
              </div>

              {/* Experience */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Calendar className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    EXPERIENCE
                  </span>
                </div>
                <p className="text-xs text-gray-300 font-commissioner pl-5">
                  {teamMembers[hoveredMember].cv.experience}
                </p>
              </div>

              {/* Skills */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Code className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    SKILLS
                  </span>
                </div>
                <div className="pl-5 space-y-1">
                  {teamMembers[hoveredMember].cv.skills.map(
                    (skill, skillIndex) => (
                      <div
                        key={skillIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                        <span className="text-xs text-gray-300 font-commissioner">
                          {skill}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-3">
                <div className="flex items-center space-x-2 mb-1">
                  <Award className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    ACHIEVEMENTS
                  </span>
                </div>
                <div className="pl-5 space-y-1">
                  {teamMembers[hoveredMember].cv.achievements.map(
                    (achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-center space-x-2"
                      >
                        <div className="w-1 h-1 bg-violet-400 rounded-full"></div>
                        <span className="text-xs text-gray-300 font-commissioner">
                          {achievement}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Location */}
              <div className="pt-2 border-t border-cyan-400/30">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-3 h-3 text-cyan-400" />
                  <span className="text-xs font-commissioner text-cyan-400 tracking-wide">
                    LOCATION
                  </span>
                  <span className="text-xs text-gray-300 font-commissioner ml-auto">
                    {teamMembers[hoveredMember].cv.location}
                  </span>
                </div>
              </div>

              {/* HUD-style footer */}
              <div className="mt-3 pt-2 border-t border-cyan-400/30 flex justify-between items-center">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.2s' }}
                  ></div>
                  <div
                    className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
                    style={{ animationDelay: '0.4s' }}
                  ></div>
                </div>
                <span className="text-xs text-cyan-400/60 font-mono">
                  VITA_SYS
                </span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-16 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-950/30 to-blue-950/30"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6 font-commissioner bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent text-glow">
            FORWARD. VITA. TOGETHER.
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto font-commissioner font-light leading-relaxed">
            Ready to join our journey? Connect with us and be part of something
            extraordinary.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="holographic-card p-6 rounded-full hover:scale-110 transition-all duration-300 animate-float"
            >
              <Mail className="w-8 h-8 text-cyan-400" />
            </a>
            <a
              href="#"
              className="holographic-card p-6 rounded-full hover:scale-110 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.2s' }}
            >
              <Twitter className="w-8 h-8 text-cyan-400" />
            </a>
            <a
              href="#"
              className="holographic-card p-6 rounded-full hover:scale-110 transition-all duration-300 animate-float"
              style={{ animationDelay: '0.4s' }}
            >
              <Youtube className="w-8 h-8 text-cyan-400" />
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-8 px-6 bg-gradient-to-r from-blue-900 via-indigo-900 to-purple-900 text-white border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <Star className="w-8 h-8 text-white" />
            <span className="text-2xl font-bold font-commissioner">
              VITA STUDIOS
            </span>
          </div>
          <p className="text-sm font-light font-commissioner">
            © 2025 Vita Game Studios. All rights reserved. Crafting the future
            of interactive storytelling.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
