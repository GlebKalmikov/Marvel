import React, { useEffect, useState, useContext } from 'react';
import Layout from '../layout/MainLayout';
import Hero from '../components/Hero/Hero';
import Form from '../components/SearchForm/SearchForm';
import List from '../components/List/List';
import comicsService from '../service/comics';
import Container from '../components/Container/Container';
import { ThemeContext } from '../App';

const MOCK_DATA = [
      {
        id:1234,
        name:'Test',
        description:'Test',
        modified: new Date,
        resourceURI:'Test',
        urls: [
          {
            type:'Test',
            url:'Test'
          }
        ],
        thumbnail: {
          path:'https://upload.wikimedia.org/wikipedia/en/3/3c/Chris_Hemsworth_as_Thor',
          extension:'jpg'
        },
        comics: {
          available:1234,
          returned:1234,
          collectionURI:'Test',
          items: [
            {
              resourceURI:'Test',
              name:'Test'
            }
          ]
        },
        stories: {
          available:1234,
          returned:1234,
          collectionURI:'Test',
          items: [
            {
              resourceURI:'Test',
              name:'Test',
              type:'Test'
            }
          ]
        },
        events: {
          available:1234,
          returned:1234,
          collectionURI:'Test',
          items: [
            {
              resourceURI:'Test',
              name:'Test'
            }
          ]
        },
        series: {
          available:1234,
          returned:1234,
          collectionURI:'Test',
          items: [
            {
              resourceURI:'Test',
              name:'Test'
            }
          ]
        }
      }
    ]

const Home = () => {
  const [data, setData] = useState()
  const theme = useContext(ThemeContext);

  // console.log('theme :>> ', theme);

  useEffect(() => {
    const getComics = async () => {
      //Note: uncomment to get real data
      
      const data = await comicsService.getAll()
      setData(data.data.results)

      console.log('data?.data.results', data.data.results)

      // setData(data.data.results)

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
      <Hero>
        <h1 className='title'>I can do this all day</h1>
        <Form onSubmit={makeSearch} />
      </Hero>

      <Container>
        {data && <List data={data} type={'comics'}/>}
      </Container>
    </Layout>
  )
}

export default Home;