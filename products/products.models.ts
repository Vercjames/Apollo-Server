export interface IReviews {
  rating: number,
  comment: string
}

export interface IProducts {
  id: number,
  description: string,
  price: number
  reviews?: Array<IReviews>
}

const products: Array<IProducts> = [
  {
    id: 100001,
    description: "A Red Shoe",
    price: 42.12,
  },
  {
    id: 100002,
    description: "A Blue Shoe",
    price: 42.12,
  },
]

export const getAllProducts = () => {
  return products
}

export const getProductsByPrice = (min: number, max: number) => {
  return products.filter((product) => {
    return product.price >= min && product.price <= max
  })
}

export const getProductById = (id: number) => {
  return products.find((product) => {
    return product.id === id
  })
}

export const addNewProduct = (id: number, description: string, price: number) => {
  const newProduct: IProducts = {
    id,
    price,
    description,
    reviews: [],
  }
  products.push(newProduct)
  return newProduct
}

export const addNewProductReview = (id: number, rating: string, comment: string) => {
  const matchedProduct: any = getProductById(id)
  if (matchedProduct) {
    const newProductReview = {
      rating,
      comment,
    }

    matchedProduct.reviews.push(newProductReview)
    return newProductReview
  }
  return null
}
