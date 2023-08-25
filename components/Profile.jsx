import React from "react";
import PromptsCard from "./PromptsCard";

export default function Profile({
  name,
  Desc,
  data,
  handleEdit,
  handleDelete,
}) {
  return (
    <section className="w-fulll">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} profile</span>
      </h1>
      <p className="desc text-left">{Desc}</p>

      <div className="mt-16 prompt_layout">
        {data.map((posts) => (
          <PromptsCard
            key={posts._id}
            post={posts}
            handleEdit={() =>handleEdit && handleEdit(posts)}
            handleDelete={()=>handleDelete && handleDelete(posts)}
          />
        ))}
      </div>
    </section>
  );
}
