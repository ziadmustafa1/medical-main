/* eslint-disable jsx-a11y/alt-text */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import av from '../../aswets/554.jpeg'
import top from '../../aswets/555.jpg'

const CardBlog = () => {
  return (
    <Card style={{ width: '100%' }} className='mt-4 mb-4'>
      <Card.Img variant="top" className='img-h' src={top} />
      <Card.Body>
        <Card.Title><Link className='text-decoration-none'><img src={av} className='img-f'/> <h1 className='ht'> John deo </h1></Link> <h1 className='ht'>21 July 2021</h1>   </Card.Title>
        <Card.Text className='tit'>
        Dental Care for Women <br/> is very important
        </Card.Text>
        <Button className='btn-r'>Read More </Button>
      </Card.Body>
    </Card>
  );
}

export default CardBlog