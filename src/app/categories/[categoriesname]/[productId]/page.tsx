import React from "react";
export default async function categoryProdcts(props:any) {
    console.log("Search params:",props)
    const { categoriesname, productId } =  await props.params;
    console.log("categoriesname:", categoriesname)
    console.log("productName:", productId);
    const searchParams =await props.searchParams;
    console.log("searchParams:",searchParams);
    const color=searchParams.color;
    const size=searchParams.size;
    return(
        <div>
            <h2>Category Product Page</h2>
            <p>Category:{categoriesname}</p>
            <p>Product ID:{productId}</p>
            <p>color: {color}</p>
            <p>Size:{size}</p>
        </div>
    );
}