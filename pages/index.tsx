import Link from 'next/link'
import Layout from '../components/Layout'
import { Heading } from '@chakra-ui/react'

const IndexPage = () => (
  <Layout title="Home | Mommy sTeps">
    <Heading as={'h1'}>The Mommy sTeps Blog 👋</Heading>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
