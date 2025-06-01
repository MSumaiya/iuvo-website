'use client';

import { useEffect, useState } from 'react';
import { sanityClient } from '@/../sanity/client';
import { homepageQuery } from '@/../sanity/queries';
import Image from 'next/image';

export default function AdminHomepage() {
  const [data, setData] = useState<any>(null);
  const [heroTitle, setHeroTitle] = useState('');
  const [docId, setDocId] = useState('');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    sanityClient.fetch(homepageQuery).then((res) => {
      console.log("✅ Fetched homepage:", res);
      if (res) {
        setData(res);
        setDocId(res._id);
        setHeroTitle(res.hero?.catchSlogan ?? '');
      }
    });
  }, []);

  const handleSave = async () => {
    if (!data.hero?._id) return;
    setSaving(true);
    try {
      await sanityClient
        .patch(data.hero._id)
        .set({ catchSlogan: heroTitle })
        .commit();

      setMessage('✅ Hero title updated successfully!');
    } catch (err) {
      console.error(err);
      setMessage('❌ Error saving changes');
    }
    setSaving(false);
  };

  if (!data) {
    return (
      <div className="p-6 text-gray-600">
        ⚠️ No homepage document found in Sanity.
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl">
      <h1 className="text-2xl font-bold mb-6">Homepage Content</h1>

      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Hero Section</h2>

        <label className="block text-sm font-medium mb-1">Catch Slogan</label>

        <input
          type="text"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />

        {data.hero?.backgroundImage?.asset?.url && (
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Current Image</label>
            <Image
              src={data.hero.backgroundImage.asset.url}
              alt="Hero Image"
              width={500}
              height={300}
              className="rounded border w-full max-w-sm"
            />
          </div>
        )}

        <label className="block text-sm font-medium mb-1">Change Hero Image</label>
        <input
          type="file"
          accept="image/*"
          className="mb-6"
          onChange={() => alert('💡 Image upload logic will go here')}
        />

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
          disabled={saving}
        >
          {saving ? 'Saving...' : 'Save'}
        </button>

        {message && <p className="mt-2 text-sm">{message}</p>}
      </div>
    </div>
  );
}
