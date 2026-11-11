import React, { useState } from 'react';
import { Copy, Check, Terminal, Code2 } from 'lucide-react';
import { useToast } from '../common/Toast';
import './CodeWindow.css';

const CodeWindow = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const { addToast } = useToast();

  const profileCode = `// Developer profile definition
const developer: DeveloperProfile = {
  name: "Nikolopikolo",
  role: "Aspiring Software Developer",
  mission: "Transforming ideas into high-quality code",
  languages: ["Kotlin", "JavaScript", "Python", "HTML/CSS"],
  coreFrameworks: ["React", "Android SDK", "Jetpack Compose"],
  passions: [
    "Native Android utilities",
    "Modern responsive web apps",
    "Offline-first architectures"
  ],
  status: "Open to opportunities & collaborations"
};

export default developer;`;

  const terminalOutput = `$ git status
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  modified: PixelGallery (Wi-Fi Local Sync)
  modified: Fundory (Budget Calculator)

$ npm run dev
> ready in 184ms | localhost:5173
● Compiling components... 100% clean`;

  const handleCopy = () => {
    const textToCopy = activeTab === 'profile' ? profileCode : terminalOutput;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    addToast(activeTab === 'profile' ? 'Profile snippet copied to clipboard!' : 'Terminal output copied to clipboard!');
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-window">
      {/* Decorative ambient glow */}
      <div className="code-window-glow" />

      {/* Window Title Bar */}
      <div className="code-window-header">
        <div className="code-window-dots">
          <span className="dot dot--red" />
          <span className="dot dot--yellow" />
          <span className="dot dot--green" />
        </div>

        <div className="code-window-tabs">
          <button
            type="button"
            className={`code-tab ${activeTab === 'profile' ? 'code-tab--active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <Code2 size={13} className="tab-icon" />
            <span>developer.config.ts</span>
          </button>
          <button
            type="button"
            className={`code-tab ${activeTab === 'terminal' ? 'code-tab--active' : ''}`}
            onClick={() => setActiveTab('terminal')}
          >
            <Terminal size={13} className="tab-icon" />
            <span>status.sh</span>
          </button>
        </div>

        <button
          type="button"
          className="code-copy-btn"
          onClick={handleCopy}
          aria-label="Copy snippet"
          title="Copy code"
        >
          {copied ? <Check size={14} className="copied-icon" /> : <Copy size={14} />}
        </button>
      </div>

      {/* Editor Body */}
      <div className="code-window-body">
        {activeTab === 'profile' ? (
          <pre className="code-content">
            <code>
              <span className="token-comment">// Developer profile definition</span>{'\n'}
              <span className="token-keyword">const</span> <span className="token-variable">developer</span>: <span className="token-type">DeveloperProfile</span> = {'{'}{'\n'}
              {'  '}<span className="token-property">name</span>: <span className="token-string">"Nikolopikolo"</span>,{'\n'}
              {'  '}<span className="token-property">role</span>: <span className="token-string">"Aspiring Software Developer"</span>,{'\n'}
              {'  '}<span className="token-property">mission</span>: <span className="token-string">"Writing clean, reliable software"</span>,{'\n'}
              {'  '}<span className="token-property">languages</span>: [<span className="token-string">"Kotlin"</span>, <span className="token-string">"JavaScript"</span>, <span className="token-string">"Python"</span>],{'\n'}
              {'  '}<span className="token-property">coreFrameworks</span>: [<span className="token-string">"React"</span>, <span className="token-string">"Android SDK"</span>],{'\n'}
              {'  '}<span className="token-property">passions</span>: [{'\n'}
              {'    '}<span className="token-string">"Native Android utilities"</span>,{'\n'}
              {'    '}<span className="token-string">"Modern responsive web apps"</span>,{'\n'}
              {'    '}<span className="token-string">"Offline-first architectures"</span>{'\n'}
              {'  '}],{'\n'}
              {'  '}<span className="token-property">status</span>: <span className="token-accent">"Ready to collaborate"</span>{'\n'}
              {'}'};{'\n\n'}
              <span className="token-keyword">export default</span> <span className="token-variable">developer</span>;
            </code>
          </pre>
        ) : (
          <pre className="code-content terminal-content">
            <code>
              <span className="term-prompt">$</span> git status{'\n'}
              <span className="term-dim">On branch main</span>{'\n'}
              <span className="term-dim">Your branch is up to date with 'origin/main'.</span>{'\n\n'}
              <span className="term-info">Featured Projects:</span>{'\n'}
              {'  '}<span className="term-accent">✓ PixelGallery</span> <span className="term-dim">(Android & Wear OS Local Sync)</span>{'\n'}
              {'  '}<span className="term-accent">✓ Fundory</span> <span className="term-dim">(Offline Budget Calculator)</span>{'\n\n'}
              <span className="term-prompt">$</span> npm run build:skills{'\n'}
              <span className="term-success">● Build success: React, Kotlin, Git, Android</span>
            </code>
          </pre>
        )}
      </div>

      {/* Editor Status Bar */}
      <div className="code-window-footer">
        <div className="footer-left">
          <span className="status-dot" />
          <span>Ready</span>
          <span className="footer-divider">•</span>
          <span>main</span>
        </div>
        <div className="footer-right">
          <span>UTF-8</span>
          <span className="footer-divider">•</span>
          <span>TypeScript</span>
        </div>
      </div>
    </div>
  );
};

export default CodeWindow;

