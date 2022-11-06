import Head from 'next/head'
import Link from 'next/link'
import Layout from "../component/layout"

const PAGES = ({url, content}) => {
  return(
    <Link className="grow w-1/6 bg-red-300 m-2 text-center rounded-md" href={url}>
      <div className='rounded shadow-lg'>{content}</div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="next 연습!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className="text-3xl text-center font-bold bg-red-200 rounded-lg">
        홈 화면임!!
      </h1>
      <div className="flex flex-wrap">
        {/* <Link className='m-2' href={"/width"}>
          <button className='bg-blue-300 rounded shadow-lg'>width 사용 연습</button>
        </Link>
        <Link className='m-2' href={"/color"}>
          <button className='bg-blue-300 rounded shadow-lg'>color 사용 연습</button>
        </Link>
        <Link className='m-2' href={"/typography"}>
          <button className='bg-blue-300 rounded shadow-lg'>typography 사용 연습</button>
        </Link>
        <Link className='m-2' href={"/shadow"}>
          <button className='bg-blue-300 rounded shadow-lg'>shadow 사용 연습</button>
        </Link> */}
        <PAGES url="width" content="width"></PAGES>
        <PAGES url="color" content="color"></PAGES>
        <PAGES url="typography" content="typography"></PAGES>
        <PAGES url="shadow" content="shadow"></PAGES>
        <PAGES url="text" content="text"></PAGES>
        <PAGES url="ulol" content="ulol"></PAGES>
        <PAGES url="border" content="border"></PAGES>
        <PAGES url="flexAndGrid" content="flexAndGrid"></PAGES>
        <PAGES url="transition" content="transition"></PAGES>
        <PAGES url="animation" content="animation"></PAGES>
        <PAGES url="apply" content="apply"></PAGES>
      </div>
    </Layout>
  )
}
