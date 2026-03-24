import React from 'react';

export const BackgroundGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505] overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#22c55e05,transparent)]"></div>
    </div>
  );
};
