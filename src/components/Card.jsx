import React from 'react';
import { MoreVertical } from 'lucide-react';

const Card = ({ title, description, date }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '14px',
        padding: '22px 24px 18px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '180px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.06)',
        transition: 'box-shadow 0.2s',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.06)';
      }}
    >

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '14px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 600, color: '#1e293b', margin: 0 }}>
          {title}
        </h3>
        <button style={{ background: 'none', border: 'none', color: '#94a3b8', padding: '2px', borderRadius: '4px', cursor: 'pointer', flexShrink: 0 }}>
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.65',
          color: '#64748b',
          margin: 0,
          overflow: 'hidden',
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          flexGrow: 1,
        }}
      >
        {description}
      </p>

      {/* Footer */}
      <div style={{ paddingTop: '10px', borderTop: '1px solid #f1f5f9', marginTop: '18px' }}>
        <span style={{ fontSize: '11px', color: '#9ca3af', margin: 0 }}>
          Created On: {date}
        </span>
      </div>

    </div>
  );
};

export default Card;
