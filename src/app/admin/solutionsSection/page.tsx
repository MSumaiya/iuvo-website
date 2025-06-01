'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { sanityClient } from '@/../sanity/client'

interface Solution {
  _id: string
  title: string
  description: string
  image?: { asset?: { url?: string } }
}

export default function AdminSolutionsSectionPage() {
  const [solutions, setSolutions] = useState<Solution[]>([])
  const [savingId, setSavingId] = useState<string | null>(null)
  const [message, setMessage] = useState<string>('')

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "solutionsSection"] | order(_createdAt asc) {
        _id,
        title,
        description,
        image { asset->{ url } }
      }`)
      .then(setSolutions)
      .catch(console.error)
  }, [])

  const handleSave = async (id: string, title: string, description: string) => {
    try {
      setSavingId(id)
      setMessage('')

      await sanityClient
        .patch(id)
        .set({ title, description })
        .commit()

      setMessage('✅ Changes saved successfully!')
    } catch (error) {
      console.error('❌ Error saving:', error)
      setMessage('❌ Failed to save changes.')
    } finally {
      setSavingId(null)
    }
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-8">Manage Solutions Section</h1>

      {solutions.map((solution) => (
        <div key={solution._id} className="mb-10 border rounded p-4 shadow">
          <div className="flex gap-6 flex-col md:flex-row">
            {solution.image?.asset?.url && (
              <Image
                src={solution.image.asset.url}
                alt="Preview"
                width={200}
                height={120}
                className="rounded border"
              />
            )}

            <div className="flex-1">
              <label className="block font-medium text-sm">Title</label>
              <input
                type="text"
                className="w-full p-2 border rounded mb-4"
                value={solution.title}
                onChange={(e) => {
                  const updated = solutions.map((s) =>
                    s._id === solution._id ? { ...s, title: e.target.value } : s
                  )
                  setSolutions(updated)
                }}
              />

              <label className="block font-medium text-sm">Description</label>
              <textarea
                rows={3}
                className="w-full p-2 border rounded mb-4"
                value={solution.description}
                onChange={(e) => {
                  const updated = solutions.map((s) =>
                    s._id === solution._id ? { ...s, description: e.target.value } : s
                  )
                  setSolutions(updated)
                }}
              />

              <button
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
                onClick={() =>
                  handleSave(solution._id, solution.title, solution.description)
                }
                disabled={savingId === solution._id}
              >
                {savingId === solution._id ? 'Saving...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      ))}

      {message && <p className="mt-4 text-sm text-green-700">{message}</p>}
    </div>
  )
}
