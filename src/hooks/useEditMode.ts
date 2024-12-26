import { useState, useCallback } from 'react';

export function useEditMode() {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = useCallback(() => setIsEditing(true), []);
  const stopEditing = useCallback(() => setIsEditing(false), []);
  const toggleEditing = useCallback(() => setIsEditing(prev => !prev), []);

  return {
    isEditing,
    startEditing,
    stopEditing,
    toggleEditing
  };
}