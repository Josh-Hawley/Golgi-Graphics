import React from 'react'
import {Backdrop, ImageTextWrap, Header, TagsContainer, TagsWrap, Paragraph} from './ModalElements';
import { motion } from 'framer-motion';

function Modal({selected, setSelected}) {

  if (!selected) {
    return <></>
  }
  return (
    <div>
      
      <Backdrop onClick={() => setSelected(null)}>
        <ImageTextWrap onClick={e => e.stopPropagation()}>
        
          <motion.img 
          src={selected.src} 
          layout='position'  
          style={{width: '100%', zIndex: '3000', boxShadow: '0px 0px 30px rgba(0,0,0,0.2)'}} 
          layoutId={`card-${selected.id}`}
          transition= {{ type: 'spring', stiffness: 200, damping: 30 }}
          />
         

             
          <motion.div
          
            initial={{
              opacity: 0,
              y: 100
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            // transition={{
            //   duration: 0.8
            // }}
            transition= {{ type: 'spring', stiffness: 200, damping: 35 }}
            style={{
              background:'white',
              padding: '20px',
              width: '100%',
              marginBottom: '100px'
              

            }}
            >
              <Header>{selected.title}</Header>
              <TagsWrap>
              {selected.tags.map((tag) => {
                return (
                  <TagsContainer key={tag} >{tag}</TagsContainer>
                )
              })}
            </TagsWrap>
            <Paragraph>{selected.description}</Paragraph>
          </motion.div>
            
          
        </ImageTextWrap>
      </Backdrop>
    </div>
  )
};

export default Modal;
