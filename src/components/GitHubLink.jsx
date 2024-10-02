import React from 'react';

const GitHubLink = () => {
  return (
    <div className="fixed top-4 right-4">
      <a
        href="https://github.com/Atanu0341/Pok-monExplorer" // Replace with your GitHub URL
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-gray-800 hover:text-gray-600 transition duration-200"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-1"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.305 3.438 9.801 8.207 11.387.6.111.793-.26.793-.577 0-.285-.011-1.238-.017-2.243-3.338.724-4.043-1.608-4.043-1.608-.546-1.384-1.333-1.754-1.333-1.754-1.089-.743.083-.728.083-.728 1.205.085 1.838 1.237 1.838 1.237 1.068 1.828 2.8 1.297 3.48.992.107-.774.418-1.297.762-1.597-2.665-.302-5.467-1.333-5.467-5.93 0-1.313.468-2.384 1.236-3.22-.124-.303-.536-1.53.117-3.186 0 0 1.008-.322 3.303 1.23a11.532 11.532 0 0 1 3.003-.404c1.017.004 2.055.138 3.003.404 2.295-1.553 3.303-1.23 3.303-1.23.654 1.656.241 2.883.118 3.186.769.836 1.236 1.907 1.236 3.22 0 4.605-2.807 5.622-5.474 5.92.43.37.82 1.096.82 2.204 0 1.592-.014 2.873-.014 3.26 0 .318.19.694.798.577C20.563 21.801 24 17.305 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
        <span className="text-sm">View on GitHub</span>
      </a>
    </div>
  );
};

export default GitHubLink;
