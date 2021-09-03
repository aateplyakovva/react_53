export default {
  card: {
    width: '18%',
    borderRadius: '0 0 7px 7px',
    backgroundColor: '#dbd9d0',
    height: '60vh',
    overflow: 'hidden',
    '&:nth-child(1)': {
      borderTop: '4px solid #f5269c',
    },
    '&:nth-child(2)': {
      borderTop: '4px solid #f5b527',
    },
    '&:nth-child(3)': {
      borderTop: '4px solid #6627f5',
    },
    '&:nth-child(4)': {
      borderTop: '4px solid #27f580',
    },
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '10px 0',
    fontWeight: '700',
  },
};
