import React, { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import List from '../components/List/List';
import Container from '../components/Container/Container';
import charactersService from '../service/characters';

const Characters = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const getCharacters = async () => {
      const data = await charactersService.getAll()
      setData(data.data.results)

      console.log('data?.data.results', data.data.results)
    }

    getCharacters()
  }, [])

  return (
    <Layout>
      <h1 className='title'>Characters</h1>

      <Container>
        {data && <List data={data} type={'characters'} />}
      </Container>
    </Layout>
  )
}

export default Characters;