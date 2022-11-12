import axiosInstance from "../config/axios"


export const getPosts = async () => {
    try {
        const response = await axiosInstance.get('/get-posts');
        return response.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}

export const addPost = async (articleData) => {
    try {
        const response = await axiosInstance.post('/add-post',articleData);
        return response.data.data;
    } catch (error) {
        console.log(error)
        throw error
    }
}




