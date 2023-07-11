import React, { useEffect, useState, useContext } from 'react';
import Layout from '../layout/MainLayout';
import Hero from '../components/Hero/Hero';
import Form from '../components/SearchForm/SearchForm';
import List from '../components/List/List';
import comicsService from '../service/comics';
import Container from '../components/Container/Container';
import { ThemeContext } from '../App';

const Home = () => {
  const [data, setData] = useState({})
  const theme = useContext(ThemeContext);

  console.log('theme :>> ', theme);

  useEffect(() => {
    const getComics = async () => {
      const data = await comicsService.getAll()

      setData(data)
      console.log('data?.data.results', data.data.results)
    }

    getComics()
  }, [])


  // const makeSearch = async (query) => {
  //   try {
  //     const data = await photoService.searchPhoto(query)

  //     setData(data)
  //   } catch (error) {
  //     alert(error);
  //   }

  //   const cre = await photoService.createFoto()
  // }

  return (
    <Layout>
      <Hero>
        <h1 className='title'>I can do this all day</h1>
        {/* <Form onSubmit={makeSearch} /> */}
      </Hero>

      <Container>
        {/* {data?.data.results && <List data={data} />} */}
      </Container>
    </Layout>
  )
}

export default Home;