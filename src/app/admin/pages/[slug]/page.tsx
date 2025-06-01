'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { sanityClient } from '@/../sanity/client';
import { groq } from 'next-sanity';

type PageType = {
  _id: string;
  title: string;
  slug: { current: string };
  content: any;
};

export default function EditPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : params.slug?.[0];
  const [page, setPage] = useState<PageType | null>(null);
  const [title, setTitle] = useState('');
  const [slugValue, setSlugValue] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (!slug) return;

    sanityClient
      .fetch(
        groq`*[_type == "page" && slug.current == $slug][0]{
          _id, title, slug, content
        }`,
        { slug }
      )
      .then((data) => {
        setPage(data);
        setTitle(data?.title || '');
        setSlugValue(data?.slug?.current || '');
        setContent(data?.content?.[0]?.children?.[0]?.text || '');
      });
  }, [slug]);

 const handleSave = async () => {
  if (!page?._id) {
    console.error("No page ID found. Cannot save.");
    return;
  }

  const payload = {
    title,
    slug: { current: slugValue },
    content: [
      {
        _type: 'block',
        children: [
          {
            _type: 'span',
            text: content,
          },
        ],
      },
    ],
  };

  console.log("Saving page with ID:", page._id);
  console.log("Data to be saved:", payload);

  try {
    await sanityClient
      .patch(page._id)
      .set(payload)
      .commit();

    alert('Page updated successfully!');
  } catch (error: any) {
    console.error('Update failed:', error.message);
    console.log('Full error object:', error);
    alert('Failed to update the page.');
  }
};

  if (!page) {
    return <p className="p-6 text-gray-600">Loading page...</p>;
  }

  return (
    <div className="p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-6">Edit: {page.title}</h1>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            type="text"
            className="w-full border px-3 py-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Slug</label>
          <input
            type="text"
            className="w-full border px-3 py-2"
            value={slugValue}
            onChange={(e) => setSlugValue(e.target.value)}
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Content</label>
          <textarea
            rows={8}
            className="w-full border px-3 py-2"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="bg-[#061020] text-white px-4 py-2 rounded hover:bg-[#132845]"
          onClick={handleSave}
        >
          Save
        </button>
      </form>
    </div>
  );
}
