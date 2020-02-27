import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Spring, config } from 'react-spring/renderprops';

const Item = ({ item, clicked, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.8
  });

  console.log(inView);

  return (
    <Spring
      config={config.default}
      to={{
        opacity: inView ? 1 : 0,
        transform: inView ? 'translate3d(0,0,0)' : 'translate3d(20px,0,0)'
      }}
      delay={(index % 2) * 140}
    >
      {props => (
        <div ref={ref} onClick={() => clicked(item.id)} style={props}>
          {item.name}
        </div>
      )}
    </Spring>
  );
};

export default Item;
