
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./userCard";

const Feed = () => {
    const feed = useSelector((store) => store.feed);
    // console.log(feed);
    const dispatch = useDispatch();

    const getFeed = async () => {
        try {
            const res = await axios.get(BASE_URL + "/feed", {
                withCredentials: true,
            });

            console.log("API response:", res.data);
            dispatch(addFeed(res?.data?.data));
        } catch (err) {
            console.error("Feed API error:", err.response?.data || err.message);
        }
    };

    useEffect(() => {
        if (!feed) {
            getFeed();
        }
    }, []);

    console.log("Redux feed:", feed);

    return feed && (<div className="flex justify-center my-10">
        <UserCard user={feed[1]}/>
    </div>)
};

export default Feed;
