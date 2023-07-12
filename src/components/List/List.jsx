import { ImageList, ImageListItem } from '@mui/material';

import Card from '../Card/Card';

const List = ({ data, type }) => {
  return (
    <ImageList variant="masonry" cols={4} gap={16}>
      {data.map(item =>
        <ImageListItem key={item.id}>
          <Card
            type={type}
            title={item.name}
            src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
            alt={item.name}
            id={item.id}
          />
        </ImageListItem>
      )}
    </ImageList>
  )
}

export default List;