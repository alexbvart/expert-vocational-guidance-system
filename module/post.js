import axios from 'axios';

const post = async ({src, data}) => {
    const API_URL = process.env.NEXT_PUBLIC_API_AWS
    const response = await axios.post(`${API_URL}/${src}`, data)    
    return response
}
export default post;