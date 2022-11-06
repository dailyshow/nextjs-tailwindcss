import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        apply 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/functions-and-directives#apply */}
      {/* 아래처럼 사용하기 위해서는
        .grid-i{
            @apply border-4 border-blue-500;
        }
        를 styles.css 또는 globals.css 에 @apply를 통해 적용해야 한다. */}
        <h2>1</h2>
        <div class="grid grid-cols-3 gap-2 border-4 border-red-400">
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
        </div>

        <h2>2</h2>
        <div class="grid-i">
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
            <div class="border-4 border-blue-500">hello</div>
        </div>    
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
