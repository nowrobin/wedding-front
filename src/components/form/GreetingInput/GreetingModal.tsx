import React from 'react';
import useGreetingStore from '../../../store/useGreetingStore';

const greetingSample =
  [
    '저희 두 사람의 작은 만남이 사랑의 결실을 이루어 소중한 결혼식을 올리게 되었습니다. 평생 서로 귀하게 여기며 첫 마음 그대로 존중하고 배려하며 살겠습니다. 오로지 믿음과 사랑을 약속하는 날오셔서 축복해 주시면 더없는 기쁨으로 간직하겠습니다.',
    '서로에게 행복을 주는 사람을 만났습니다. 웃는 모습이 너무나 예쁜 그 사람을 만났습니다. 배려하는 마음이 따뜻한 그 사람을 만났습니다. 운명처럼 만나게 된 우리의 인연 그 인연에 이끌려 이제 영원을 함께 약속하려 합니다. 저희의 하나 됨을 지켜보아 주시고 격려해 주시면 더없는 기쁨으로  간직하겠습니다.'];

const GreetingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const { selectedSample, setSelectedSample, setGreeting } = useGreetingStore();

  if (!isOpen) return null;

  return (
    <div
      id="select-modal"
      tabIndex={-1}
      aria-hidden="false"
      className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
    >
      <div className="relative w-full max-w-md p-4">
        <div className="bg-white rounded-lg shadow-md">

          <div className="flex items-center justify-between p-4 border-b rounded-t">
            <h3 className="text-base font-semibold text-gray-900">
              샘플 문구 선택
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-2"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">닫기</span>
            </button>
          </div>

          <div className="flex flex-col gap-4 p-4">
            {greetingSample.map((text, index) => (
              <button
                key={index}
                className={`text-left cursor-pointer p-5 rounded-lg border w-full ${text === selectedSample
                    ? 'border-black bg-gray-100'
                    : 'border-gray-200 hover:bg-gray-100'
                  }`}
                onClick={() => setSelectedSample(text)}
              >
                {text}
              </button>
            ))}
            <button
              onClick={() => {
                if (selectedSample) {
                  setGreeting(selectedSample);
                  onClose();
                }
              }}
              className="px-4 py-2 text-white bg-primary rounded-xl hover:bg-pink-600"
              disabled={!selectedSample}
            >
              적용하기
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GreetingModal;
