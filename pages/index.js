import Layout from "@components/Layout"
import Instructions from "@components/Instructions"
import DrumPad from "@components/DrumPad"

export default function Page() {
  return (
    <Layout>
      <main className="prose p-6 w-full max-w-xl flex flex-col items-center mx-auto pt-0">
        <Instructions/>
        <DrumPad/>
      </main>
    </Layout>
  )
}
