"use client"

import { useState } from "react"
import Image from "next/image"
import { Minus, Plus, Trash2 } from "lucide-react"
import styles from "./ShoppingCart.module.css"

// Definir el tipo para los productos
type Product = {
  id: string
  name: string
  price: number
  quantity: number
  image: string
}

export default function ShoppingCart() {
  // Estado inicial con productos de Minecraft
  const [products, setProducts] = useState<Product[]>([
    {
      id: "1",
      name: "Minecraft",
      price: 65.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "2",
      name: "Minecraft",
      price: 65.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
    {
      id: "3",
      name: "Minecraft",
      price: 65.0,
      quantity: 1,
      image: "/placeholder.svg?height=80&width=80",
    },
  ])

  // Función para incrementar la cantidad
  const incrementQuantity = (id: string) => {
    setProducts(
      products.map((product) => (product.id === id ? { ...product, quantity: product.quantity + 1 } : product)),
    )
  }

  // Función para decrementar la cantidad
  const decrementQuantity = (id: string) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.quantity > 1 ? { ...product, quantity: product.quantity - 1 } : product,
      ),
    )
  }

  // Función para eliminar un producto
  const removeProduct = (id: string) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  // Calcular el total
  //const total = products.reduce((sum, product) => sum + product.price * product.quantity, 0)

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Resumen de Orden</h1>

      <div className={styles.productList}>
        {products.map((product) => (
          <div key={product.id} className={styles.productItem}>
            <div className={styles.productInfo}>
              <Image
                src="/semi-icons/maicra.jpg"
                alt={product.name}
                width={80}
                height={80}
                className={styles.productImage}
              />

              <div className={styles.productDetails}>
                <h3 className={styles.productName}>{product.name}</h3>
                <p className={styles.quantityLabel}>Cantidad</p>
                <div className={styles.quantityControls}>
                  <button onClick={() => decrementQuantity(product.id)} className={styles.quantityButton}>
                    <Minus size={16} />
                  </button>
                  <span className={styles.quantityValue}>{product.quantity}</span>
                  <button onClick={() => incrementQuantity(product.id)} className={styles.quantityButton}>
                    <Plus size={16} />
                  </button>
                </div>
              </div>
            </div>

            <div className={styles.productActions}>
              <span className={styles.productPrice}>${product.price.toFixed(2)}</span>
              <button onClick={() => removeProduct(product.id)} className={styles.deleteButton}>
                <Trash2 size={20} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className={styles.emptyCart}>
          <p>No hay productos en el carrito</p>
        </div>
      )}


   {/*la logica para sacar el total de las sumas */}
   {/*
      {products.length > 0 && (
        <div className={styles.cartFooter}>
          <div className={styles.totalRow}>
            <span className={styles.totalLabel}>Total</span>
            <span className={styles.totalAmount}>${total.toFixed(2)}</span>
          </div>
        </div>
      )}
      */}
    </div>
  )
}