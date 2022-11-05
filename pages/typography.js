import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        width 연습 화면
      </h1>
      {/* https://tailwindcss.com/docs/font-family
            font-sans
            font-serif
            font-mono */}
      {/* https://tailwindcss.com/docs/font-size
        text-xs	    font-size: 0.75rem; /12px 
        line-height: 1rem;  16px 
        text-sm	    font-size: 0.875rem;  14px 
                    line-height: 1.25rem;  20px 
        text-base   font-size: 1rem;  16px 
                    line-height: 1.5rem;  24px 
        text-lg	    font-size: 1.125rem;  18px 
                    line-height: 1.75rem;  28px 
        text-xl	    font-size: 1.25rem;  20px 
                    line-height: 1.75rem;  28px 
        text-2xl	font-size: 1.5rem; 24px 
                    line-height: 2rem;  32px 
        */}
    <div class="space-y-5">
        <div class="p-3 bg-white shadow rounded-lg">
        <h3 class="text-xs border-b">font-sans</h3>
        <p class="font-sans">
            The quick brown fox jumps over the lazy dog.
        </p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
        <h3 class="text-xs border-b">font-serif</h3>
        <p class="font-serif">
            The quick brown fox jumps over the lazy dog.
        </p>
        </div>
        <div class="p-3 bg-white shadow rounded-lg">
        <h3 class="text-xs border-b">font-mono</h3>
        <p class="font-mono">
            The quick brown fox jumps over the lazy dog.
        </p>
        </div>
    </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
