import { addToCart } from "@/Redux/feature/CartSlice";
import { useDispatch, useSelector } from "react-redux";

interface ProductsType {
    id: number;
    title: string;
    image: string;
    price: number;
    description: string;
    brand: string;
    model: string;
    color: string;
    category: string;
    discount: number
}
interface ProductsCard {
    title: string;
    price: number;
    image: string;
    product: ProductsType;
}

const ProductsCard: React.FC<ProductsCard> = ({ title, price, image, product }) => {

    const cartItems = useSelector((state: any) => state.cart.cartItem);
    const isInCart = cartItems.some((item: any) => item.id === product.id);

    const dispatch = useDispatch();


    const AddCart = (product: ProductsType) => {
        if (!isInCart) {
            dispatch(addToCart(product));
            window.alert("Added in cart");
        }
    };
    return <>
        <div className="w-fit cursor-pointer h-fit p-3 bg-white  shadow-lg rounded-lg  flex flex-col gap-4 ">
            <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80">
                <img className=" hover:scale-105 object-contain transition-transform duration-300 ease-in-out delay-0 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80  rounded-lg" src={image} alt="" />
            </div>
            <div className="w-full flex flex-col gap-4 ">
                <h1 className="text-center font-bold text-violet-800">{title.slice(0, 30)}</h1>
                <div className="w-full items-center flex flex-wrap justify-between px-3">
                    <h1 className="text-violet-800 font-semibold">price : <span className="text-gray-500">${price}</span></h1>
                    <button onClick={() => AddCart(product)} className={`px-5 py-1 rounded-md ${isInCart
                        ? "bg-gray-400 cursor-not-allowed"
                        : "bg-violet-600 text-white hover:bg-violet-900"}`} disabled={isInCart}>
                        {isInCart ? "In Cart" : "Add to Cart"}
                    </button>
                </div>
            </div>
        </div>
    </>
}
export default ProductsCard;