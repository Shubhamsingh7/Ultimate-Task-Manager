import { useState, useEffect, useMemo } from "react";

interface DueDateProps {
  date: string;
}

const colorObject = {
  "15": "red",
  "7": "yellow",
  "1": "green",
};

const DueDate: React.FC<DueDateProps> = (props: DueDateProps) => {
  const { date } = props;

  const [daysRemaining, setDaysRemaining] = useState(0);

  useEffect(() => {
    const todayDate = new Date().getDate();
    const taskDate = new Date(date).getDate();

    setDaysRemaining(taskDate - todayDate);
  }, []);

  const color = useMemo(() => {
    if (daysRemaining > 15) {
      return colorObject["15"];
    } else if (daysRemaining > 7) {
      return colorObject["7"];
    } else {
      return colorObject["1"];
    }
  }, [daysRemaining]);

  return (
    <div
      className={`days_chip`}
      style={{
        backgroundColor: color,
      }}
    >
      <label>Remaing days: {daysRemaining}</label>
    </div>
  );
};

export default DueDate;
