import React from "react";

function IconTab({ posts }) {
  return (
    <>
      <div className="containerWrapper aboutTab">
        <h2>{posts.tabheading}</h2>
        <p>{posts.tabparagraph}</p>
        <div className="servicesgroup">
          {posts.icons.map((e) => (
            <div className="about-icons-services">
              <img src={e.iconimg} />
              <p>{e.icontxt}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default IconTab;
