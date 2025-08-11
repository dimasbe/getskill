import { HiCheckCircle, HiXCircle } from "react-icons/hi";

type StatusIndicatorProps = {
  isOnline: boolean;
};

function StatusIndicator({ isOnline }: StatusIndicatorProps) {
  return (
    <span className="flex items-center gap-1">
      {isOnline ? (
        <>
          <HiCheckCircle className="text-green-500" />
          <span className="text-green-600">Online</span>
        </>
      ) : (
        <>
          <HiXCircle className="text-red-500" />
          <span className="text-red-600">Offline</span>
        </>
      )}
    </span>
  );
}

export default StatusIndicator;
