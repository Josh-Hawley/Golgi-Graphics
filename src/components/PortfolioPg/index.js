import React, { useState } from 'react';
import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header, PlayButtonContainer} from './PortfolioPgElements';
import { images } from './data';
import { motion } from 'framer-motion';
import { ReactComponent as PlayButton } from '../../images/playButton.svg';

const MAX_ID_VALUE = 100; // Any IDs above 100 won't be included

const Card = ({ setSelected, content }) => {
  const isImage = content.type === 'image';

  return (
    <div style={{ display: 'inline-block', marginBottom: '20px' }}>
      {isImage ? (
        <motion.img
          src={content.src}
          alt={content.title}
          layoutId={`card-${content.id}`}
          loading="eager"
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
        <motion.div
          style={{ position: 'relative' }}
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
        >
          <motion.video
            src={`${content.src}#t=15`}
            alt={content.title}
            layoutId={`card-${content.id}`}
            preload="metadata"
            width="100%"
            height="auto"
            loading="eager"
            loop
            style={{
              boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
              cursor: 'pointer',
            }}
          />
          <PlayButtonContainer isSelected={setSelected}>
            <PlayButton />
          </PlayButtonContainer>
        </motion.div>
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
  const [selectedTag, setSelectedTag] = useState('All');

  const uniqueTags = ['All', ...new Set(images.flatMap((image) => image.tags))];

  const filteredImages = selectedTag === 'All' ? images : images.filter((image) => image.tags.includes(selectedTag));

  // Filter out images with ID above MAX_ID_VALUE
  const filteredImagesById = filteredImages.filter((image) => image.id <= MAX_ID_VALUE);

  return (
    <>
      <PageContainer>
        <Header>Portfolio</Header>
        <div style={{ marginBottom: '20px' }}>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              style={{
                margin: '0 10px 10px 0',
                padding: '10px 20px',
                cursor: 'pointer',
                backgroundColor: selectedTag === tag ? '#333' : '#eee',
                color: selectedTag === tag ? '#fff' : '#000',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              {tag}
            </button>
          ))}
        </div>
        <GalleryWrap>
          {filteredImagesById.map((content) => (
            <Card key={content.id} setSelected={setSelected} content={content} />
          ))}
        </GalleryWrap>
      </PageContainer>
    </>
  );
};

export default PortfolioPg;

// import React, { useState } from 'react';
// import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header, PlayButtonContainer} from './PortfolioPgElements';
// import { images } from './data';
// import { motion } from 'framer-motion';
// import { ReactComponent as PlayButton } from '../../images/playButton.svg';

// const Card = ({ setSelected, content }) => {
//   const isImage = content.type === 'image';

//   return (
//     <div style={{ display: 'inline-block', marginBottom: '20px' }}>
//       {isImage ? (
//         <motion.img
//           src={content.src}
//           alt={content.title}
//           layoutId={`card-${content.id}`}
//           loading="eager"
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
//         <motion.div
//           style={{ position: 'relative' }}
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
//         >
//           <motion.video
//             src={`${content.src}#t=15`}
//             alt={content.title}
//             layoutId={`card-${content.id}`}
//             preload="metadata"
//             width="100%"
//             height="auto"
//             loading="eager"
//             loop
//             style={{
//               boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//               cursor: 'pointer',
//             }}
//           />
//           <PlayButtonContainer isSelected={setSelected}>
//             <PlayButton />
//           </PlayButtonContainer>
//         </motion.div>
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
//   const [selectedTag, setSelectedTag] = useState('All');

//   const uniqueTags = ['All', ...new Set(images.flatMap((image) => image.tags))];

//   const filteredImages = selectedTag === 'All' ? images : images.filter((image) => image.tags.includes(selectedTag));

//   return (
//     <>
//       <PageContainer>
//         <Header>Portfolio</Header>
//         <div style={{ marginBottom: '20px' }}>
//           {uniqueTags.map((tag) => (
//             <button
//               key={tag}
//               onClick={() => setSelectedTag(tag)}
//               style={{
//                 margin: '0 10px 10px 0',
//                 padding: '10px 20px',
//                 cursor: 'pointer',
//                 backgroundColor: selectedTag === tag ? '#333' : '#eee',
//                 color: selectedTag === tag ? '#fff' : '#000',
//                 border: 'none',
//                 borderRadius: '5px',
//               }}
//             >
//               {tag}
//             </button>
//           ))}
//         </div>
//         <GalleryWrap>
//           {filteredImages.map((content) => (
//             <Card key={content.id} setSelected={setSelected} content={content} />
//           ))}
//         </GalleryWrap>
//       </PageContainer>
//     </>
//   );
// };

// export default PortfolioPg;



// import React from 'react';
// import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header, PlayButtonContainer } from './PortfolioPgElements';
// import { images } from './data';
// import { motion } from 'framer-motion';
// // import {PlayButton} from '../../images/playButton.svg'; // Import the SVG file
// import { ReactComponent as PlayButton } from '../../images/playButton.svg';


// const Card = ({ setSelected, content }) => {
 
//   const isImage = content.type === 'image';

//     return (
//       <div style={{ display: 'inline-block', marginBottom: '20px' }}>
//         {isImage ? (
//           <motion.img
//             src={content.src}
//             alt={content.title}
//             layoutId={`card-${content.id}`}
//             loading="eager"
//             whileHover={{
//               scale: 1.025,
//               transition: {
//                 duration: 0.2,
//               },
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             onClick={() => {
//               setSelected(content);
//             }}
//             style={{
//               width: '100%',
//               boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//               cursor: 'pointer',
//             }}
//           />
//         ) : (
//           <motion.div
//   style={{ position: 'relative' }}
//   whileHover={{
//     scale: 1.025,
//     transition: {
//       duration: 0.2,
//     },
//   }}
//   whileTap={{
//     scale: 0.95,
//   }}
//   onClick={() => {
//     setSelected(content);
//   }}
// >
//   {/* Enclose both video and button in a motion.div */}
//   <motion.video
//     src={`${content.src}#t=15`}
//     alt={content.title}
//     layoutId={`card-${content.id}`}
//     preload="metadata"
//     width="100%"
//     height="auto"
//     loading="eager"
//     loop
//     style={{
//       boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//       cursor: 'pointer',
//     }}
//   />
//   <PlayButtonContainer isSelected={setSelected}>
//     <PlayButton />
//   </PlayButtonContainer>
// </motion.div>
//         )}
    
//         <TagsWrap>
//           {content.tags.map((tag) => (
//             <TagsContainer key={tag}>{tag}</TagsContainer>
//           ))}
//         </TagsWrap>
//       </div>
//     );
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

//         <video>
//           <source src="../../videos/vesicle rotating.mp4#t=0.001" type="video/mp4" />
//         </video>
//           {/* import vid1 from '../../videos/vesicle rotating.mp4#t=0.001'; */}
//         </GalleryWrap>
//       </PageContainer>
//     </>
//   );
// };

// export default PortfolioPg;




// Previous version where play button does not move
// import React from 'react';
// import { PageContainer, TagsContainer, TagsWrap, GalleryWrap, Header, PlayButtonContainer } from './PortfolioPgElements';
// import { images } from './data';
// import { motion } from 'framer-motion';
// // import {PlayButton} from '../../images/playButton.svg'; // Import the SVG file
// import { ReactComponent as PlayButton } from '../../images/playButton.svg';


// const Card = ({ setSelected, content }) => {
 
//   const isImage = content.type === 'image';

//     return (
//       <div style={{ display: 'inline-block', marginBottom: '20px' }}>
//         {isImage ? (
//           <motion.img
//             src={content.src}
//             alt={content.title}
//             layoutId={`card-${content.id}`}
//             loading="eager"
//             whileHover={{
//               scale: 1.025,
//               transition: {
//                 duration: 0.2,
//               },
//             }}
//             whileTap={{
//               scale: 0.95,
//             }}
//             onClick={() => {
//               setSelected(content);
//             }}
//             style={{
//               width: '100%',
//               boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//               cursor: 'pointer',
//             }}
//           />
//         ) : (
//           <div style={{ position: 'relative' }}> {/* Enclose video and button in a parent div */}
//             <motion.video
//               src={`${content.src}#t=0.001`}
//               alt={content.title}
//               layoutId={`card-${content.id}`}
//               preload="metadata"
//               width="100%"
//               height="auto"
//               loading="eager"
//               loop
//               whileHover={{
//                 scale: 1.025,
//                 transition: {
//                   duration: 0.2,
//                 },
//               }}
//               whileTap={{
//                 scale: 0.95,
//               }}
//               onClick={() => {
//                 setSelected(content);
//               }}
//               style={{
//                 boxShadow: '0px 0px 30px rgba(0,0,0,0.2)',
//                 cursor: 'pointer',
//               }}
//             />
//             <PlayButtonContainer isSelected={setSelected}>
//               <PlayButton/>
//             </PlayButtonContainer>
            
//           </div>
//         )}
    
//         <TagsWrap>
//           {content.tags.map((tag) => (
//             <TagsContainer key={tag}>{tag}</TagsContainer>
//           ))}
//         </TagsWrap>
//       </div>
//     );
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

//         <video>
//           <source src="../../videos/vesicle rotating.mp4#t=0.001" type="video/mp4" />
//         </video>
//           {/* import vid1 from '../../videos/vesicle rotating.mp4#t=0.001'; */}
//         </GalleryWrap>
//       </PageContainer>
//     </>
//   );
// };

// export default PortfolioPg;