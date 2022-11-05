import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        width 연습 화면
      </h1>
      {/* padding 관련 docs url = https://tailwindcss.com/docs/margin */}
      <div className='space-y-4 bg-blue-300 p-2'>
        {/* width 관련 docs url = https://tailwindcss.com/docs/width */}
        <div className='w-96 bg-white shadow rounded hover:w-full '>
          w-96 
        </div>
        <div className='w-52 bg-white shadow rounded'>
          w-52
        </div>
        <div className='w-12 bg-white shadow rounded'>
          w-12
        </div>
        <div className='w-1/2 bg-white shadow rounded'>
          w-1/2
        </div>
      </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
