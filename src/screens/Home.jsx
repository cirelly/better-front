import React from "react";
import { useGetPosts } from "../hooks/usePost";

const Home = () => {
  const { data } = useGetPosts();
  console.log(data);
  return (
    <div className='c-home'>
      <div id='left-section'>
        <img
          src={data && data[0]?.image}
          style={{ height: "370px", width: "580px" }}
        />
        <h4>{data && data[0]?.category}</h4>
        <h1>{data && data[0]?.title}</h1>
        <p>{data && data[0]?.description}</p>
        <span>
          <h5>{data && data[0]?.author}</h5>
          <h5>{data && data[0]?.createdAt}</h5>
        </span>
      </div>
      <div id='first'>
        <div>
          <div>
            <img
              src={data && data[2]?.image}
              style={{ height: "168px", width: "168px" }}
            />
          </div>
          <div>
            <h4>{data && data[2]?.category}</h4>
            <h2>{data && data[2]?.title}</h2>
            <h3>{data && data[2]?.description}</h3>
            <span>
              <h5>{data && data[2]?.author}</h5>
              <h5>{data && data[2]?.createdAt}</h5>
            </span>
          </div>
        </div>
        <hr />
      </div>
      <div id='second'>
        <div>
          <div>
            <img
              src={data && data[2]?.image}
              style={{ height: "168px", width: "168px" }}
            />
          </div>
          <div>
            <h4>{data && data[2]?.category}</h4>
            <h2>{data && data[2]?.title}</h2>
            <h3>{data && data[2]?.description}</h3>
            <span>
              <h5>{data && data[2]?.author}</h5>
              <h5>{data && data[2]?.createdAt}</h5>
            </span>
          </div>
        </div>
        <hr />
      </div>
      <div id='third'>
      <div>
          <div>
            <img
              src={data && data[3]?.image}
              style={{ height: "168px", width: "168px" }}
            />
          </div>
          <div>
            <h4>{data && data[3]?.category}</h4>
            <h2>{data && data[3]?.title}</h2>
            <h3>{data && data[3]?.description}</h3>
            <span>
              <h5>{data && data[3]?.author}</h5>
              <h5>{data && data[3]?.createdAt}</h5>
            </span>
          </div>
        </div>
        </div>
        <hr />
    </div>
  );
};

export default Home;
