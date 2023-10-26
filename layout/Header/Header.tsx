'use client'

import React from "react";

export default function Header() {

  return (
    <header className={`header-area `}>

      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a target="_blank" href="https://portal.issn.org/resource/issn/2636-7661">ISSN-2636-7661</a>
          </div>
          <div className="topbar-one__right">
            <a href="https://dergipark.org.tr/en/journal/759/submission/step/manuscript/new">MAKE A SUBMISSION</a>
          </div>
        </div>
      </div>
    </header>

  )
};
