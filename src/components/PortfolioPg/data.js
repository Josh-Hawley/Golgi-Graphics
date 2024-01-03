import img3 from '../../images/Gallery/Hes_interactions.jpg';
import img2 from '../../images/Gallery/img3.png';
import img1 from '../../images/Gallery/Neurulation.jpg';
import img8 from '../../images/Gallery/HES5 pattern neural tube.jpg';
import img9 from '../../images/Gallery/Memrbane fluorescence art.jpg';
import img10 from '../../images/Gallery/HES neuroepithelia art.jpg';
import img11 from '../../images/Gallery/IMG_2482.jpeg';
import img13 from '../../images/Gallery/grant figure.jpg';
import img14 from '../../images/Gallery/AnzyGraphicalAbstract.jpg';

import vid1 from '../../videos/vesicle rotating.mp4';
import vid2 from '../../videos/potassium channel.mp4';



export const images = [
  {
    id: 12,
    type: 'video',
    src: vid1,
    title: 'Lysosome cross-section 3D animation',
    tags: ['3D Animation', 'Video', 'Molecular dynamics', ],
    description: 'An animated cross-section of a lysosome, rendered in 3D. A phospholipid bilayer is depicted in white.'
 },
  {
    id: 1,
    src: img1,
    type: 'image',
    title: 'Neurulation: the developing spinal cord',
    tags: ['Figure', 'Developmental', 'Morphogenesis'],
    description: 'The process of neurulation. The ectoderm forms the spinal cord by first folding in on itself to form the neural tube, which is made up of neural progenitors that go on to form the neurons and glia of the spinal cord, brain, and retina.'
  },
  {
    id: 2,
    src: img2,
    type: 'image',
    title: 'Schematic of the Notch-Hes signalling pathway',
    tags: ["Figure", "Gene network"],
    description: 'Notch signalling is a contact dependent signalling network utilised across many developmental processes as well as in adult tissue. Here, it is shown in the context of its regulation on Hes and proneural genes.'
  },
  
  {
    id: 3,
    src: img3,
    type: 'image',
    title: 'Modes of transcription factor repression',
    tags: ['Figure', 'Differentiation', 'Gene network', 'Neurogenesis'],
    description: 'Different types of repression that Hes genes exert on proneural genes. This influences the differentiation status of neural progenitor cells in the developing spinal cord.'
  },

  {
    id: 4,
    src: vid2,
    type: 'video',
    title: 'Potassium channel',
    tags: ['Art', '3D', 'Protein', 'Molecular dynamics simulation'],
    description: 'A stylised molecular dynamics simulation of a potassium ion channel rendered in 3D. Membrane lipids shown in purple, potassium channel shown in the center, with white potassium ions passing through the center of the channel. Link to the published work: dx.doi.org/10.1021/ct4005933'
  },

 {
    id: 8,
    src: img8,
    type: 'image',
    title: 'Neuroepithelia',
    tags: ['Grant figure', 'Paper'],
    description: 'The structure of the neuroepithelia that make up the neural tube, and the patterned gene expression within it.'
  },



  {
    id: 10,
    type: 'image',
    src: img10,
    title: 'Lightbulb cell art',
    tags: ['Art', '3D', 'Cells'],
    description: 'Artistic 3D render of endogenous HES5::Venus reporter in neuroepithelia.'
  },

  {
    id: 9,
    type: 'image',
    src: img9,
    title: 'Mosaic membrane art',
    tags: ['Art', '3D', 'Cells'],
    description: 'Artistic 3D render of mosaically labelled neuroepithlial cells where bright cells represent a membrane-bound fluorescent protein.'
  },

  {
    id: 13,
    type: 'image',
    src: img13,
    title: 'Grant figure',
    tags: ['Grant figure'],
    description: 'Work done for the graphical abstract of a grant application.'
  },

  {
    id: 14,
    type: 'image',
    src: img14,
    title: 'Graphical abstract',
    tags: ['Graphical abstract'],
    description: 'Graphical abstract for a paper soon to be published.'
  },

  {
    id: 11,
    type: 'image',
    src: img11,
    title: 'Lysosome V-ATPase',
    tags: ['3D'],
    description: 'V-ATPase - a proton pump - on the surface of a lysosome, roughly to scale for a small vesicle.'
  },

  

  
  
];
