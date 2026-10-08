import React from 'react';

const LOCAL_CATEGORY_IMAGES = {
  Music: '/references/music-vocalist.jpg'
};

export const TalentCategoryCard = ({ category, onClick, isSelected = false }) => {
  const imageSrc = LOCAL_CATEGORY_IMAGES[category.id] || category.image;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isSelected}
      className="talent-category-card"
      aria-label={`Explore ${category.name} talent`}
    >
      <img
        src={imageSrc}
        alt={`${category.name} talent`}
        loading="lazy"
        onError={(e) => {
          if (category.image && e.currentTarget.src !== category.image) {
            e.currentTarget.src = category.image;
          }
        }}
      />
      <span className="category-label">{category.name}</span>
    </button>
  );
};
