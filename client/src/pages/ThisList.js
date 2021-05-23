import React from "react";
import { Link } from "react-router-dom";

import { useQuery } from '@apollo/react-hooks';
import { QUERY_USER } from "../utils/queries";
// import listSchema from "../../../server/models/List";

function ThisList(props) {
    console.log(props.location)
    const { data } = useQuery(QUERY_USER);
    let user;
  
    if (data) {
      user = data.user;
    }
  
    return (
      <>
        <div className="container my-1">
          <Link to="/home">
            ← Back to Lists
            </Link>
  
          {user ? (
            <>
              <h2>{ user.storeSchema.name }</h2>
              {user.storeSchema.map((storeSchema) => (
                <div key={storeSchema.listSchema._id} className="my-2">
                  <h3>{new Date(parseInt(storeSchema.listSchema.createdAt)).toLocaleDateString()}</h3>
                  <div className="flex-row">
                    {storeSchema.listSchema.map(({ item }, index) => (
                      <div key={index} className="card px-1 py-1">
                          <p>{item}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </>
          ) : null}
  
        </div>
  
      </>)
  
  };


export default ThisList;