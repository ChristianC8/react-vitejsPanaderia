import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../styles/Categorias.css'

function CategoriasCard({title,imagen}) {
  return (
    <Card style={{ width: '18rem' }}>
{/*       <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <img src={imagen} alt="" className='picture'/>

      </Card.Body>
    </Card>
  );
}

export default CategoriasCard;