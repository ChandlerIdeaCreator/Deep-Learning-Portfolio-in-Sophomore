import React from 'react';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: '/home', href: '#' },
    { label: '/skills', href: '#skills' },
    { label: '/projects', href: '#projects' },
    { label: '/contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-green-500 font-bold font-mono text-xl tracking-tighter">
              &lt;CQ /&gt;
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-green-400 hover:bg-gray-900 px-3 py-2 rounded-md text-sm font-medium font-mono transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};