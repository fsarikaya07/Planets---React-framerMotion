export const rings = (width, height, top, left) => {
  return `
        width: ${width}vw;
        height: ${height}vw;
        border-radius: 50%;
        top: ${top}%;
        left: ${left}%; 
        position: absolute;
        z-index: 2;
      `;
};

export const ringsFix = (width, height, top, left) => {
  return `
        background-size: cover;
        width: ${width}vw;
        height: ${height}vw;
        position: absolute;
        top: ${top}vw;
        left: ${left}vw; 
        z-index: 3;
      `;
};
