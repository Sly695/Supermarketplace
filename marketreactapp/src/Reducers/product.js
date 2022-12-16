export default function (products = "", action) {
    if (action.type == "sendProducts") {
        return action.products;
    } else {
        return products;
    }
}