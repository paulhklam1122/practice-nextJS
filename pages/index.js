import Layout from '../components/layout/layout'

import '../styles/styles.scss'
import fetch from 'isomorphic-unfetch'
import Link from 'next/link'

const Index = ({ datas }) => (
  <Layout>
    <h1>Batman TV Shows</h1>
    <ul>
      {datas.map(data => (
        <li key={data.id}>
          <Link as={`/p/${data.id}`} href={`/post?id=${data.id}`}>
            <a>{data.name}</a>
          </Link>
        </li>
      ))
      }
    </ul>
    <Link href='/about'>
      <a>Go to the About page</a>
    </Link>
  </Layout>
)

Index.getInitialProps = async function () {
  const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
  const datas = await res.json()
  console.log('data', datas)
  return {
    datas: datas.map(entry => entry.show)
  }
}

export default Index
