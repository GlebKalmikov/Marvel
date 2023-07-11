import { ImageList, ImageListItem } from '@mui/material';

import Card from '../Card/Card';

const List = ({ data }) => {
  return (
    <ImageList variant="masonry" cols={4} gap={16}>
      {data.results.map(item =>
        <ImageListItem key={item.id}>
          <Card
            title={item.photographer}
            src={item.src.large}
            alt={item.alt}
            id={item.id}
          />
        </ImageListItem>
      )}
    </ImageList>
  )
}

export default List;