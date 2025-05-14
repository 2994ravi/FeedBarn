export const baseURL="http://localhost:8080"
const SummaryApi={
    register:{
        url:"/api/customer/register",
        method:"post"
    },
    login:{
        url:"/api/customer/login",
        method:"post"
    },
    userDetails:{
        url:"/api/customer/user-details",
        method:"get"
    }



}
export default SummaryApi