const IMGBB_API_KEY = "7ebd91c6ae4567dc53c46947e8ac1a85"
const ENDPOINT = "https://api.imgbb.com/1/upload"

export const uploadImage = async (file) => {
  // The FormData interface provides a way to construct a set of key/value pairs 
  // representing form fields and their values, 
  // which can be sent using the fetch(), XMLHttpRequest.send() or navigator.sendBeacon() methods. 
  const formData = new FormData()
  formData.append("image", file)

  try {
    const res = await fetch(`${ENDPOINT}?key=${IMGBB_API_KEY}`, {
      method: "POST",
      body: formData
    })
    const data = await res.json()

    if (!data.success) {
      throw new Error("Error al subir la imagen")
    }
    //Retorno de la url de la imagen
    return data.data.url
  } catch (error) {
    console.error("ImgBB error:", error)
    throw error
  }
}