/*
 * @Author: zgl
 * @Description: TODO ① 初试 Next.js 新建页面功能（无需 React Router）
 *                    ② 体验 Static Generation 预渲染方式
 */
import Head from "next/head";

type PropsType = {
  info: string;
};

export default function About(props: PropsType) {
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
        <p>{props.info}</p>
      </main>
    </>
  );
}

/**
 * @description: 此为固定写法，即必须包含 async 和 getStaticProps
 * @return {*} // return 写法也是固定的，返回的静态属性信息需要放到 props 键值中
 */
export async function getStaticProps() {
  console.log("仅在 build 构建时运行此函数，在线上环境时不会运行");
  // async function 中可以通过 await 来异步获取数据
  return {
    props: {
      info: "仅在构建时获取的静态属性信息",
    },
  };
}
