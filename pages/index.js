import CardList from '@components/Card/list'
import Suggestions from '@components/Suggestions'
import SuggestionsList from '@components/Suggestions/list'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({questions}) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.hero}>
        <h1 className={styles.title}>
          Bienvenido a <a target="_blank" href="https://nextjs.org">Test vocacional</a>
        </h1>

        <p className={styles.description}>
          Ten en cuenta las siguientes recomendaciones{' '}
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        <SuggestionsList/>
        </section>

        <CardList data={questions} className="layout_with_margin" />

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </>
  )
}


export async function getServerSideProps(context) {
  const { params } = context;
  const SERVER_HOST = process.env.NEXT_PUBLIC_API_PORT

  const questions = await fetch(`${SERVER_HOST}/preguntas`)
      .then(res => res.json())

  return {
      props: {
        questions,
      }
  };
}