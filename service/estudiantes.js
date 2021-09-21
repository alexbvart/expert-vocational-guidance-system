import post from '@module/post'
export const createStudent = ({data}) =>{
    const res = post({src:"estudiante/create", data:data})
    return res.data
}