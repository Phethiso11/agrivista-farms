import React from "react";
import "./FeaturedProducts.css"; // For styling

const FeaturedProducts = () => {
    const products = [
        {
            name: "Rice",
            imageUrl: "https://s3-alpha-sig.figma.com/img/9fdb/c069/0f7319cf18358681e6be1f2da72c5e9f?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YRXoqOFggqjpuefsv7ikUelZ0jtTtrE1CF-ByfNAAQBtXtnTZodiU9GMuZgqIlgsprfVgnwUO~iOWf4yuI64qUFmI4fCzNlcBhqKA3doN7-AjGi3vBZG0cT4v68jiKCcB7l7DNk6L94zFjdsut50PPPYixeYLvs8KLlch69EMOJqIiCQeiNd5ewaNoNIi2T9I4PljeNFQY0FARSy39gznUDgrLGWrxVNU4keO~Vp7Cnwe0b1hgr8MLDHoo-6dYi-4FupdVVXXC6MylmcAw4afpIqZk335fYYoVB08-Aex~TxgNBKl20J46V44~FihDoe-3j~2HVTNgQEY2-6XIIlOg__",
            description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
        },
        {
            name: "Wheat",
            imageUrl: "https://s3-alpha-sig.figma.com/img/efb4/c917/311ba558964e2e9cf719292c492eec3b?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mwrWBmD~NaFowNR8LKw2Nqkml8ZtwZsCnOYcei3d860KmJnSfP5sayhz6vbhN5Uf-qyKgBmyhciw8tFpd4tsXg0g8iX4WwFNw~qJ5ItwxEh~NRejz6N--vHUvbxPA3TtjsuGsiqekPRC1OcdjkuegcwwZUybo74a2bguzQnnG1hyXXfoa~AQ~9xKvIUbp2-XTsXJRZQl4npzbMdO0co5p~aIaeJZ2qwZbPhBRqjXJHMT1OgqRCIUquA25NIHLGC5PJ4zT5HdmWNS-N3OZeDNUTTX-eVLm8ZoNeMfySmEQutDwinvu7p3A4ITV42Yh~PGpDrJ~~lxn59yDoTkrZ8f8w__",
            description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
        },
        {
            name: "Pumpkin",
            imageUrl: "https://s3-alpha-sig.figma.com/img/c1e1/55f5/c90de42ffd322663bfbfdf9b98a982f3?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aeqNXcUHQ3n-EW--KcdcrVrn~qQnksuXSWqH8mggi50HYwap~QI7WXDAJj~uWHlvmFRKMO0RyIM7VNB~z6PXDIYQ-80LkXfqXC-u4OkHo5XRhyeTxjieQNZzPkkfFxNXxX0kJL8JPbxKwTIs5FnD3EPrjzJC5pDVoeEZmM-6QkOaipMKFMr7ibIbBo0pXPzV212C-1AZJGN5DFTFLbYlNc~5~6ZOG3kY7kLmgdn1oR18ptWXyvbmsffaOUmka7uYUUf3Vp30CPZXiJwhlfGgSyZFKZ7Zxd9V6wbW79VJvLsIXFES~53zJx55q2WFpzwB6-ujpWlhcCZo49qQh9ahew__",
            description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
        },
        {
            name: "Cabbage",
            imageUrl: "https://s3-alpha-sig.figma.com/img/343d/35e3/947e9dd5df0fb4dadcc85f423a556b19?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q2ogidCK0dLRLyctSufG~LTrFgDjlnHEOF04RaV6141vUvkRhHOfJURutLJV0aAoPqDABKEj0U0u3j0zqHHtufM~ywfYtfwQO83-4YwDD5AdbwccX-OBa3Txy2GGxKecm0ZPkoJ9zYVef-UsAhn2JlQN6uQub7SzOJ97cnQjiiup0-0CcCxAdJ-mpUzlQ-9eJDLJmziyAtWKSi2yJKqtLz4vCl1S7hiiN1lF-OkTSppOSQrL7YS9PYJmTrloAnHrtuXLedCdYg~VqoKhMJHGxoVUsDMrgNOtWj5eCf-t8AL2aiiBlL01jBAAZhvdv-J8iAKqeFJxV26HmMirXn-1Cw__",
            description: "Li Europan lingues es membres del sam familie. Lor separat existentie es un myth.",
        },
    ];

    return (
        <div className="featured-products">
            <h2>Our Featured Product</h2>
            <p>Li Europan lingues es membres del sam familie. Lor separat existentie es un myth Por scientie, musica.</p>
            <div className="product-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>{product.description}</p>
                    </div>
                ))}
            </div>
            <a href="/" className="see-all-link">See all product</a>
        </div>
    );
};

export default FeaturedProducts;
