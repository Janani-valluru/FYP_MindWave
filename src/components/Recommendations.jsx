import React from "react";
//import Video from "./Video";
const Recommendations = ({ predictedLevel }) => {
  const renderRecommendations = () => {
    if (predictedLevel === "low level") {
      return (
        <div>
          <h2>Recommendations for Mild Depression:</h2>
          <ul>
            <li>
              Lifestyle Changes: Engage in regular exercise, maintain a healthy
              diet, prioritize sleep, manage stress, and connect with loved
              ones.{" "}
              <a href="https://youtu.be/VlDgowUAyx4?si=rkHlvUda2fnUCkSl">
                Watch Video
              </a>
            </li>
            <li>
              Self-Help: Explore mood tracking apps, online support groups, and
              self-help books on CBT or mindfulness.{" "}
              <a href="https://www.youtube.com/watch?v=example2">Watch Video</a>
            </li>
            <li>
              Professional Support: Consider therapy (CBT) or consult your
              doctor for a comprehensive evaluation.{" "}
              <a href="https://www.youtube.com/watch?v=example3">Watch Video</a>
            </li>
          </ul>
        </div>
      );
    } else if (predictedLevel === "Mid level") {
      return (
        <div>
          <h2>Recommendations for Moderate Depression:</h2>
          <ul>
            <li>
              Lifestyle Changes: Continue with mild depression recommendations
              and focus on setting achievable goals and managing your time
              effectively.{" "}
              <a href="https://www.youtube.com/watch?v=example4">Watch Video</a>
            </li>
            <li>
              Professional Support: Therapy with a mental health professional is
              highly recommended. Medication might be considered in consultation
              with a doctor.{" "}
              <a href="https://www.youtube.com/watch?v=example5">Watch Video</a>
            </li>
            <li>
              Additional Resources: Join support groups or reach out to mental
              health hotlines for immediate support.{" "}
              <a href="https://www.youtube.com/watch?v=example6">Watch Video</a>
            </li>
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Recommendations for High Depression:</h2>
          <ul>
            <li>
              Seek immediate medical attention or contact mental health crisis
              services.{" "}
              <a href="https://youtu.be/VlDgowUAyx4?si=rkHlvUda2fnUCkSl">
                Watch Video
              </a>
            </li>
            <li>
              Professional Evaluation: A comprehensive evaluation by a
              psychiatrist is crucial to determine appropriate treatment
              options, which may include medication, therapy, or
              hospitalization.{" "}
              <a href="https://www.youtube.com/watch?v=example8">Watch Video</a>
            </li>
            <li>
              Build a Support System: Involve family and friends for emotional
              support and explore case management services if needed.{" "}
              <a href="https://www.youtube.com/watch?v=example9">Watch Video</a>
            </li>
            <li>
              Consider Intensive Outpatient Programs (IOPs) or Electroconvulsive
              Therapy (ECT) in severe cases, under professional guidance.{" "}
              <a href="https://www.youtube.com/watch?v=example10">
                Watch Video
              </a>
            </li>
          </ul>
        </div>
      );
    }
  };

  return <div>{renderRecommendations()}</div>;
};

export default Recommendations;
