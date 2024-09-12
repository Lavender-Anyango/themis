"use client"
import React, { useState } from 'react';
import Image from 'next/image';

interface CardProps {
  title: string;
  imageSrc: string;
  children: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Card: React.FC<CardProps> = ({ title, imageSrc, children, isActive, onClick }) => {
  return (
    <div 
      className={`p-4 transition-all duration-300 ease-in-out cursor-pointer 
                  ${isActive ? 'bg-black' : 'bg-white'} h-full flex flex-col justify-between 
                  shadow-md hover:shadow-lg`}
      onClick={onClick}
    >
      <div className="flex-grow flex flex-col justify-center">
        <h2 className={`text-[40px] font-semibold mb-4 text-center 
                        ${isActive ? 'text-[#D38816]' : 'text-[#D38816]'}`}>
          {title}
        </h2>
        <div className="w-full mb-4 flex items-center justify-center">
          <div className="w-28 h-28 md:w-32 md:h-32 relative"> {/* Adjusted image size */}
            <Image src={imageSrc} alt={title} layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="mt-auto">
        <p className={`text-[25px] ${isActive ? 'text-[#D38816]' : 'text-black'}`}>
          {children}
        </p>
      </div>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <div className="min-h-screen w-full flex flex-col p-4">
      <h1 className="text-[60px] font-bold text-center mb-6 font-josefin">
        About
      </h1>
      
      <p className="text-[32px] mb-8 text-center max-w-6xl mx-auto">
        This project emerged from the pressing need to enhance the efficiency of the Kenyan judicial 
        system, which faces challenges such as lengthy court processes and inadequate documentation 
        during hearings. In response, <span className="text-[#D38816] font-semibold">Themis AI</span> developed an innovative solution that utilizes artificial 
        intelligence to provide real-time transcription and generate comprehensive case briefs during 
        virtual court hearings.
      </p>
      
      <div className="flex-grow grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"> {/* Original margins */}
        <Card 
          title="Mission" 
          imageSrc="/images/mission.png"
          isActive={activeCard === 'mission'}
          onClick={() => setActiveCard(activeCard === 'mission' ? null : 'mission')}
        >
          Our mission is to harness the power of artificial intelligence to streamline judicial operations, 
          reduce delays, and improve the overall quality of legal proceedings in Kenya.
        </Card>
        
        <Card 
          title="Vision" 
          imageSrc="/images/vision.png"
          isActive={activeCard === 'vision'}
          onClick={() => setActiveCard(activeCard === 'vision' ? null : 'vision')}
        >
          To revolutionize the Kenyan judiciary system by providing innovative AI solutions that enhance 
          the efficiency and accessibility of legal processes, ensuring that justice is served swiftly 
          and accurately.
        </Card>
        
        <Card 
          title="Values" 
          imageSrc="/images/values.png"
          isActive={activeCard === 'values'}
          onClick={() => setActiveCard(activeCard === 'values' ? null : 'values')}
        >
          Our values are integrity, innovation, collaboration, accountability, and respect for human rights.
        </Card>
      </div>
    </div>
  );
};

export default AboutSection;
