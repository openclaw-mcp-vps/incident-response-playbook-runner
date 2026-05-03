import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Incident Response Playbook Runner',
  description: 'Automated incident response workflows for DevOps and SRE teams. Execute predefined checklists with team notifications and real-time status tracking.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18a81e8f-a188-46b7-93e5-408e8c751b0b"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
