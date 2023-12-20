import React from 'react';
import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header } from './PortfolioPgElements';
import { images } from './data';
import { motion } from 'framer-motion';

const Card = ({ setSelected, content }) => {
  const isImage = content.type === 'image';

  return (
    <div style={{ display: 'inline-block', marginBottom: '20px' }}>
      {isImage ? (
        <motion.img
          src={content.src}
          alt={content.title}
          layoutId={`card-${content.id}`}
          whileHover={{
            scale: 1.025,
            transition: {
              duration: 0.2,
            },
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            setSelected(content);
          }}
          style={{
            width: '100%',
            boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
            cursor: 'pointer',
          }}
        />
      ) : (
        <motion.video
          src={content.src}
          alt={content.title}
          layoutId={`card-${content.id}`}
          controls
          width="100%"
          height="auto"
          whileHover={{
            scale: 1.025,
            transition: {
              duration: 0.2,
            },
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            setSelected(content);
          }}
          style={{
            boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
            cursor: 'pointer',
          }}
        />
      )}

      <TagsWrap>
        {content.tags.map((tag) => (
          <TagsContainer key={tag}>{tag}</TagsContainer>
        ))}
      </TagsWrap>
    </div>
  );
};

const PortfolioPg = ({ setSelected }) => {
  return (
    <>
      <PageContainer>
        <Header>Portfolio</Header>
        <GalleryWrap>
          {images.map((content) => (
            <Card key={content.id} setSelected={setSelected} content={content} />
          ))}
          
        </GalleryWrap>
      </PageContainer>
    </>
  );
};

export default PortfolioPg;


// import React, { useState } from 'react';
// import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header } from './PortfolioPgElements';
// import { images } from './data';
// import { motion } from 'framer-motion';

// const VideoOverlay = ({ onClick }) => (
//   <div
//     style={{
//       position: 'absolute',
//       top: '50%',
//       left: '50%',
//       transform: 'translate(-50%, -50%)',
//       cursor: 'pointer',
//       zIndex: 2,
//     }}
//     onClick={onClick}
//   >
//     {/* You can customize the play button icon here */}
//     <svg width="50" height="50" viewBox="0 0 50 50">
//       <polygon points="0,0 50,25 0,50" fill="#fff" />
//     </svg>
//   </div>
// );

// const Card = ({ setSelected, content }) => {
//   const isImage = content.type === 'image';
//   const [isPlaying, setIsPlaying] = useState(false);

//   const handleVideoClick = () => {
//     setIsPlaying(!isPlaying);
//     setSelected(content);
//   };

//   return (
//     <div style={{ display: 'inline-block', marginBottom: '20px', position: 'relative' }}>
//       {isImage ? (
//         <motion.img
//           src={content.src}
//           alt={content.title}
//           layoutId={`card-${content.id}`}
//           whileHover={{
//             scale: 1.025,
//             transition: {
//               duration: 0.2,
//             },
//           }}
//           whileTap={{
//             scale: 0.95,
//           }}
//           onClick={() => {
//             setSelected(content);
//           }}
//           style={{
//             width: '100%',
//             boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//             cursor: 'pointer',
//           }}
//         />
//       ) : (
//         <>
//           <motion.video
//             src={content.src}
//             alt={content.title}
//             layoutId={`card-${content.id}`}
//             autoPlay={isPlaying}
//             loop
//             muted
//             whileHover={{
//               scale: 1.025,
//               transition: {
//                 duration: 0.2,
//               },
//             }}
//             onClick={handleVideoClick}
//             style={{
//               width: '100%',
//               boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//               cursor: 'pointer',
//             }}
//           />

//           {/* {!isPlaying && <VideoOverlay onClick={handleVideoClick} />} */}
//           {<VideoOverlay onClick={handleVideoClick} />}
//         </>
//       )}

//       <TagsWrap>
//         {content.tags.map((tag) => (
//           <TagsContainer key={tag}>{tag}</TagsContainer>
//         ))}
//       </TagsWrap>
//     </div>
//   );
// };

// const PortfolioPg = ({ setSelected }) => {
//   return (
//     <>
//       <PageContainer>
//         <Header>Portfolio</Header>
//         <GalleryWrap>
//           {images.map((content) => (
//             <Card key={content.id} setSelected={setSelected} content={content} />
//           ))}
//         </GalleryWrap>
//       </PageContainer>
//     </>
//   );
// };

// export default PortfolioPg;





