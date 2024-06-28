import { AppBar, Avatar, Badge, Box, Button, Toolbar, Typography } from "@mui/material";
import { ShoppingCart as ShoppingCartIcon, Fastfood as FastfoodIcon } from "@mui/icons-material";
import { useCarrito } from "../Carrito/useCarrito";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../ControlAcceso/AuthContext";
import LogoutButton from "./LogoutButton";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";

const Header = () => {
    const { isLoggedIn, cliente } = useAuth();
    const navigate = useNavigate();
    const { cart } = useCarrito();
    const cantidadTotal = cart.reduce((total, item) => total + item.cantidad, 0);

    return(
        <AppBar position="static" color="default">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                    El Buen Sabor
                </Typography>
                <Button
                    disableRipple
                    disableTouchRipple
                    className="btn-list-sidebar"
                    startIcon={<FastfoodIcon />}
                    onClick={() => navigate("/menu")}
                  >
                    Menú
                </Button>
                <Button
                    disableRipple
                    disableTouchRipple
                    className="btn-list-sidebar"
                    startIcon={
                      <Badge badgeContent={cantidadTotal} color="primary">
                        <ShoppingCartIcon sx={{ fontSize: 20 }} />
                      </Badge>
                    }
                    onClick={() => navigate("/carrito")}
                  >
                    Carrito
                </Button>
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                {isLoggedIn ? (
                    <>
                        {cliente && cliente.imagenCliente && (
                            <Avatar alt={`${cliente.nombre} ${cliente.apellido}`} src={cliente.imagenCliente.url} />
                        )}
                        <Typography variant="body1" sx={{ fontWeight: 'bold', mr: 2 }}>
                            Bienvenido {cliente?.nombre}
                        </Typography>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <LoginButton />
                        <RegisterButton />
                    </>
                )}
            </Box>   
            </Toolbar>
        </AppBar>
    );
};

export default Header;