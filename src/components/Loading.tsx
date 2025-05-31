import React, { useEffect, useState } from 'react';
import './Loading.css';

interface LoadingProps {
  onLoadingComplete: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      onLoadingComplete();
    }, 2000); // Loading will show for 2 seconds

    return () => clearTimeout(timer);
  }, [onLoadingComplete]);

  if (!isLoading) return null;

  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-circle">
          <div className="loading-text">DE</div>
        </div>
        <div className="loading-rings">
          <div className="ring"></div>
          <div className="ring"></div>
          <div className="ring"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading; 