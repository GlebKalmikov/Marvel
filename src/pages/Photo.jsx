import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Layout from '../layout/MainLayout';
import Container from '../components/Container/Container';
import photoService from '../service/photo';
import { Grid, Card, CardMedia, Box, CircularProgress, Breadcrumbs, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Photo = () => {
  const { photoId } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getPhoto = async (id) => {
      const data = await photoService.getPhoto(id);

      setData(data);

      setLoading(false);
    };

    try {
      getPhoto(photoId);

    } catch (error) {
      console.log('error :>> ', error);
    }
  }, [photoId]);

  console.log('loading :>> ', loading);
  return (
    <Layout>
      <Container>
        {!loading ? (
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
                  {data.alt || data.id}
                </Link>
              </Breadcrumbs>
            </Box>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Card>
                  <CardMedia
                    component="img"
                    alt={data.alt}
                    height="800"
                    image={data.src.portrait}
                  />
                </Card>
                {/* <img src={data.src.portrait} alt={data.alt} /> */}
              </Grid>
              <Grid item xs={6}>
                <h1>{data.photographer}</h1>
                <a
                  href={data.photographer_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Photographer profile
                </a>
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

export default Photo;
