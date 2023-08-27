import { useContext } from 'react'
import { StarredCharacterContext} from '../../context'

const CardCharacterDetail = (data) => {
  const context = useContext(StarredCharacterContext)

//   const showProduct = (productDetail) => {
//     context.openProductDetail()
//     context.setProductToShow(productDetail)
//   }

//   const addProductsToCart = (event, productData) => {
//     event.stopPropagation()
//     context.setCount(context.count + 1)
//     context.setCartProducts([...context.cartProducts, productData])
//     context.openCheckoutSideMenu()
//     context.closeProductDetail()
//   }

//   const renderIcon = (id) => {
//     const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

//     if (isInCart) {
//       return (
//         <div
//           className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
//           <CheckIcon className='h-6 w-6 text-white'></CheckIcon>
//         </div>
//       )
//     } else {
//       return (
//         <div
//           className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
//           onClick={(event) => addProductsToCart(event, data.data)}>
//           <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
//         </div>
//       )
//     }
//   }

  return (
<>
<div className="flex items-center">
        <div className="relative">
          <div className="flex items-center justify-center w-20 h-20 mr-2 overflow-hidden rounded-full">
            <img
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
              src={data.data.character.image}
              alt={data.data.character.name}
            />
          </div>
          <p className="text-slate-900/[.80] text-xl font-bold py-3">
            {data.data.character.name}
          </p>
        </div>
      </div>

      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Specie</strong>
        <span className="text-slate-400 text-sm">{data.data.character.species}</span>
      </div>

      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Status</strong>
        <span className="text-slate-400 text-sm">{data.data.character.status}</span>
      </div>
      <div className="flex flex-col py-4 border-b border-slate-200">
        <strong className="text-slate-900 text-sm font-medium">Gender</strong>
        <span className="text-slate-400 text-sm">{data.data.character.gender}</span>
      </div>
      </>
  )
}

export default CardCharacterDetail