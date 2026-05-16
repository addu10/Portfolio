'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import './Terminal.css';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string | React.ReactNode;
}

const SECTIONS = ['home', 'about', 'experience', 'skills', 'terminal', 'projects', 'achievements', 'contact'];

const SOCIAL_LINKS: Record<string, string> = {
  github: 'https://github.com/addu10',
  linkedin: 'https://www.linkedin.com/in/adnan-sameer-b8050024a/',
  instagram: 'https://www.instagram.com/addduu._/',
};

interface CommandResult {
  output: React.ReactNode;
  action?: () => void;
}

function resolveCommand(raw: string): CommandResult {
  const parts = raw.trim().toLowerCase().split(/\s+/);
  const cmd = parts[0];
  const arg = parts.slice(1).join(' ');

  switch (cmd) {
    case 'whoami':
      return {
        output: (
          <span>
            <span className="term-green">adnan</span>@<span className="term-cyan">portfolio</span>
            {' — '}AI Automation Specialist · Full-Stack Developer · BTech IT, CUSAT (2026)
          </span>
        ),
      };

    case 'help':
      return {
        output: (
          <span>
            Available commands:<br />
            <span className="term-cyan">  whoami          </span>— who am I<br />
            <span className="term-cyan">  about           </span>— a bit about me<br />
            <span className="term-cyan">  skills          </span>— technical skills<br />
            <span className="term-cyan">  experience      </span>— work experience<br />
            <span className="term-cyan">  projects        </span>— notable projects<br />
            <span className="term-cyan">  contact         </span>— how to reach me<br />
            <span className="term-cyan">  socials         </span>— social links<br />
            <span className="term-cyan">  ls              </span>— list all sections<br />
            <span className="term-cyan">  goto &lt;section&gt;  </span>— scroll to section<br />
            <span className="term-cyan">  open &lt;platform&gt; </span>— open github / linkedin / instagram<br />
            <span className="term-cyan">  resume          </span>— view resume in new tab<br />
            <span className="term-cyan">  download        </span>— download resume as PDF<br />
            <span className="term-cyan">  date            </span>— current date & time<br />
            <span className="term-cyan">  clear           </span>— clear terminal<br />
          </span>
        ),
      };

    case 'about':
      return {
        output: (
          <span>
            BTech IT graduate, CUSAT (May 2026, CGPA: 9.618)<br />
            Currently: AI Automation Specialist at <span className="term-green">Bayzat UAE</span><br />
            Focus: AI/ML · n8n automation · Full-stack web · Web scraping<br />
            3× Hackathon winner · 6+ production projects
          </span>
        ),
      };

    case 'skills':
      return {
        output: (
          <span>
            <span className="term-purple">Languages:   </span>Python · JavaScript · C/C++ · HTML/CSS<br />
            <span className="term-purple">Frameworks:  </span>Next.js · Flask · Django · React Native<br />
            <span className="term-purple">Tools:       </span>Git · Supabase · SQL · Playwright · Nodriver<br />
            <span className="term-purple">AI/Auto:     </span>n8n · Clay AI · Customer.io · OpenAI APIs
          </span>
        ),
      };

    case 'experience':
      return {
        output: (
          <span>
            <span className="term-green">2025-Present</span>  AI Automation Specialist — Bayzat UAE<br />
            <span className="term-green">2025 May-Jun</span>  AI Intern — Bayzat UAE<br />
            <span className="term-green">2022 – 2026</span>   BTech IT — CUSAT, Kochi
          </span>
        ),
      };

    case 'projects':
      return {
        output: (
          <span>
            <span className="term-cyan">1.</span> CareerBridge     — AI jobs portal (Next.js · Django · Supabase)<br />
            <span className="term-cyan">2.</span> Sentinel Shield  — Passport + face verification (Python · Flask)<br />
            <span className="term-cyan">3.</span> CMEX             — Campus marketplace (React Native · Supabase)<br />
            <span className="term-cyan">4.</span> Our Rupee        — Blockchain donations (Ethereum · Solidity)<br />
            <span className="term-cyan">5.</span> Criminal Verify  — Decentralized police records (Ethereum)<br />
            <span className="term-cyan">6.</span> HIPUS            — Notes sharing (Flask · Telethon · Next.js)
          </span>
        ),
      };

    case 'contact':
      return {
        output: (
          <span>
            <span className="term-green">Email:   </span>adnan.sameer957@gmail.com<br />
            <span className="term-green">GitHub:  </span>github.com/addu10<br />
            <span className="term-green">Location:</span>Ernakulam, Kerala, India
          </span>
        ),
      };

    case 'socials':
      return {
        output: (
          <span>
            <span className="term-purple">GitHub:    </span>github.com/addu10<br />
            <span className="term-purple">LinkedIn:  </span>linkedin.com/in/adnan-sameer-b8050024a<br />
            <span className="term-purple">Instagram: </span>@addduu._
          </span>
        ),
      };

    case 'ls': {
      return {
        output: (
          <span>
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">home/</span>{'         '}landing section<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">about/</span>{'        '}bio & stats<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">experience/</span>{'   '}work timeline<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">skills/</span>{'       '}tech stack<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">terminal/</span>{'     '}you are here<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">projects/</span>{'     '}6 projects<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">achievements/</span>{'  '}hackathon wins<br />
            <span className="term-cyan">drwxr-xr-x</span>  <span className="term-green">contact/</span>{'      '}get in touch<br />
            <span className="term-muted">Use </span><span className="term-cyan">goto &lt;section&gt;</span><span className="term-muted"> to navigate.</span>
          </span>
        ),
      };
    }

    case 'goto': {
      if (!arg) {
        return { output: <span className="term-error-text">Usage: goto &lt;section&gt;  (try: goto projects)</span> };
      }
      if (!SECTIONS.includes(arg)) {
        return {
          output: (
            <span className="term-error-text">
              Section &apos;{arg}&apos; not found. Available: {SECTIONS.join(', ')}
            </span>
          ),
        };
      }
      return {
        output: <span><span className="term-green">→</span> Navigating to <span className="term-cyan">{arg}</span>…</span>,
        action: () => {
          const el = document.getElementById(arg);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        },
      };
    }

    case 'open': {
      const platform = arg.toLowerCase();
      const url = SOCIAL_LINKS[platform];
      if (!url) {
        return {
          output: (
            <span className="term-error-text">
              Unknown platform &apos;{arg}&apos;. Try: github, linkedin, instagram
            </span>
          ),
        };
      }
      return {
        output: <span><span className="term-green">→</span> Opening <span className="term-cyan">{platform}</span> in a new tab…</span>,
        action: () => window.open(url, '_blank', 'noopener,noreferrer'),
      };
    }

    case 'resume':
      return {
        output: <span><span className="term-green">→</span> Opening resume in a new tab…</span>,
        action: () => window.open('/resume', '_blank'),
      };

    case 'download':
      return {
        output: <span><span className="term-green">→</span> Resume download initiated. Check your downloads.</span>,
        action: () => {
          const a = document.createElement('a');
          a.href = '/Resume - Adnan Sameer.pdf';
          a.download = 'Adnan_Sameer_Resume.pdf';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
        },
      };

    case 'date':
      return {
        output: <span className="term-green">{new Date().toString()}</span>,
      };

    case 'clear':
      return { output: null };

    default:
      return {
        output: (
          <span className="term-error-text">
            command not found: {cmd}. Type <span className="term-cyan">help</span> for available commands.
          </span>
        ),
      };
  }
}

