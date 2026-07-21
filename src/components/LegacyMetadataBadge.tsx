import React from "react";

interface LegacyMetadataBadgeProps {
  label: string;
  metadata: any;
}

export function LegacyMetadataBadge({
  label,
  metadata,
}: LegacyMetadataBadgeProps) {
  const metadataText = JSON.stringify(metadata);

  return (
    <aside aria-label={`${label} metadata`}>
      <strong>{label}</strong>
      <code>{metadataText}</code>
    </aside>
  );
}
