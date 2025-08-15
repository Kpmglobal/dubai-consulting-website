import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
  type?: 'image' | 'text-only';
}

const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', variant = 'default', type = 'image' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg'
  };

  const textColors = variant === 'white' 
    ? 'text-white' 
    : 'text-gray-900';

  const kpmColor = variant === 'white' 
    ? 'text-white' 
    : 'text-[#82bc4c]';

  const globalColor = variant === 'white' 
    ? 'text-blue-200' 
    : 'text-[#063851]';

  if (type === 'text-only') {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        {/* Text-Only Logo */}
        <div className={`font-bold ${textSizes[size]} ${textColors}`}>
          <span className={kpmColor}>KPM</span>
          <span className={globalColor}> Global</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo Icon - Using Your Actual Image */}
      <div className={`${sizeClasses[size]} relative`}>
        <Image
          src="/logo.jpg.png" // Updated to match your actual filename
          alt="KPM Global Services Logo"
          width={48}
          height={48}
          className="w-full h-full object-contain"
          priority
        />
      </div>
      
      {/* Company Name */}
      <div className={`font-bold ${textSizes[size]} ${textColors}`}>
        <span className={kpmColor}>KPM</span>
        <span className={globalColor}> Global</span>
      </div>
    </div>
  );
};

export default Logo;
