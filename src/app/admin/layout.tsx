// src/app/admin/layout.tsx
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [authed, setAuthed] = useState(false);
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    setMounted(true);
    // persist auth per-tab
    if (typeof window !== 'undefined' && sessionStorage.getItem('admin_ok') === '1') {
      setAuthed(true);
    }
  }, []);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (!correct) {
      alert('Admin password is not set in environment variables.');
      return;
    }

    if (pwd === correct) {
      setAuthed(true);
      sessionStorage.setItem('admin_ok', '1');
    } else {
      alert('Wrong password');
    }
  };

  if (!mounted) return null;

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <form onSubmit={onSubmit} className="bg-white p-6 rounded shadow max-w-sm w-full">
          <h2 className="text-lg font-semibold mb-4">Enter Admin Password</h2>
          <input
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
            placeholder="Password"
            className="border px-4 py-2 w-full mb-4 rounded"
          />
          <button
            type="submit"
            className="bg-[#001f3f] text-white px-4 py-2 rounded w-full hover:bg-[#003366]"
          >
            Enter
          </button>
        </form>
      </div>
    );
  }

  // Authenticated view (your original layout)
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-[#061020] text-white p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">iUvo Admin</h2>
          <button
            onClick={() => {
              sessionStorage.removeItem('admin_ok');
              setAuthed(false);
            }}
            className="text-sm opacity-80 hover:opacity-100 underline"
            aria-label="Log out"
            title="Log out"
          >
            Log out
          </button>
        </div>
        <nav className="space-y-4">
          <Link href="/admin" className="block hover:text-blue-400">Dashboard</Link>
          <Link href="/admin/pages" className="block hover:text-blue-400">Pages</Link>
          <Link href="/admin/media" className="block hover:text-blue-400">Media</Link>
          <Link href="/admin/settings" className="block hover:text-blue-400">Settings</Link>
          <Link href="/admin/homepage" className="block hover:text-blue-400">Homepage</Link>
          <Link href="/admin/solutionsSection" className="block hover:text-blue-400">Solutions Section</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-50">{children}</main>
    </div>
  );
}
