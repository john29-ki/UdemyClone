import React, { useState } from "react";
import "./index.css";
//Dummy Data
const categories = [
  { id: 1, title: "Python", image: "https://img.icons8.com/color/96/python.png" },
  { id: 2, title: "Web Development", image: "https://img.icons8.com/color/96/html-5.png" },
  { id: 3, title: "Data Science", image: "https://img.icons8.com/color/96/data-in-both-directions.png" },
  { id: 4, title: "Machine Learning", image: "https://img.icons8.com/color/96/artificial-intelligence.png" },
  { id: 5, title: "Business", image: "https://img.icons8.com/color/96/business.png" },
  { id: 6, title: "Design", image: "https://img.icons8.com/color/96/design.png" }
];

const companies = [
  { name: "Nasdaq", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/NASDAQ_Logo.svg/1200px-NASDAQ_Logo.svg.png" },
  { name: "Volkswagen", logo: "https://t4.ftcdn.net/jpg/03/67/41/07/360_F_367410748_MvYsCNThTfmCqGmvm5Zy856gseZUGHHT.jpg" },
  { name: "Samsung", logo: "https://i.pinimg.com/736x/e5/cb/66/e5cb66fe655e53d607210abe8015a7b0.jpg" },
  { name: "Vimeo", logo: "https://download.logo.wine/logo/Vimeo/Vimeo-Logo.wine.png" },
  { name: "Cisco", logo: "https://1000logos.net/wp-content/uploads/2016/11/Cisco-logo.jpg" }
];


function Navbar({ search, setSearch }) {
return (
<nav className="navbar">
<div className="logo-container">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcbC9JNrtvj6sdkH2pDn8Xg2u5uy_TTZ8Mzg&s" alt="Udemy" className="logo-img" />
</div>


<input
type="text"
placeholder="Search for anything"
value={search}
onChange={(e) => setSearch(e.target.value)}
className="search-input"
/>


<div className="nav-buttons">
<button className="btn">Login</button>
<button className="btn">Signup</button>
</div>
</nav>
);
}

function BlackFridayBanner() {
  return (
    <section className="black-friday-banner">
      <div className="banner-content">
        <div className="banner-text-box">
          <h2 className="banner-title">Learn more, spend less — Black Friday Sale from £279.99</h2>
          <p className="banner-subtitle">Sitewide savings on thousands of courses. Ends Nov 28.</p>
        </div>
      </div>
     
    </section>
  );
}


function CategoryCard({ title, image }) {
  return (
    <div className="category-card">
      <img src={image} alt={title} className="category-img" />
      <p className="category-title">{title}</p>
    </div>
  );
}


function Categories({ categories }) {
  return (
    <section className="categories">
      <h3 className="section-title">Skills to transform your career and life</h3>
      <p>From critical skills to technical topics, Udemy supports your professional development. </p>
      <div className="categories-grid">
        {categories.map((c) => (
          <CategoryCard key={c.id} title={c.title} image={c.image} />
        ))}
      </div>
    </section>
  );
}


function TrustedCompanies({ companies }) {
  return (
    <section className="trusted">
      <h3 className="section-title center">Trusted by over 17,000 companies and millions of learners around the world</h3>
      <div className="companies-list">
        {companies.map((c, index) => (
          <img
            key={index}
            src={c.logo}
            alt={c.name}
            className="company-logo"
            title={c.name}
          />
        ))}
      </div>
    </section>
  );
}

export default function App() {
  const [search, setSearch] = useState("");

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <BlackFridayBanner/>
      <Categories categories={categories} />
      <TrustedCompanies companies={companies} />
    </div>
  );
}
