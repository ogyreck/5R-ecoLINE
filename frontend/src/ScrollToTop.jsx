import React, { useEffect, Fragment } from 'react';
import { withRouter } from 'react-router-dom';

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, );

  return <Fragment>{children}</Fragment>;
}

export default withRouter(ScrollToTop);

// import { useEffect } from 'react'
// import { useLocation } from '@reach/router'

// export default function ScrollToTop() {
//   const { pathname } = useLocation()

//   useEffect(() => {
//     window.scrollTo(0, 0)
//   }, [pathname])

//   return null
// }
