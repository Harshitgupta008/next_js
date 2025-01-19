const getProducts = async () => {
    try {
        const response = await fetch("https://fakestoreapi.in/api/products");
        return response.json();
    } catch (error) {
        console.log("error in api :: " + error);
    }
}

export { getProducts };