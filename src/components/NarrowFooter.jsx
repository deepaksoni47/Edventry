import React from 'react';
import { Heart } from 'lucide-react';

const NarrowFooter = () => {
  return (
    <footer className="bg-gradient-to-br from-sky-300 to-purple-200 border-t border-gray-200 fixed bottom-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-3">
          {/* Centered Copyright */}
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>© 2025 Edventry. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for learners.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NarrowFooter; 