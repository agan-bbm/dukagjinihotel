import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { useState } from "react";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function QuiltedImageList({ posts }) {
  const [popup, setPopup] = useState({
    isOpen: false,
    photoIndex: 0,
  });
  // console.log(posts);
  const itemData = [
    {
      img: posts.acf.aboutgallery[4].galleryimg,
      rows: 2,
      cols: 4,
    },
    {
      img: posts.acf.aboutgallery[0].galleryimg,
      rows: 2,
      cols: 2,
    },
    {
      img: posts.acf.aboutgallery[2].galleryimg,
      rows: 2,
      cols: 2,
    },
    {
      img: posts.acf.aboutgallery[3].galleryimg,
      cols: 3,
      rows: 2,
    },
    {
      img: posts.acf.aboutgallery[1].galleryimg,
      cols: 1,
      rows: 2,
    },
    {
      img: posts.acf.aboutgallery[5].galleryimg,

      cols: 1,
      rows: 2,
    },
    {
      img: posts.acf.aboutgallery[6].galleryimg,
      cols: 3,
      rows: 1,
    },
    {
      img: posts.acf.aboutgallery[7].galleryimg,
      cols: 3,
      rows: 1,
    },
    {
      img: posts.acf.aboutgallery[8].galleryimg,
      rows: 2,
      cols: 2,
    },
    {
      img: posts.acf.aboutgallery[9].galleryimg,
    },
    {
      img: posts.acf.aboutgallery[10].galleryimg,
    },
    {
      img: posts.acf.aboutgallery[11].galleryimg,
      cols: 2,
    },
  ];
  const images = [
    posts.acf.aboutgallery[0].galleryimg,
    posts.acf.aboutgallery[1].galleryimg,
    posts.acf.aboutgallery[2].galleryimg,
    posts.acf.aboutgallery[3].galleryimg,
    posts.acf.aboutgallery[4].galleryimg,
    posts.acf.aboutgallery[5].galleryimg,
    posts.acf.aboutgallery[6].galleryimg,
    posts.acf.aboutgallery[7].galleryimg,
    posts.acf.aboutgallery[8].galleryimg,
    posts.acf.aboutgallery[9].galleryimg,
    posts.acf.aboutgallery[10].galleryimg,
    posts.acf.aboutgallery[11].galleryimg,
  ];

  return (
    <>
      {popup.isOpen && (
        <Lightbox
          mainSrc={images[popup.photoIndex]}
          nextSrc={images[(popup.photoIndex + 1) % images.length]}
          prevSrc={
            images[(popup.photoIndex + images.length - 1) % images.length]
          }
          onCloseRequest={() => setPopup({ ...popup, isOpen: false })}
          onMovePrevRequest={() =>
            setPopup({
              ...popup,
              photoIndex:
                (popup.photoIndex + images.length - 1) % images.length,
            })
          }
          enableZoom={false}
          onMoveNextRequest={() =>
            setPopup({
              ...popup,
              photoIndex: (popup.photoIndex + 1) % images.length,
            })
          }
        />
      )}
      <ImageList
        sx={{ width: "100%" }}
        width="100%"
        variant="quilted"
        cols={4}
        onClick={() => {
          setPopup({ ...popup, isOpen: true });
        }}
        //rowHeight={300}
      >
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  );
}
export default QuiltedImageList;
