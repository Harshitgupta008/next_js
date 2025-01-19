"use client";
import { removeAllItem, removeItem } from "@/Redux/feature/CartSlice";
import { useSelector, useDispatch } from "react-redux";

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
    discount: number;
    cartItemQuantity: number;
}


const Cart = () => {
    const dispatch = useDispatch();
    const cartItem = useSelector((state: any) => state.cart.cartItem);
    const totalPrice = useSelector((state: any) => state.cart.totalPrice);
    const totalItem = useSelector((state: any) => state.cart.totalItem);

    return (
        <div className="flex flex-wrap justify-center gap-3">
            {cartItem.length === 0 ? (
                <h1 className="w-full text-center font-bold text-2xl text-gray-500 pt-20">
                    Cart is Empty
                </h1>
            ) : (
                <>
                    <div className="flex flex-col pt-5 items-center">
                        {cartItem.map((item: ProductsType) => (
                            <div key={item.id} className="flex flex-wrap gap-10 items-center justify-center rounded-lg shadow-lg w-fit py-6 p-2">
                                <div className="h-56 w-full flex justify-center items-center sm:w-56">
                                    <img src={item.image} alt="productImage" className="h-56 object-contain w-56" />
                                </div>
                                <div className="flex flex-col justify-center w-full sm:w-[500px]">
                                    <h1 className="text-black font-medium">{item.title}</h1>
                                    <h3 className="text-black">
                                        Color: <span className="text-gray-500">{item.color}</span>
                                    </h3>
                                    {item.discount ? (
                                        <h3 className="text-gray-500">
                                            Price:{" "}
                                            <span className="text-green-600 font-bold">$</span>{" "}
                                            <span className="line-through text-lg"> ${item.price} </span>
                                        </h3>
                                    ) : (
                                        <h3 className="text-black">
                                            Price:
                                            <span className="text-green-600 font-bold">$</span>
                                            <span className="text-lg">{item.price}</span>
                                        </h3>
                                    )}
                                    <div className="flex mt-4">
                                        <button onClick={() => dispatch(removeItem(item))} className="bg-violet-700 text-white px-3 py-1 rounded-lg">RemoveItem</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="h-fit w-full sm:w-[400px] my-20 flex flex-col rounded-xl shadow-lg py-3 gap-2 px-5">
                        <h1 className="font-bold text-2xl text-center">Order Summary</h1>
                        <hr className="border-1 border-gray-300" />
                        <div className="flex flex-col">
                            <div className="flex gap-2 mb-3 flex-col">
                                <strong>Total Items: {totalItem}</strong>
                                <strong>Total Price: ${totalPrice}</strong>

                            </div>
                            <div className="flex gap-5">
                                <strong>Delivery:</strong>
                                <h1 className="text-green-500 font-semibold">Free</h1>
                            </div>
                        </div>
                        <hr className="border-1 border-gray-300" />
                        <div className="flex gap-5">
                            <strong>Subtotal:</strong>
                            <strong className="text-gray-500">
                                ${totalPrice}
                            </strong>
                        </div>
                        <div className="mt-5 flex gap-3 mb-2">
                            <button className="bg-gray-500 text-white px-6 py-2 rounded-xl">
                                Proceed to Pay
                            </button>
                            <button onClick={() => dispatch(removeAllItem())} className="bg-gray-500 text-white px-6 py-2 rounded-xl">
                                Remove All Item
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
