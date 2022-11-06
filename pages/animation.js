import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        animation 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/animation */}
      <div class="relative rounded-xl overflow-auto p-8">
          <div class="flex items-center justify-center">
              <span class="relative inline-flex">
                  <button type="button" class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-sky-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 cursor-not-allowed ring-1 ring-slate-900/10 dark:ring-slate-200/20" disabled="">
                  Transactions
                  </button>
                  <span class="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                      {/* animate-spin, animate-ping, animate-bounce */}
                      <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                      <span class="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                  </span>
              </span>
          </div>
      </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