const LEFT_CHIPS = [
  { label: 'whoami', cmd: 'whoami' },
  { label: 'about', cmd: 'about' },
  { label: 'skills', cmd: 'skills' },
  { label: 'experience', cmd: 'experience' },
  { label: 'projects', cmd: 'projects' },
  { label: 'ls', cmd: 'ls' },
];

const RIGHT_CHIPS = [
  { label: 'goto home', cmd: 'goto home' },
  { label: 'goto projects', cmd: 'goto projects' },
  { label: 'resume', cmd: 'resume' },
  { label: 'download', cmd: 'download' },
  { label: 'open github', cmd: 'open github' },
  { label: 'open linkedin', cmd: 'open linkedin' },
  { label: 'date', cmd: 'date' },
];

const Terminal: React.FC = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [activeChip, setActiveChip] = useState<string | null>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasAutoRun = useRef(false);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  const runCommand = useCallback((cmd: string) => {
    const trimmed = cmd.trim();
    if (!trimmed) return;

    if (trimmed.toLowerCase() === 'clear') {
      setLines([]);
      return;
    }

    const result = resolveCommand(trimmed);
    setLines(prev => [
      ...prev,
      { type: 'input', content: cmd },
      { type: 'output', content: result.output },
    ]);
    setHistory(prev => [cmd, ...prev]);
    setHistoryIdx(-1);

    if (result.action) {
      setTimeout(result.action, 300);
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  useEffect(() => {
    if (hasAutoRun.current) return;
    hasAutoRun.current = true;
    const run = async () => {
      await new Promise(r => setTimeout(r, 600));
      runCommand('whoami');
    };
    run();
  }, [runCommand]);

  const handleChipClick = useCallback((cmd: string) => {
    setActiveChip(cmd);
    setTimeout(() => setActiveChip(null), 300);
    inputRef.current?.focus();
    runCommand(cmd);
  }, [runCommand]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    runCommand(input);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, history.length - 1);
      setHistoryIdx(next);
      setInput(history[next] ?? '');
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? '' : history[next]);
    }
  };

  return (
    <section className="terminal-section section" id="terminal">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="section-title">Interactive Terminal</h2>
          <p className="section-description">
            Explore my profile the developer way — type commands and get to know me.
          </p>

          <div className="terminal-scene">
            {/* Left command chips */}
            <div className="terminal-chips terminal-chips-left">
              {LEFT_CHIPS.map((chip, i) => (
                <button
                  key={chip.cmd}
                  className={`term-chip ${activeChip === chip.cmd ? 'term-chip-active' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                  onClick={() => handleChipClick(chip.cmd)}
                  title={`Run: ${chip.cmd}`}
                >
                  <span className="term-chip-arrow">›</span> {chip.label}
                </button>
              ))}
            </div>

          <div className="terminal-window" onClick={() => inputRef.current?.focus()}>
            <div className="terminal-titlebar">
              <div className="terminal-dots">
                <span className="term-dot term-dot-red" />
                <span className="term-dot term-dot-yellow" />
                <span className="term-dot term-dot-green" />
              </div>
              <span className="terminal-title">adnan@portfolio: ~</span>
            </div>

            <div className="terminal-body" ref={bodyRef}>
              <div className="term-welcome">
                Welcome! Type <span className="term-cyan">help</span> to see available commands.
              </div>

              {lines.map((line, i) => (
                <div key={i} className={`term-line term-${line.type}`}>
                  {line.type === 'input' && (
                    <span className="term-prompt">
                      <span className="term-green">adnan</span>
                      <span className="term-muted">@</span>
                      <span className="term-cyan">portfolio</span>
                      <span className="term-muted">:~$ </span>
                    </span>
                  )}
                  {line.content}
                </div>
              ))}

              <form className="term-input-row" onSubmit={handleSubmit}>
                <span className="term-prompt">
                  <span className="term-green">adnan</span>
                  <span className="term-muted">@</span>
                  <span className="term-cyan">portfolio</span>
                  <span className="term-muted">:~$ </span>
                </span>
                <input
                  ref={inputRef}
                  className="term-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  spellCheck={false}
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  aria-label="Terminal input"
                />
                <span className="term-blink-cursor" />
              </form>
            </div>
          </div>

            {/* Right command chips */}
            <div className="terminal-chips terminal-chips-right">
              {RIGHT_CHIPS.map((chip, i) => (
                <button
                  key={chip.cmd}
                  className={`term-chip ${activeChip === chip.cmd ? 'term-chip-active' : ''}`}
                  style={{ animationDelay: `${i * 0.12}s` }}
                  onClick={() => handleChipClick(chip.cmd)}
                  title={`Run: ${chip.cmd}`}
                >
                  {chip.label} <span className="term-chip-arrow">›</span>
                </button>
              ))}
            </div>
          </div>{/* end terminal-scene */}
        </motion.div>
      </div>
    </section>
  );
};

export default Terminal;
