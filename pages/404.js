import Link from 'next/link'
import Layout from '@components/Layout'

export default function Page() {
  return (
    <Layout>
      <main className="text-center w-full px-3 pt-12">
      <span className="text-5xl mb-4 inline-flex">
      🥴
      </span>
      <h1 className="text-3xl font-bold mb-2">Oops</h1>
      <p className="mb-4">This page doesn't exist</p>
      <Link href="/">
        <span className="button">
          Back to Drum Pad
        </span>
      </Link>
      </main>
    </Layout>
  )
}