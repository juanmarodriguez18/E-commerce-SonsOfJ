import {
  Typography,
  Container,
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
} from '@mui/material';
import { getArticuloManufacturadoById } from '../services/ArticuloManufacturadoService';
import { useEffect, useState } from 'react';
import { ArticuloManufacturado } from '../types/ArticuloManufacturado';
import { useNavigate } from 'react-router-dom';
 // Asegúrate de tener esta función en tu API

const HomePage = () => {
  const navigate = useNavigate();
  const [productos, setProductos] = useState<ArticuloManufacturado[]>([]);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const producto11 = await getArticuloManufacturadoById(13);
        const producto13 = await getArticuloManufacturadoById(14);
        const producto14 = await getArticuloManufacturadoById(15);
        setProductos([producto11, producto13, producto14]);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
        // Manejar el error, por ejemplo, mostrando un mensaje al usuario
      }
    };

    fetchProductos();
  }, []);

  return (
    <>
      {/* Contenido principal */}
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Bienvenidos a El Buen Sabor
        </Typography>
        <Typography variant="body1" paragraph>
          "Descubre nuestros deliciosos productos."
        </Typography>

        {/* Sección de productos */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2 }}>
          Nuestros Productos Destacados:
        </Typography>
        <Grid container spacing={2}>
          {productos.map((producto) => (
            <Grid key={producto.id} item xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  height="240"
                  image={Array.from(producto.imagenesArticulo.values())[0]?.url || 'https://via.placeholder.com/240'}
                  alt={producto.denominacion}
                />
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    {producto.denominacion}
                  </Typography>
                  <Typography variant="body2">
                    {producto.descripcion}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

         {/* Botón de ver más productos */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Button variant="contained" color="primary" onClick={() => navigate("/menu")}>
            Ver más productos
          </Button>
        </Box>
      </Container>

      {/* Footer */}
      <Box
        component="footer"
        sx={{
          mt: 4,
          py: 3,
          bgcolor: 'primary.main',
          color: 'white',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} El Buen Sabor. Todos los derechos reservados.
        </Typography>
      </Box>
    </>
  );
};

export default HomePage;
