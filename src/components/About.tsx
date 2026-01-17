import React from 'react';

const About: React.FC = () => {
  return (
    <section className="py-32 px-6 bg-neutral-900 text-center">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-amber-500 text-sm tracking-[0.3em] mb-8 uppercase">Our Philosophy</h3>
        <p className="text-3xl md:text-5xl font-light leading-relaxed text-white/90 mb-12">
          "자동차는 주차되는 것이 아니라,<br />
          <span className="font-serif italic text-amber-500">전시</span>되어야 합니다."
        </p>
        <div className="w-px h-24 bg-gradient-to-b from-amber-500 to-transparent mx-auto"></div>
        <p className="mt-12 text-gray-400 leading-8 text-lg font-light">
          GLASS ROOM은 단순한 차고가 아닙니다.<br />
          당신의 컬렉션을 예술 작품처럼 감상하며<br />
          가장 완벽한 휴식을 취할 수 있는 프라이빗 생츄어리입니다.
        </p>
      </div>
    </section>
  );
};

export default About;
