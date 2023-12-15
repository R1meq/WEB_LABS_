import React, { Fragment, useEffect, useState } from "react";
import Select from "./Select";
import { optionsValues1 ,optionsValues2} from "../data";


function Filter({setFilter, filterArticles, articles,searchInput,setSearch,color,type,setColor,setType , cancelHandler,filterCard}) {
    return (
      <Fragment>
        <form>
          <div>
            <Select key={43} function={(event) => setColor(event.target.value)} optionValues={optionsValues1} value={color} />
            <Select key={44} function={(event) => setType(event.target.value)} optionValues={optionsValues2} value={type} />
          </div>
          <div className="buttons" >
          <button type="button" onClick={cancelHandler}>
            Cancel
          </button>
          <button type="button" onClick={filterCard}>
            Apply
          </button>
          </div>
        </form>
      </Fragment>
    );
  }

export default Filter