'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { getAllPagesQuery } from '@/../sanity/queries';
import Link from 'next/link';

export default function AdminPages() {
  const [pages, setPages] = useState<{ _id: string; title: string; slug: string }[]>([]);

  useEffect(() => {
    sanityClient.fetch(getAllPagesQuery).then((data) => setPages(data));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Pages</h1>
      <table className="w-full table-auto border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Slug</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {pages.map((page) => (
            <tr key={page._id}>
              <td className="border px-4 py-2">{page.title}</td>
              <td className="border px-4 py-2">{page.slug}</td>
              <td className="border px-4 py-2">
                <Link href={`/admin/pages/${page.slug}`} className="text-blue-600 underline">
                    Edit
                </Link>
            </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}