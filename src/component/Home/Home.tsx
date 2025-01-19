import { useQuery } from "@tanstack/react-query";
import ProductsCard from "./ProductsCard"
import { getProducts } from "@/api/api";
import Loader from "../Loader";

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
interface DatastoreType {
    status: string;
    message: string;
    products: ProductsType[];
}

const Home = () => {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["posts"],
        queryFn: getProducts,
    })
    if (isError || error) {
        console.log("error found :: " + error);
        return <Loader />
    }
    if (isLoading) {
        return <Loader />
    }

    return <>
        <div className="mt-10 w-full flex flex-wrap gap-5 justify-center items-center">
            {
                data.length === 0 ? <h1>No Data avliable</h1> :
                    data.products.map((product:ProductsType) => {
                        return <div key={product.id} className="h-fit w-fit">
                            <ProductsCard title={product.title} image={product.image} price={product.price} product={product} />
                        </div>
                    })
            }

        </div>
    </>
}
export default Home;