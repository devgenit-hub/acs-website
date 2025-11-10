import React from 'react';

// must define the props if any params is passed
type Props = {
  params?: any;
};

const Landing = ({ params }: Props) => {
  return (
    <div className="w-full flex items-center justify-center">
      <h1 className="text-3xl font-bold">{params} src/pages/Landing.tsx</h1>
    </div>
  );
};

export default Landing;
