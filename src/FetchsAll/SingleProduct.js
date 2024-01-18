export const singleProduct = (callBack, id) => {
    fetch(`https://dummyjson.com/products/${id}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.statusText}`);
            }
            return res.json();
        })
        .then(data => callBack(data))
        .catch(error => console.error('Error fetching product:', error));
};