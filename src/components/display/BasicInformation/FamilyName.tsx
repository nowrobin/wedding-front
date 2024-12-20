import React from 'react';
import useBrideGroomStore from '../../../store/useBrideGroomStore';
import deceasedImage from '../../../assets/deceased.png';

const FamilyName = () => {
  const brideGroom = useBrideGroomStore((state) => state.brideGroom);

  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center">
        {brideGroom.map((person, index) => (
          <div key={index} className="flex items-center">
            <div className="flex items-center">
              {person.family.father.isDeceased && (
                <img src={deceasedImage} alt="故" className="w-4 h-4 mr-1" />
              )}
              {person.family.father.name}
            </div>
            {person.family.mother.name && (
              <span className="mx-1.5">&#183;</span>
            )}
            <div className="flex items-center">
              {person.family.mother.isDeceased && (
                <img src={deceasedImage} alt="故" className="w-4 h-4 mr-1" />
              )}
              {person.family.mother.name}
            </div>
            <div>
              의 {person.relation} {person.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FamilyName;
