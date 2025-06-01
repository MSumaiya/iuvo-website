// src/app/admin/layout.tsx
import React from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#061020] text-white p-6">
        <h2 className="text-xl font-bold mb-6">iUvo Admin</h2>
        <nav className="space-y-4">
          <Link href="/admin" className="block hover:text-blue-400">Dashboard</Link>
          <Link href="/admin/pages" className="block hover:text-blue-400">Pages</Link>
          <Link href="/admin/media" className="block hover:text-blue-400">Media</Link>
          <Link href="/admin/settings" className="block hover:text-blue-400">Settings</Link>
          <Link href="/admin/homepage" className="block hover:text-blue-400">
  Homepage
</Link>
          <Link href="/admin/solutionsSection" className="block hover:text-blue-400">Solutions Section</Link>

        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">
        {children}
      </main>
    </div>
  );
}
