import { db } from "../firebase/config";
import { addDoc, collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";

// Referencia a la COLECCIÓN products de la base de datos
const productsRef = collection(db, "products")

export const getProducts = async () => {
  try {
    // el retorno que promete getDocs viene como tipo "QuerySnapshot" 
    // y debemos convertirlo a un array de objetos del mismo formato que usemos en los componente
    const snapshot = await getDocs(productsRef)

    const productFormat = snapshot.docs.map((doc) => {
      return {
        id: doc.id,
        ...doc.data()
      }
    })

    return productFormat
  } catch (error) {
    console.error("Error al cargar productos", error)
    throw error
  }
}

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsRef, id)
    const snapshot = await getDoc(productRef)

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() }

      return product
    } else {

      return null
    }
  } catch (error) {
    console.error("Error al traer documento por id", error)
    throw error
  }
}

export const getProductByCategory = async (category) => {
  try {
    let queryRef
    if (category) {
      queryRef = query(productsRef, where("category", "==", category))
    } else {
      queryRef = productsRef
    }
    const snapshot = await getDocs(queryRef)
    const productsFormat = snapshot.docs.map((doc) => {

      return { id: doc.id, ...doc.data() }
    })

    return productsFormat
  } catch (error) {
    console.error("Error al filtrar productos por categoria", error)
    throw error
  }
}

export const createProduct = async (product) => {
  try {
    const docRef = await addDoc(productsRef, product)

    return docRef.id
  } catch (error) {
    console.error("Error crear producto", error)
    throw error
  }
}