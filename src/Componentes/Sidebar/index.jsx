import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarIcons } from "./icons";
import './style.css';

const menu = [
  { icon: sidebarIcons.Inicio, label: "Inicio", to: "/" },
  { icon: sidebarIcons.Pacientes, label: "Pacientes", to: "/pacientes" },
  { icon: sidebarIcons.Exámenes, label: "Exámenes", to: "/examenes" },
  { icon: sidebarIcons.Remisiones, label: "Remisiones", to: "/remisiones" },
  { icon: sidebarIcons.Citas, label: "Citas", to: "/citas" },
];


const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <div className="sidebar-avatar">OP</div>
      <div className="sidebar-user-info">
        <span className="sidebar-user-name">Optometrista</span>
        <span className="sidebar-user-email">usuario@optica.com</span>
      </div>
    </div>
    <nav className="sidebar-nav">
      <ul>
        {menu.map((item, idx) => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => isActive ? "active" : ""}>
              <span className="sidebar-icon" aria-hidden="true">{item.icon}</span>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
      <hr className="sidebar-divider" />
      <div className="sidebar-bottom">
        <NavLink to="/ajustes"><span className="sidebar-icon">{sidebarIcons.Ajustes}</span> Ajustes</NavLink>
        <NavLink to="/logout"><span className="sidebar-icon">{sidebarIcons.Salir}</span> Salir</NavLink>
      </div>
    </nav>
  </aside>
);

export default Sidebar;
