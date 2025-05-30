interface InformationItemProps {
  messages: string[];
}

const InformationItem = ({ messages }: InformationItemProps) => {
  return (
    <div className="max-w-lg mx-auto text-[9px] text-gray-400 font-medium m-6 flex flex-col gap-1">
      {messages.map((message, index) => (
        <div key={index} className="flex items-start gap-1">
          <span className="text-gray-400">ⓘ</span>
          <span>{message}</span>
        </div>
      ))}
    </div>
  );
};

export default InformationItem;
