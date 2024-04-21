/*
 * @Author: zgl
 * @Description: TODO 初试 Next.js 新建页面功能（无需 React Router）
 */
import Head from "next/head";

export default function About() {
  return (
    <>
      <Head>
        <title>Next.js page</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>About page</h1>
      </main>
    </>
  );
}
