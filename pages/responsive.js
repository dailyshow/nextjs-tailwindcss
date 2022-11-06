import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        responsive 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/hover-focus-and-other-states#media-queries */}
      <div class="w-16 h-16 bg-red-300 sm:w-20 sm:h-20 sm:bg-blue-300 md:w-32 md:h-32 md:bg-green-300 lg:w-48 lg:h-48 lg:bg-gray-300 2xl:w-64 2xl:h-64 2xl:bg-cyan-300">
          hello world
      </div>
      <div class="landscape:hidden"> {/* 화면이 가로 비율일 때 숨겨줌 */}
          <p>
          가로 비율이면 숨겨지고 세로 비율이면 나타남
          </p>
      </div>
      <div class="portrait:hidden"> {/* 화면이 세로 비율일 때 숨겨줌 */}
          <p>
            가로 비율이면 나타나고 세로 비율이면 숨겨짐
          </p>
      </div>
      <div class="dark"> {/* dark mode */}
          <div class="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
              <div>
              <span class="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                  <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                  </svg>
              </span>
              </div>
              <h3 class="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
              <p class="text-slate-500 dark:text-slate-400 mt-2 text-sm">
              The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
              </p>
          </div>
      </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
