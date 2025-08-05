const ProgressBar = ({
  value,
  max = 100,
  color = "blue",
  label = "",
  showPercentage = true,
}) => {
  const percentage = Math.min((value / max) * 100, 100);

  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
    indigo: "bg-indigo-500",
    purple: "bg-purple-500",
  };

  return (
    <div className="w-full">
      {label && (
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-300 mb-1">
          <span>{label}</span>
          {showPercentage && <span>{Math.round(percentage)}%</span>}
        </div>
      )}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className={`${colorClasses[color]} h-2.5 rounded-full`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
