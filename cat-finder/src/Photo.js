import React, { useState, useEffect, createElement } from "react";
import "./Photo.css";
const Photo = () => {
  let [facts, updatefacts] = useState("Loading....");


  useEffect(() => {
    fetch("https://meowfacts.herokuapp.com/")
      .then((res) => res.json())
      .then((data) =>  updatefacts(data.data[0]))
      .catch(()=>{
       updatefacts("no fact for today :<, pls reload the page")
      })
  },[]);

  let [link, updatelink] = useState("https://cataas.com/cat")

  let findcat = () =>{
    updatelink("https://cataas.com/cat?" + Math.random())
  }
  
  let Download = async()=>{
    try{
        const response = await fetch(link, {mode:"cors"})
        const blob = await response.blob();
        const bloburl = URL.createObjectURL(blob)

        const a = document.createElement("a")
        a.href = bloburl
        a.download = "cat.jpg"
        a.click()

        URL.revokeObjectURL(bloburl)
    }
    catch(err){
     console.error("Failed to download the image:", err);
    }
  }

  return (
    <div className="container">
      <header>Generate a Cat</header>
      <div className="main">
        <div className="img-cont">
          <img src={link} alt="" />
        </div>
        <div className="button-container">
          <button onClick={findcat}>Find</button>
          <button onClick={Download}>Download</button>
        </div>
        <div className="qts-cont">
          <h3>Cat facts</h3>
          <p className="facts">"{facts}"</p>
        </div>
      </div>
    </div>
  );
};

export default Photo;
