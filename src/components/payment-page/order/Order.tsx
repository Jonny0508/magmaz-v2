
'use client'

import { useState } from "react"
import styles from "./Order.module.css"


interface Producto {
  id: number
  nombre: string
  precio: number
  cantidad: number
}



export default function Order() {
            // Estado para los productos (ejemplo)
        const [productos, ] = useState<Producto[]>([
            { id: 1, nombre: "Producto 1", precio: 60.0, cantidad: 1 },
            { id: 2, nombre: "Producto 2", precio: 45.0, cantidad: 1 },
            { id: 3, nombre: "Producto 3", precio: 55.0, cantidad: 1 },
        ])

        // Calcular subtotal
        const subtotal = productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0)

        // ID de orden, fecha y hora actuales (para demostración)
        const ordenId = "#34"
        const fecha = new Date()

        // Formatear fecha en español
        const opcionesFecha = {
            year: "numeric" as const,
            month: "long" as const,
            day: "numeric" as const,
        }
        const fechaFormateada = fecha.toLocaleDateString("es-ES", opcionesFecha)

        // Formatear hora
        const opcionesHora = {
            hour: "2-digit" as const,
            minute: "2-digit" as const,
            hour12: true,
        }
        const horaFormateada = fecha.toLocaleTimeString("es-ES", opcionesHora)
    return (
      <div className={styles.container}>
        {/* Encabezado con ID de orden */}
        <div className={styles.header}>
            <h2 className={styles.headerText}>ID de Orden {ordenId}</h2>
        </div>

        {/* Fecha y hora */}
        <div className={styles.row}>
            <p className={styles.label}>Fecha</p>
            <p>{fechaFormateada}</p>
        </div>

        <div className={styles.rowLarge}>
            <p className={styles.label}>Hora</p>
            <p>{horaFormateada}</p>
        </div>

        {/* Sección de productos */}
        <h3 className={styles.sectionTitle}>Producto</h3>

        {/* Lista de productos 
        <div className={styles.productList}>
            {productos.map((producto) => (
            <div key={producto.id} className={styles.row}>
                <p>{producto.nombre}</p>
                <p>${producto.precio.toFixed(2)}</p>
            </div>
            ))}
        </div> */}

        {/* Línea divisoria */}
        <div className={styles.divider}></div>

        {/* Subtotal */}
        <div className={styles.row}>
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
        </div>

        {/* Línea divisoria */}
        <div className={styles.divider}></div>

        {/* Total */}
        <div className={styles.totalRow}>
            <p className={styles.totalText}>Total:</p>
            <p className={styles.totalText}>${subtotal.toFixed(2)}</p>
        </div>

        {/* Espacio flexible para empujar el botón hacia abajo */}
        <div className={styles.spacer}></div>

        
      </div>

            
    )
}