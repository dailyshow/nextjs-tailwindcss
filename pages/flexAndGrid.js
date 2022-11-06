import Link from "next/link"
import Layout from "../component/layout"

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold">
        flex, grid 연습 화면
      </h1>
      <h1 className="text-3xl"> flex </h1>
      {/* https://tailwindcss.com/docs/flex */}
      {/* https://tailwindcss.com/docs/width */}
      {/* https://tailwindcss.com/docs/gap */}
      <div class="flex border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">1 hello</div>
          <div class="p-2 border-4 border-blue-500">1 hello</div>
          <div class="p-2 border-4 border-blue-500">1 hello</div>
          <div class="p-2 border-4 border-blue-500">1 hello</div>
      </div>

      <div class="flex border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab tenetur eius odio neque possimus? Voluptatibus id sed a quo ipsam harum earum tempora impedit consectetur, numquam maxime corporis odio?</div>
          <div class="p-2 border-4 border-blue-500">2 hello</div>
          <div class="p-2 border-4 border-blue-500">2 hello</div>
          <div class="p-2 border-4 border-blue-500">2 hello</div>
      </div>

      <div class="flex flex-col border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab tenetur eius odio neque possimus? Voluptatibus id sed a quo ipsam harum earum tempora impedit consectetur, numquam maxime corporis odio?</div>
          <div class="p-2 border-4 border-blue-500">3 hello</div>
          <div class="p-2 border-4 border-blue-500">3 hello</div>
          <div class="p-2 border-4 border-blue-500">3 hello</div>
      </div>

      <div class="flex flex-wrap border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">4 Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam ab tenetur eius odio neque possimus? Voluptatibus id sed a quo ipsam harum earum tempora impedit consectetur, numquam maxime corporis odio?</div>
          <div class="p-2 border-4 border-blue-500">4 hello</div>
          <div class="p-2 border-4 border-blue-500">4 hello</div>
          <div class="p-2 border-4 border-blue-500">4 hello</div>
      </div>

      {/* justify-content: center        - justify-center
          justify-content: space-between - justify-between
          align-items: flex-start        - items-start
          align-items: center            - items-center
          align-self: auto               - self-auto
          align-slef: flex-start         - self-start
          align-slef: flex-end           - self-end
          flex: 1 1 0%                   - flex-1
          flex: 1 1 auto                 - flex-auto
          flex: 0 1 auto                 - flex-initial
          flex: none                     - flex-none */}
      <div class="flex flex-wrap border-4 border-red-300 m-3">
          <div class="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div class="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div class="flex-1 p-2 border-4 border-blue-500">5 hello</div>
          <div class="flex-1 p-2 border-4 border-blue-500">5 hello</div>
      </div>

      {/* space-x-1 > margin-left: 0.25rem; 4px 
        space-y-1 > margin-top: 0.25rem; 4px */}
      <div class="flex space-x-1 flex-wrap border-4 border-red-300 m-3">
          <div class="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">6 hello</div>
      </div>

      {/* gap-px	    gap: 1px;
          gap-x-px	column-gap: 1px;
          gap-1	    gap: 0.25rem;  4px */}
      <div class="flex gap-6 flex-wrap border-4 border-red-300 m-3">
          <div class="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
          <div class="w-16 h-16 p-2 border-4 border-blue-500">7 hello</div>
      </div>

      {/* -m-3 네거티브 마진으로 간격 맞출 수 있음 */}
      <div class="flex flex-wrap border-4 border-red-300 m-3">
          <div class="w-16 h-16 m-3 p-2 border-4 border-blue-500">8 hello</div>
          <div class="w-16 h-16 m-3 p-2 border-4 border-blue-500">8 hello</div>
          <div class="w-16 h-16 m-3 p-2 border-4 border-blue-500">8 hello</div>
          <div class="w-16 h-16 m-3 p-2 border-4 border-blue-500">8 hello</div>
      </div>

      <div class="flex border-4 border-red-300 m-3">
          <div class="w-3/4 p-2 border-4 border-blue-500">9 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">9 hello</div>
      </div>

      <div class="flex flex-wrap border-4 border-red-300 m-3">
          <div class="w-3/4 p-2 border-4 border-blue-500">10 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">10 hello</div>
          <div class="w-3/4 p-2 border-4 border-blue-500">10 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">10 hello</div>
      </div>

      <div class="flex flex-wrap border-4 border-red-300 m-3">
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
          <div class="w-1/4 p-2 border-4 border-blue-500">11 hello</div>
      </div>
      
      <div class="border-4 border-red-300 m-3">
          <div class="inline-block p-2 border-4 border-blue-500">12 hello</div>
          <div class="inline-block p-2 border-4 border-blue-500">12 hello</div>
          <div class="inline-block p-2 border-4 border-blue-500">12 hello</div>
          <div class="inline-block p-2 border-4 border-blue-500">12 hello</div>
      </div>

      {/* justify-content: space-between */}
      <div class="flex justify-between border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">13 hello</div>
          <div class="p-2 border-4 border-blue-500">13 hello</div>
          <div class="p-2 border-4 border-blue-500">13 hello</div>
          <div class="p-2 border-4 border-blue-500">13 hello</div>
      </div>

      {/* justify-content: center */}
      <div class="flex justify-center border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">14 hello</div>
          <div class="p-2 border-4 border-blue-500">14 hello</div>
          <div class="p-2 border-4 border-blue-500">14 hello</div>
          <div class="p-2 border-4 border-blue-500">14 hello</div>
      </div>

      <div class="flex justify-center items-center w-80 h-80 border-4 border-red-300 m-3">
          <div class="text-center leading-9 w-32 h-16 p-2 border-4 border-blue-500">15 hello</div>
      </div>

      {/* 접근성과 모바일 고려 */}
      {/* md : media queries */}
      <div class="flex md:flex-row flex-col border-4 border-red-300 m-3">
          <div class="p-2 flex-1 border-4 border-blue-500 order-1">1 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500 order-0">2 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500 order-2">3 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500 order-3">4 hello</div>
      </div>

      <div class="flex md:flex-row flex-col border-4 border-red-300 m-3">
          <div class="p-2 flex-1 border-4 border-blue-500">1 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500 order-first md:order-none">2 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500">3 hello</div>
          <div class="p-2 flex-1 border-4 border-blue-500">4 hello</div>
      </div>
      
      <div class="flex border-4 border-red-300 m-3">
          <div class="p-2 border-4 border-blue-500">
              <div class="w-32 h-32 bg-blue-400 rounded-full"></div>
          </div>
          <div class="p-2 border-4 border-blue-500">18 hello</div>
          <div class="p-2 border-4 border-blue-500">18 hello</div>
          <div class="p-2 border-4 border-blue-500">18 hello</div>
      </div>

      <div class="flex border-4 border-red-300 m-3">
          <div class="w-32 h-32 bg-blue-400 rounded-full"></div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
      </div>

      <div class="flex border-4 border-red-300 m-3">
          <div class="w-32 h-32 bg-blue-400 rounded-full flex-shrink-0"></div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
          <div class="p-2 border-4 border-blue-500">19 hello</div>
      </div>
      <br/>
      <h1 className="text-3xl"> grid </h1>
      {/* https://tailwindcss.com/docs/grid-template-columns */}
      {/* https://tailwindcss.com/docs/grid-column */}
      {/* https://tailwindcss.com/docs/grid-template-rows */}
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
      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
      </div>

      <h2>3</h2>
      <div class="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
          <div class="border-4 border-blue-500">hello</div>
      </div>

      <h2>4</h2>
      <div class="grid grid-cols-3 grid-rows-3 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
          <div class="border-4 border-blue-500">hello 7</div>
      </div>

      <h2>5</h2>
      <div class="grid grid-cols-4 grid-rows-3 grid-flow-col gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
          <div class="border-4 border-blue-500">hello 7</div>
      </div>

      <h2>6</h2>
      <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
          <div class="col-span-2 row-span-2 border-4 border-blue-500">hello 1</div>
          <div class="col-span-2 border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>7</h2>
      <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
          <div class="col-start-1 col-end-3 row-start-1 row-end-3 border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>8</h2>
      <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="col-start-1 row-start-2 border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>9</h2>
      <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
          <div class="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>10</h2>
      <div class="grid grid-cols-4 grid-rows-4 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      {/* items-center, items-start, items-end, items-stretch... */}
      <h2>11</h2>
      <div class="grid grid-cols-4 grid-rows-4 items-center gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-3 border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>

      <h2>12</h2>
      <div class="grid grid-cols-4 grid-rows-4 items-stretch gap-2 border-4 border-red-400">
          <div class="h-20 border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="h-20 border-4 border-blue-500">hello 3</div>
          <div class="h-20 border-4 border-blue-500">hello 4</div>
          <div class="h-20 border-4 border-blue-500">hello 5</div>
          <div class="h-20 border-4 border-blue-500">hello 6</div>
      </div>

      {/* justify-items-start, justify-items-end, justify-items-center */}
      <h2>13</h2>
      <div class="grid grid-cols-4 grid-rows-4 justify-items-stretch gap-2 border-4 border-red-400">
          <div class="h-20 border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="h-20 border-4 border-blue-500">hello 3</div>
          <div class="h-20 border-4 border-blue-500">hello 4</div>
          <div class="h-20 border-4 border-blue-500">hello 5</div>
          <div class="h-20 border-4 border-blue-500">hello 6</div>
      </div>

      {/* content-start, content-end, content-center, content-between, content-around */}
      <h2>14</h2>
      <div class="h-80 grid grid-cols-4 content-around gap-2 border-4 border-red-400">
          <div class="h-20 border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500">hello 2</div>
          <div class="h-20 border-4 border-blue-500">hello 3</div>
          <div class="h-20 border-4 border-blue-500">hello 4</div>
          <div class="h-20 border-4 border-blue-500">hello 5</div>
          <div class="h-20 border-4 border-blue-500">hello 6</div>
      </div>

      <h2>15</h2>
      <div class="grid grid-cols-4 gap-2 border-4 border-red-400">
          <div class="border-4 border-blue-500">hello 1</div>
          <div class="border-4 border-blue-500 order-first">hello 2</div>
          <div class="border-4 border-blue-500">hello 3</div>
          <div class="border-4 border-blue-500">hello 4</div>
          <div class="border-4 border-blue-500">hello 5</div>
          <div class="border-4 border-blue-500">hello 6</div>
      </div>
      <Link className="bg-red-200 shadow-lg rounded" href={"/"}>
          <button>이전 화면으로</button>
      </Link>
    </Layout>
  )
}
