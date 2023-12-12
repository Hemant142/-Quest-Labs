import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "./Help.css"
export default function Help() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/users/help');
      console.log(response.data.help)
      setData(response.data.help);
      setFilteredData(response.data.help);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = () => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  return (
    <div className='help-page '>
    <input
      type="text"
      placeholder="Search by title"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button onClick={handleSearch}>Search</button>
    <p>Total Collections: {data.length}</p>

    {filteredData.length>0&&filteredData.map((item, index) => (
      <div key={index}>
        <div>
          <hr></hr>
          <h2>{item.title}</h2>
          <p>{item.subtitle}</p>
          {/* <ul> */}
            {/* <li></li> */}
          {/* </ul> */}
        </div>
       
      </div>
    ))}
  </div>
);
};