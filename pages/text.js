import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        text 연습 화면
      </h1>
      <div className="text-base text-red-500">hello world~</div>
      <div className="text-lg">hello world~</div>
      <div className="text-2xl">hello world~</div>
      <div className="text-2xl p-3">hello world~ padding 3</div>
      <div className="text-2xl pt-3">hello world~</div>
      <div className="text-2xl m-3">hello world~ margin 3</div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
