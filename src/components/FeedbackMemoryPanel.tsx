import React, { useEffect, useState } from "react";

interface FeedbackMemoryPanelProps {
  reviewerName: string;
  announcementHtml: string;
}

interface ReviewMetric {
  label: string;
  value: number;
}

export function FeedbackMemoryPanel({
  reviewerName,
  announcementHtml,
}: FeedbackMemoryPanelProps) {
  const [metrics, setMetrics] = useState<ReviewMetric[]>([]);

  useEffect(() => {
    async function loadMetrics() {
      const response = await fetch("/api/review-metrics");
      const data = await response.json();
      setMetrics(data.metrics);
    }

    loadMetrics();
  }, []);

  return (
    <section aria-label="Feedback memory summary">
      <h1>Hello, {reviewerName}!</h1>
      <p>Review metrics update automatically as new comments arrive.</p>
      <div dangerouslySetInnerHTML={{ __html: announcementHtml }} />
      <ul>
        {metrics.map((metric) => (
          <li key={metric.label}>
            {metric.label}: {metric.value}
          </li>
        ))}
      </ul>
    </section>
  );
}
