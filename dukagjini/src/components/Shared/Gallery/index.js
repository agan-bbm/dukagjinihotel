import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

function QuiltedImageList({ posts }) {
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

  return (
    <ImageList
      sx={{ width: "100%" }}
      width="100%"
      variant="quilted"
      cols={4}
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
  );
}
export default QuiltedImageList;
