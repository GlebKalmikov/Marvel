import { Link } from 'react-router-dom'
import { Typography, Backdrop } from '@mui/material';
import './card.scss';
import { useState, useRef } from 'react';
import { Transition } from 'react-transition-group';

const duration = 500;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered:  { opacity: 1 },
  exiting:  { opacity: 0 },
  exited:  { opacity: 0 },
};

const Card = ({ title, text, alt, src, id }) => {
  const [open, setOpen] = useState(false)
  const nodeRef = useRef(null);

  return (
    <Link
      to={`/photos/${id}/`}
      className="card__link"
      onMouseOver={() => setOpen(true)}
      onMouseOut={() => setOpen(false)}
    >
      <img src={src} alt={alt} loading="lazy" className='card__img' />

      <Transition nodeRef={nodeRef} in={open} timeout={duration}>
        {state => (
          <div ref={nodeRef} style={{
          ...defaultStyle,
          ...transitionStyles[state]
        }}>
          <Backdrop
              ref={nodeRef}
              sx={{ color: '#fff', position: 'absolute', zIndex: (theme) => theme.zIndex.drawer + 1,
              ...defaultStyle,
              ...transitionStyles[state]
              }}
              open={open}
          >
            <Typography variant="h6">Open</Typography>
          </Backdrop>
        </div>
      )}
      </Transition>
    </Link>
  )
}

export default Card;