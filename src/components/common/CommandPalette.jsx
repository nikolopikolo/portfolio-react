import React, { useState, useEffect } from 'react';
import {
  Search,
  Command,
  Compass,
  Code2,
  FolderGit2,
  Mail,
  ArrowUp,
  Copy,
  ExternalLink,
  X,
  Terminal,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { personalInfo } from '../../data/portfolioData';
import { useToast } from './Toast';
import './CommandPalette.css';

const CommandPalette = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { addToast } = useToast();

  const handleAction = (item) => {
    onClose();
    if (item.type === 'scroll') {
      const el = document.getElementById(item.targetId);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.type === 'copy') {
      navigator.clipboard.writeText(personalInfo.email);
      addToast('Email copied to clipboard!');
    } else if (item.type === 'external') {
      window.open(item.url, '_blank', 'noopener,noreferrer');
    }
  };

  const commandItems = [
    {
      id: 'home',
      name: 'Go to Home',
      category: 'Navigation',
      icon: Terminal,
      type: 'scroll',
      targetId: 'hero',
    },
    {
      id: 'about',
      name: 'Go to About Me',
      category: 'Navigation',
      icon: Compass,
      type: 'scroll',
      targetId: 'about',
    },
    {
      id: 'skills',
      name: 'Explore Skills',
      category: 'Navigation',
      icon: Code2,
      type: 'scroll',
      targetId: 'skills',
    },
    {
      id: 'projects',
      name: 'View Projects',
      category: 'Navigation',
      icon: FolderGit2,
      type: 'scroll',
      targetId: 'projects',
    },
    {
      id: 'contact',
      name: 'Jump to Contact',
      category: 'Navigation',
      icon: Mail,
      type: 'scroll',
      targetId: 'contact',
    },
    {
      id: 'pixelgallery',
      name: 'PixelGallery Repository',
      category: 'Projects',
      icon: GithubIcon,
      type: 'external',
      url: 'https://github.com/nikolopikolo/PixelGallery',
    },
    {
      id: 'fundory',
      name: 'Fundory Repository',
      category: 'Projects',
      icon: GithubIcon,
      type: 'external',
      url: 'https://github.com/nikolopikolo/fundory',
    },
    {
      id: 'github-profile',
      name: 'Open GitHub Profile',
      category: 'External',
      icon: GithubIcon,
      type: 'external',
      url: personalInfo.github,
    },
    {
      id: 'copy-email',
      name: 'Copy Contact Email',
      category: 'Actions',
      icon: Copy,
      type: 'copy',
    },
    {
      id: 'scroll-top',
      name: 'Scroll to Top',
      category: 'Actions',
      icon: ArrowUp,
      type: 'scroll',
      targetId: 'hero',
    },
  ];

  const filteredItems = commandItems.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    setSelectedIndex(0);
  }, [searchTerm]);

  // Keyboard navigation inside palette
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          handleAction(filteredItems[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex]);

  if (!isOpen) return null;

  return (
    <div className="palette-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="palette-container" onClick={(e) => e.stopPropagation()}>
        {/* Search Input Bar */}
        <div className="palette-header">
          <Search size={18} className="palette-search-icon" />
          <input
            type="text"
            className="palette-input"
            placeholder="Type a command or search sections..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            autoFocus
          />
          <button type="button" className="palette-close-btn" onClick={onClose} aria-label="Close palette">
            <kbd className="palette-kbd">ESC</kbd>
          </button>
        </div>

        {/* Results List */}
        <div className="palette-list">
          {filteredItems.length === 0 ? (
            <div className="palette-empty">No matching commands found.</div>
          ) : (
            filteredItems.map((item, index) => {
              const IconComp = item.icon;
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  className={`palette-item ${isSelected ? 'palette-item--selected' : ''}`}
                  onClick={() => handleAction(item)}
                  onMouseEnter={() => setSelectedIndex(index)}
                >
                  <div className="palette-item-left">
                    <IconComp size={16} className="palette-item-icon" />
                    <span className="palette-item-name">{item.name}</span>
                  </div>
                  <div className="palette-item-right">
                    <span className="palette-item-category">{item.category}</span>
                    {item.type === 'external' && <ExternalLink size={12} className="palette-ext-icon" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="palette-footer">
          <div className="palette-hint">
            <kbd className="palette-kbd">↑</kbd> <kbd className="palette-kbd">↓</kbd> to navigate
          </div>
          <div className="palette-hint">
            <kbd className="palette-kbd">↵</kbd> to select
          </div>
          <div className="palette-hint">
            <kbd className="palette-kbd">esc</kbd> to dismiss
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;

