import React from 'react';
import { MoreVertical } from 'lucide-react';

const Card = ({ title, description, date }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '24px 24px 20px',
        display: 'flex',
        flexDirection: 'column',
        minHeight: '200px',
        boxShadow: 'none',
        transition: 'all 0.1s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
        e.currentTarget.style.borderColor = '#cbd5e1';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = 'none';
        e.currentTarget.style.borderColor = '#e2e8f0';
      }}
    >

      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.01em' }}>
          {title}
        </h3>
        <button style={{ background: 'none', border: 'none', color: '#cbd5e1', padding: '2px', borderRadius: '4px', cursor: 'pointer', flexShrink: 0 }}>
          <MoreVertical size={16} />
        </button>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: '13px',
          lineHeight: '1.75',
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
      <div style={{ paddingTop: '12px', borderTop: '1px solid #f8fafc', marginTop: '20px' }}>
        <span style={{ fontSize: '11px', color: '#94a3b8', margin: 0, fontWeight: 500 }}>
          Created On: {date}
        </span>
      </div>

    </div>
  );
};

export default Card;
