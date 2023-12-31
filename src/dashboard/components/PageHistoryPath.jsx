import React from 'react';
import { Toolbar } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

function PageHistoryPath() {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter((segment) => segment !== ''); // Split the pathname into segments

  // Create a list of breadcrumbs (sub-pages)
  const breadcrumbs = pathSegments.map((segment, index) => (
    <React.Fragment key={index}>
      <span> / </span>
      <NavLink to={`/${pathSegments.slice(0, index + 1).join('/')}`}>
        {segment}
      </NavLink>
    </React.Fragment>
  ));

  return (
    <Toolbar
      sx={{
        // py: 0.5,
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        zIndex: 10
      }}
    >
      <NavLink to={'/'} title={'Home'}>
        <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.09615 13.8548V11.8102C6.09614 11.2921 6.51744 10.8711 7.03928 10.8679H8.9554C9.47957 10.8679 9.9045 11.2898 9.9045 11.8102V13.8488C9.90449 14.2982 10.2697 14.6634 10.7223 14.6667H12.0295C12.6401 14.6682 13.2262 14.4285 13.6584 14.0005C14.0907 13.5724 14.3337 12.9912 14.3337 12.385V6.57724C14.3336 6.0876 14.115 5.62315 13.7367 5.30901L9.29564 1.78286C8.51933 1.16609 7.41057 1.18602 6.65725 1.83027L2.31167 5.30901C1.91549 5.61389 1.67869 6.07972 1.66699 6.57724V12.3791C1.66699 13.6425 2.69858 14.6667 3.97111 14.6667H5.24852C5.46644 14.6682 5.67598 14.5834 5.83064 14.431C5.9853 14.2785 6.07228 14.0711 6.07227 13.8548H6.09615Z" fill="#7017E0" />
        </svg>
      </NavLink>

      {breadcrumbs}
    </Toolbar>
  );
}

export default PageHistoryPath;
