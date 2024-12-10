const getProduct = async (url) => {
    const res = await fetch(url);

    const some = await res.json();

    return some;
}

export {getProduct};