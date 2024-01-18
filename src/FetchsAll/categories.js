export const categories = (callBack) => {
    fetch('https://dummyjson.com/products/categories')
        .then(res => res.json())
        .then(data => callBack(data));


}