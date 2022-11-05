import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        shadow 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/box-shadow
        shadow-sm
        shadow
        shadow-md
        shadow-lg
        shadow-xl
        shadow-2xl(작동하지 않는 이슈 있음)
        shadow-inner
        shadow-none */}
    <div class="grid grid-cols-2 gap-6">
        <div class="shadow-sm bg-white rounded-lg">
            shadow-sm
        </div>
        <div class="shadow bg-white rounded-lg">
            shadow
        </div>
        <div class="shadow-md bg-white rounded-lg">
            shadow-md
        </div>
        <div class="shadow-lg bg-white rounded-lg">
            shadow-lg
        </div>
        <div class="shadow-xl bg-white rounded-lg">
            shadow-xl
        </div>
        <div class="shadow-inner bg-white rounded-lg">
            shadow-2xl
        </div>
    </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
