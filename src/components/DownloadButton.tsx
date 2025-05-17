
import React from 'react';
import { Button } from '../components/ui/button';
import { Download } from 'lucide-react';

interface DownloadButtonProps {
  label: string;
  className?: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ label, className = '' }) => {
  return (
    <Button 
      className={`bg-portfolio-accent hover:bg-portfolio-accent/90 transition-colors ${className}`}
    >
      <Download className="w-4 h-4 mr-2" />
      {label}
    </Button>
  );
};

export default DownloadButton;
