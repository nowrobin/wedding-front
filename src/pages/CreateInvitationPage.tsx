import React, { useState } from 'react';
import PageLayout from '../components/layout/PageLayout';
import HeaderButton from '../components/common/Header/HeaderButton';
import InvitationTitleInput from '../components/common/CreateInvitation/InvitationTitleInput';
import { useInvitationStore } from '../store/useInvitaionStore';
import { useNavigate } from 'react-router';
import { Accordion } from '../components/common/CreateInvitation/Accordion';
import { accordionData } from '../constants/accordionData';
import { Stepper } from '../components/common/CreateInvitation/Stepper';
import { StepNavigation } from '../components/common/CreateInvitation/StepNavigation';

const CreateInvitationPage: React.FC = () => {
  const { title, setTitle } = useInvitationStore();
  const navigate = useNavigate();

  const handleCancel = () => navigate('/');
  const handleSave = () => console.log('저장 버튼 클릭, 제목: ', title);

  const [expandedIds, setExpandedIds] = useState<number[]>([]);

  const toggleExpand = (id: number) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const [steps, setSteps] = useState(1);

  let sliceRanges = [[0, 4], [4, 7], [7]];
  let [start, end] = sliceRanges[steps - 1] || sliceRanges[2];
  let item = accordionData.slice(start, end);

  const handleNext = () => {
    setSteps(steps + 1);
  };

  const handlePrev = () => {
    setSteps(steps - 1);
  };

  return (
    <PageLayout
      title="새로운 청첩장"
      leftButton={
        <HeaderButton
          onClick={handleCancel}
          className="text-sm hover:text-rose-400 active:text-rose-600"
        >
          취소
        </HeaderButton>
      }
      rightButton={
        <HeaderButton
          onClick={handleSave}
          className="text-sm hover:text-rose-400 active:text-rose-600"
        >
          저장
        </HeaderButton>
      }
      customFooter={
        <StepNavigation
          currentStep={steps}
          totalSteps={3}
          onPrev={handlePrev}
          onNext={handleNext}
          onPreview={() => navigate('/preview')}
        />
      }
    >
      <div>
        {/* 청첩장 제목 입력 */}
        <InvitationTitleInput
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Stepper
          steps={['기본 정보 입력', '기능 선택', '테마 선택']}
          currentStep={steps}
        />
        <Accordion
          items={item}
          expandedIds={expandedIds}
          toggleExpand={toggleExpand}
        />
      </div>
    </PageLayout>
  );
};

export default CreateInvitationPage;
