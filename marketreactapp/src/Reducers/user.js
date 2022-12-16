export default function (user = "", action) {
    if (action.type == "sendUser") {
        return action.user;
    } else {
        return user;
    }
}