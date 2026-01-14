import React, { useState, useEffect } from 'react'

// Terminal/Linux Theme Example
export const TerminalExample = () => {
  const [currentPath, setCurrentPath] = useState('~')
  const [terminalLines, setTerminalLines] = useState([
    { type: 'system', content: 'dumiya@portfolio:~$ cat welcome.txt' },
    { type: 'output', content: '╔══════════════════════════════════════════╗' },
    { type: 'output', content: '║   DUMIYA\'S PORTFOLIO SYSTEM v1.0        ║' },
    { type: 'output', content: '║   Type "help" for available commands     ║' },
    { type: 'output', content: '╚══════════════════════════════════════════╝' },
  ])

  const [currentCommand, setCurrentCommand] = useState('')
  const [cursorVisible, setCursorVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(v => !v)
    }, 530)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="w-full min-h-screen bg-[#0c0c0c] text-[#00ff00] font-mono relative overflow-hidden">
      {/* Scanline Effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00ff00]/5 to-transparent bg-[length:100%_4px] animate-scan opacity-30"></div>

      {/* CRT Glow Effect */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_100px_rgba(0,255,0,0.1)]"></div>

      {/* Terminal Header */}
      <div className="bg-[#1a1a1a] border-b border-[#00ff00]/30 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <span className="text-[#00ff00] text-sm">dumiya@portfolio: ~</span>
        </div>
        <div className="text-xs text-[#00ff00]/60">bash</div>
      </div>

      {/* Terminal Content */}
      <div className="p-4 space-y-1 text-sm">
        {/* Previous Commands */}
        {terminalLines.map((line, i) => (
          <div key={i} className={line.type === 'system' ? 'text-[#00ff00]' : 'text-[#00ff00]/80'}>
            {line.content}
          </div>
        ))}

        {/* Current Directory Structure */}
        <div className="mt-4 space-y-1 text-[#00ff00]/80">
          <div>dumiya@portfolio:~$ ls -la</div>
          <div className="ml-4 space-y-1">
            <div className="flex gap-4">
              <span className="text-blue-400">drwxr-xr-x</span>
              <span>4 dumiya</span>
              <span>4096</span>
              <span>Dec 30 2025</span>
              <span className="text-cyan-400">about/</span>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-400">drwxr-xr-x</span>
              <span>4 dumiya</span>
              <span>4096</span>
              <span>Dec 30 2025</span>
              <span className="text-cyan-400">projects/</span>
            </div>
            <div className="flex gap-4">
              <span className="text-blue-400">drwxr-xr-x</span>
              <span>4 dumiya</span>
              <span>4096</span>
              <span>Dec 30 2025</span>
              <span className="text-cyan-400">skills/</span>
            </div>
            <div className="flex gap-4">
              <span className="text-green-400">-rwxr-xr-x</span>
              <span>1 dumiya</span>
              <span>2048</span>
              <span>Dec 30 2025</span>
              <span className="text-green-400">contact.sh*</span>
            </div>
            <div className="flex gap-4">
              <span className="text-white">-rw-r--r--</span>
              <span>1 dumiya</span>
              <span>1024</span>
              <span>Dec 30 2025</span>
              <span>README.md</span>
            </div>
          </div>
        </div>

        {/* File Content Display */}
        <div className="mt-4 space-y-1">
          <div className="text-[#00ff00]">dumiya@portfolio:~$ cat about/profile.txt</div>
          <div className="ml-4 border-l-2 border-[#00ff00]/30 pl-4 py-2 space-y-2 text-[#00ff00]/90">
            <div className="text-cyan-400">╭─ PROFILE ──────────────────────────────╮</div>
            <div>│ Name:        Dumiya                     │</div>
            <div>│ Role:        Full Stack Developer       │</div>
            <div>│ Location:    [Your Location]            │</div>
            <div>│ Status:      🟢 Available               │</div>
            <div className="text-cyan-400">╰────────────────────────────────────────╯</div>
          </div>
        </div>

        {/* Skills Tree */}
        <div className="mt-4 space-y-1">
          <div className="text-[#00ff00]">dumiya@portfolio:~$ tree skills/</div>
          <div className="ml-4 text-[#00ff00]/80">
            <div>skills/</div>
            <div>├── frontend/</div>
            <div>│   ├── react.js</div>
            <div>│   ├── vue.js</div>
            <div>│   └── tailwind.css</div>
            <div>├── backend/</div>
            <div>│   ├── node.js</div>
            <div>│   └── python.py</div>
            <div>└── tools/</div>
            <div>    ├── git</div>
            <div>    └── docker</div>
          </div>
        </div>

        {/* Help Menu */}
        <div className="mt-4 space-y-1">
          <div className="text-[#00ff00]">dumiya@portfolio:~$ help</div>
          <div className="ml-4 space-y-1 text-[#00ff00]/80">
            <div className="text-yellow-400">Available Commands:</div>
            <div className="grid grid-cols-2 gap-2 mt-2">
              <div><span className="text-cyan-400">cd &lt;dir&gt;</span> - Navigate to directory</div>
              <div><span className="text-cyan-400">ls</span> - List files</div>
              <div><span className="text-cyan-400">cat &lt;file&gt;</span> - Display file content</div>
              <div><span className="text-cyan-400">./contact.sh</span> - Open contact form</div>
              <div><span className="text-cyan-400">tree</span> - Show directory tree</div>
              <div><span className="text-cyan-400">clear</span> - Clear terminal</div>
            </div>
          </div>
        </div>

        {/* Current Prompt */}
        <div className="mt-4 flex items-center gap-2">
          <span className="text-[#00ff00]">dumiya@portfolio:~$</span>
          <span className={`${cursorVisible ? 'opacity-100' : 'opacity-0'}`}>▋</span>
        </div>
      </div>

      {/* Feature Callouts - Hidden in preview */}
      <div className="hidden absolute top-20 right-4 bg-[#1a1a1a]/95 border border-[#00ff00]/30 p-4 w-72 text-xs shadow-2xl">
        <div className="font-bold mb-2 flex items-center gap-2 text-[#00ff00]">
          <span>💻</span> Terminal Theme Features:
        </div>
        <ul className="space-y-1 list-none text-[#00ff00]/80">
          <li>→ Command-line navigation</li>
          <li>→ File system structure</li>
          <li>→ Interactive commands</li>
          <li>→ Syntax highlighting</li>
          <li>→ ASCII art elements</li>
          <li>→ CRT monitor effects</li>
          <li>→ Scanline animations</li>
          <li>→ Typing animations</li>
          <li>→ Tab completion</li>
        </ul>
      </div>

      {/* Bottom Status Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#1a1a1a] border-t border-[#00ff00]/30 px-4 py-1 flex items-center justify-between text-xs">
        <div className="flex gap-4">
          <span className="text-[#00ff00]">USER: dumiya</span>
          <span className="text-[#00ff00]/60">│</span>
          <span className="text-cyan-400">PATH: {currentPath}</span>
        </div>
        <div className="flex gap-3 text-[#00ff00]/60">
          <span>ESC: Menu</span>
          <span>TAB: Autocomplete</span>
          <span>CTRL+C: Cancel</span>
        </div>
      </div>
    </div>
  )
}
