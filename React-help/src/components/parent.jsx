import React from "react";
import { Patterns } from "./patterns";
import { Output } from "./output";
import '../App.css';

export const Parent = () =>{
  
  return(
    <main>
      <div className="left">
        <Patterns/>
      </div>
      <div className="right">
        <Output/>
      </div>
      
      
      </main>
  );
};
