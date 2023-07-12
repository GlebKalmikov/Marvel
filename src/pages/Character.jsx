import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import Container from '../components/Container/Container';
import { Grid, Card, CardMedia, Box, CircularProgress, Breadcrumbs } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

import charactersService from '../service/characters';

const Character = () => {
  const { characterId } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getComic = async (characterId) => {
      const data = await charactersService.getCharacter(characterId);

      console.log('data character => ', data.data.results[0])
      setData(data.data.results[0]);

      setLoading(false);
    };

    try {
      getComic(characterId);

    } catch (error) {
      console.log('error :>> ', error);
    }
  }, [characterId]);

  return (
    <Layout>
      <Container>
        {!loading && data ? (
          <Box sx={{ marginTop: '16px' }}>
            <Box sx={{marginBottom: '24px'}}>
              <Breadcrumbs aria-label="breadcrumb">
                <Link to="/">
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <HomeIcon sx={{ mr: 0.5, fontSize: '24px' }} fontSize="inherit" />
                    Home
                  </Box>
                </Link>
                <Link>
                  {data.name || data.id}
                </Link>
              </Breadcrumbs>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={data.name}
                    height="800"
                    image={`${data.thumbnail.path}.${data.thumbnail.extension}`}
                  />
                </Card>
              </Grid>
              <Grid item xs={6}>
                <h1>{data.name}</h1>
                <p>
                  {data.description}
                </p>
                <a href={data.urls[2].url} target='_blank' rel="noreferrer">Go to Marvel article</a>
              </Grid>
            </Grid>
          </Box>
        ) : (
          <Box
            sx={{
              display: 'flex',
              minHeight: '500px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CircularProgress size={80} />
          </Box>
        )}
      </Container>
    </Layout>
  );
};

export default Character;
