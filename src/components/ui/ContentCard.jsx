import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Image + title + excerpt + CTA card used on Solutions and Blog grids.
 */
export default function ContentCard({
  image,
  imageAlt,
  title,
  description,
  to,
  ctaLabel = 'More Detail',
  className = '',
}) {
  return (
    <article
      className={cn(
        'site-card group bg-white rounded-[10px] overflow-hidden border border-gray-200',
        'flex flex-col h-full cursor-pointer',
        className,
      )}
    >
      <div className="h-[220px] w-full shrink-0 overflow-hidden">
        <img
          src={image}
          alt={imageAlt || title}
          className="w-full h-full object-fit md:object-cover transition-transform duration-300 ease-out group-hover:scale-105"
        />
      </div>

      <div className="p-5 flex flex-col items-start flex-grow">
        <h3 className="text-[#da251d] font-bold text-lg mb-2 leading-snug transition-colors duration-300 group-hover:text-[#c02019]">
          {title}
        </h3>

        <p className="text-[#4b5563] text-[15px] font-medium leading-[1.55] my-3.5 ">
          {description}
        </p>

        <Link
          to={to}
          className="bg-[#da251d] text-white px-5 py-1.5 rounded-md text-[13px] font-semibold hover:bg-[#c02019] transition-colors mt-4 group-hover:shadow-sm"
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}
