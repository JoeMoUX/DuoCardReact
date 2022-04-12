import React from "react";

import "./compatibility.css";

const Compatibility = () => {
  return (
    <div className="compatibility_container_div">
      <div className="compatibility_title_description_div">
        <h2 className="compatibility_title">Duo Card Compatibility List</h2>
        <p>
          She wrote him a long letter, but he didn't read it. Combines are no
          longer just for farms.
        </p>
        <p>
          Kevin embraced his ability to be at the wrong place at the wrong time.
          Sometimes it is better.
        </p>
      </div>
      <div className="compatibility_list_container_div">
        <div className="compatibility_list_section_div_left">
          <h3>Apple</h3>
          <p>All phones since 2017 including:</p>
          <ul>
            <li>Iphone 8 Series</li>
            <li>Iphone X Series</li>
            <li>Iphone 11 Series</li>
            <li>Iphone 12 Series</li>
            <li>Iphone SE (2020)</li>
          </ul>

          <h3>Samsung</h3>
          <p>All phones since 2014 including:</p>
          <ul>
            <li>S Series</li>
            <li>A Series</li>
          </ul>

          <h3>OnePlus</h3>
          <p>All phones since 2015 including:</p>
          <ul>
            <li>3 Series, 5 Series</li>
            <li>6 Series, 7 Series</li>
            <li>8 Series</li>
          </ul>

          <h3>HTC</h3>
          <p>All phones since 2015.</p>
        </div>
        <div className="compatibility_list_section_div_right">
          <h3>Google</h3>
          <p>All phones since 2015 including:</p>
          <ul>
            <li>IPixel Series</li>
            <li>Nexus Series</li>
          </ul>

          <h3>Huawei</h3>
          <p>All phones since 2016 including:</p>
          <ul>
            <li>P Series</li>
          </ul>

          <h3>LG</h3>
          <p>All phones since 2014 including:</p>
          <ul>
            <li>Q Series</li>
            <li>G Series</li>
            <li>V Series</li>
          </ul>

          <h3>Nokia</h3>
          <p>All phones since 2014 including:</p>
          <ul>
            <li>9 Pureview</li>
            <li>8, 8 Sirocco,</li>
            <li>6, 7 Plus</li>
            <li>3, 5, 5.1</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Compatibility;
