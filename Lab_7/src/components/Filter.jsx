import React, { Fragment } from "react";


function Filter() {
    return (
        <Fragment>
            <form>
                <div>
                    <select>
                        <option>Filter 1</option>
                        <option>item 1</option>
                        <option>item 2</option>
                        <option>item 3</option>
                        <option>item 4</option>
                    </select>
                    <select>
                        <option>Filter 1</option>
                        <option>item 1</option>
                        <option>item 2</option>
                        <option>item 3</option>
                        <option>item 4</option>
                    </select>
                    <select>
                        <option>Filter 1</option>
                        <option>item 1</option>
                        <option>item 2</option>
                        <option>item 3</option>
                        <option>item 4</option>
                    </select>
                </div>
                <button type="submit">Apply</button>
            </form>
        </Fragment>
    )
}

export default Filter