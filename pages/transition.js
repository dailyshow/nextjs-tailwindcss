import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        transition 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/transition-property */}
        <div class="flex h-64 justify-center items-center">
        <button class="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white">
            Save Changes
        </button>
        <button class="transition ease-linear bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 rounded p-5 m-3 text-white">
            Save Changes
        </button>
        <button class="transition ease-in-out bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-100 rounded p-5 m-3 text-white">
            Save Changes
        </button>
        </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
