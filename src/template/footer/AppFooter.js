import React from "react";

export default (props) => {

    return (
        <footer className='container-fluid App-footer'>
            <div>
                <p>{new Date().getFullYear()} &copy;</p>
            </div>
        </footer>
    );
};
