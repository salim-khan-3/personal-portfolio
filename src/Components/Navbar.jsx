import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800 w-full overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              SelimIslam
            </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-gray-300 hover:text-purple-400 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-400 hover:text-white"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full overflow-x-hidden bg-gray-900 border-t border-gray-800">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-300 hover:text-purple-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}



// import React, { useState } from 'react';
// import { Menu, X } from 'lucide-react';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navLinks = [
//     { name: 'Home', href: '#' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Experience', href: '#experience' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 border-b border-gray-800">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex items-center">
//             <a href="#home" className="flex items-center space-x-3">
//               <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
//               <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                 SelimIslam
//               </span>
//             </a>
//           </div>

//           {/* Desktop Navigation */}
//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="group relative px-3 py-2 text-sm font-medium text-gray-300 transition-colors duration-200 hover:text-purple-400"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none"
//               aria-label="Toggle menu"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Navigation */}
//       {isOpen && (
//         <div className="md:hidden">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-900 border-b border-gray-800">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsOpen(false)}
//                 className="group relative block px-3 py-2 rounded-md text-base font-medium text-gray-300 transition-colors duration-200 hover:text-purple-400"
//               >
//                 {link.name}
//                 <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-purple-400 transition-all duration-300 ease-in-out group-hover:w-full"></span>
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }





