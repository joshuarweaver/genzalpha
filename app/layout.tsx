import './globals.css';
import type { ReactNode } from 'react';

export const metadata = {
  title: 'Modern SaaS Dashboard',
  description: 'A Next.js 14 SaaS dashboard layout with Tailwind CSS',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r flex flex-col">
            <div className="h-16 flex items-center justify-center font-bold text-xl border-b">
              <span className="text-blue-600">SaaSify</span>
            </div>
            <nav className="flex-1 px-4 py-6 space-y-2">
              <a href="/" className="block rounded px-3 py-2 text-gray-700 hover:bg-blue-100 font-medium">Dashboard</a>
              <a href="/billing" className="block rounded px-3 py-2 text-gray-700 hover:bg-blue-100 font-medium">Billing</a>
              <a href="/settings" className="block rounded px-3 py-2 text-gray-700 hover:bg-blue-100 font-medium">Settings</a>
            </nav>
            <div className="border-t p-4 text-sm text-gray-500">Logged in as <span className="font-semibold text-gray-700">user@saas.com</span></div>
          </aside>
          {/* Main Area */}
          <div className="flex-1 flex flex-col">
            {/* Topbar */}
            <header className="h-16 bg-white border-b flex items-center px-6 justify-between">
              <span className="text-lg font-semibold">Dashboard</span>
              <div className="flex items-center space-x-4">
                <button className="rounded-full h-10 w-10 bg-gray-200 flex items-center justify-center">
                  <span className="sr-only">Notifications</span>
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600"><path d="M10 2a6 6 0 016 6v2a6 6 0 01-6 6 6 6 0 01-6-6V8a6 6 0 016-6z" /><path d="M10 18a2 2 0 01-2-2" /></svg>
                </button>
                <img src="https://i.pravatar.cc/40" alt="user avatar" className="rounded-full h-10 w-10 border" />
              </div>
            </header>
            {/* Dynamic Content */}
            <main className="flex-1 p-8 bg-gray-50 overflow-y-auto">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}