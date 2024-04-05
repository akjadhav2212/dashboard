import { atom } from "recoil"

export const productData = atom({
    key:'chartData',
    default:{
        productname:'Air Conditoner',
        category:'Electronics',
        reviews:[31,25,43,25,10],
        actualPrice:3000,
        orderSummary:[32,14,23],
        discountedPrice:[1200,1230,1434,1532,1892]
    }
})


