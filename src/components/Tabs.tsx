import React from 'react';

interface TabsProps {
  activeTab: string;
  onChange: (tabId: string) => void;
  children: React.ReactElement[];
}

interface TabProps {
  id: string;
  label: string;
  children: React.ReactNode;
}

export function Tabs({ activeTab, onChange, children }: TabsProps) {
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {React.Children.map(children, (child) => (
            <button
              key={child.props.id}
              onClick={() => onChange(child.props.id)}
              className={`
                ${activeTab === child.props.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }
                whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm
              `}
            >
              {child.props.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-8">
        {React.Children.map(children, (child) =>
          child.props.id === activeTab ? child : null
        )}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}