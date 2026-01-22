import React, { useState, useEffect } from 'react'
import FAQList from './Components/FAQList'

const App = () => {
  
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('darkMode');
      if (saved === null || saved === "undefined") return false;
      return JSON.parse(saved);
    } catch {
      return false;
    }
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // ✅ YOU MUST SAVE IT HERE
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className="min-h-screen 
      bg-linear-to-tr from-gray-200 via-gray-250 to-gray-300
      dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
      transition-colors duration-500">
      
      <div className='container mx-auto py-12'>
        <header className='text-center mb-12'>
          <h1 className='text-4xl md:text-5xl font-extrabold mb-4
            bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 
            inline-block text-transparent bg-clip-text'>
            FAQ Center
          </h1>
          <p className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
            Find answers to the most common questions about Tailwind CSS and Web Development.
          </p>
        </header>
      </div>

      <FAQList toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>
      
    </div>
  )
}

export default App
