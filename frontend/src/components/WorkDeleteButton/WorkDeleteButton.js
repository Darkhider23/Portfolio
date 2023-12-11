import React from 'react';
import axios from 'axios';

const WorkDeleteButton = ({ workId, refreshWorks }) => {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/works/${workId}`);
    
      if (typeof refreshWorks === 'function') {
        refreshWorks();
      }
    } catch (error) {
      console.error('Error deleting work:', error);
    }
  };

  return <button onClick={handleDelete}>Delete Work</button>;
};

export default WorkDeleteButton;