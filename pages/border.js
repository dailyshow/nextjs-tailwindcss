import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        border 연습 화면
      </h1>
      <div className="grid grid-cols-7 gap-2">
        {/* <div className="w-32 h-32 bg-red-400"></div> */}
        <div className="aspect-square bg-red-400"></div>
        <div className="aspect-square bg-red-400 rounded"></div>
        <div className="aspect-square bg-red-400 rounded-2xl"></div>
        <div className="aspect-square bg-red-400 rounded-full"></div>
      </div>
      {/* tailwindcss 에서 정해진 방법 외에 custom 적용하는 방법 */}
      <div className="text-[17px]">hello~~</div>
      <div className="mt-[20px]">hello??</div>b2
      <div className="bg-[#4267b2] text-[#fff]">hello!!!</div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
