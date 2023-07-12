import React, { useEffect, useState, useContext } from 'react';
import Layout from '../layout/MainLayout';
import Hero from '../components/Hero/Hero';
import Form from '../components/SearchForm/SearchForm';
import List from '../components/List/List';
import comicsService from '../service/comics';
import Container from '../components/Container/Container';
import { ThemeContext } from '../App';

const Comics = () => {
  const [data, setData] = useState()


  useEffect(() => {
    const getComics = async () => {
      const data = await comicsService.getAll()
      setData(data.data.results)
    }

    getComics()
  }, [])


  const makeSearch = async (query) => {
    try {
      const data = await comicsService.searchComics(query)

      setData(data.data.results)
    } catch (error) {
      alert(error);
    }
  }

  return (
    <Layout>
        <h1 className='title'>I can do this all day</h1>

      <Container>
        {data && <List data={data} type={'comics'}/>}
      </Container>
    </Layout>
  )
}

export default Comics;