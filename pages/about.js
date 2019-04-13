import Layout from '../components/layout/layout'

import Link from 'next/link'

const About = () => (
  <Layout>
    <div>This is the about page!</div>
    <Link href='/'>
      <a>Go back to Index</a>
    </Link>
  </Layout>
)

export default About
