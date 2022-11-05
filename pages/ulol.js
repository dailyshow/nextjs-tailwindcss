import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        ulol 연습 화면
      </h1>
      <div className="p-5">
        <ul className="list-disc">
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ul>
      </div>

      <div className="p-5">
        <ul className="list-decimal">
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
          <li>hello world</li>
        </ul>
      </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
