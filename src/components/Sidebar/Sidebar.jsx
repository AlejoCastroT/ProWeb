import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../Styles/Sidebar.css';
import profilePic from '../../assets/imgPareja.jpg';
import Swal from 'sweetalert2';

function Sidebar() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');

  useEffect(() => {
    // Obtén el nombre de usuario desde localStorage al montar el componente
    const storedUsername = localStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);  // Establece el estado con el nombre de usuario guardado
    }
  }, []);  // Este efecto solo se ejecutará una vez cuando el componente se monte

  const handleLogout = () => {
    Swal.fire({
      icon: 'warning',
      title: 'Cerrar sesión',
      text: '¿Estás seguro de que quieres cerrar sesión?',
      showCancelButton: true,
      confirmButtonText: 'Sí, cerrar sesión',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        // Eliminar el token y el nombre de usuario del almacenamiento local
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        
        // Confirmar el cierre de sesión
        Swal.fire({
          icon: 'success',
          title: 'Sesión cerrada',
          text: 'Has cerrado sesión correctamente',
        });

        // Redirigir a /login y reemplazar la entrada actual en el historial
        navigate('/login', { replace: true });
      }
    });
  };
  return (
    <div className="sidebar">
      <div className="sidebar-profile">
      <h3 className="sidebar-profile-pic">{username ? username[0].toUpperCase() : 'Usuario'}</h3>
        <h3>{'!Bienvenid@ ' + username +'!' || 'Usuario'}</h3> 
      </div>

      <nav className="sidebar-nav">
        <ul>
          <li><a href="#logout" onClick={handleLogout}>Cerrar sesión</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
