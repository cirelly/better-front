import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { addPost, getPosts } from "../services/post";

export const useGetPosts = () => {
    return useQuery(['get-posts'], getPosts);
};

export const useAddPost = () => {
    const navigate = useNavigate();
    return useMutation(['add-post'], addPost, {
        onSuccess: () => navigate('/')
    })
 };

