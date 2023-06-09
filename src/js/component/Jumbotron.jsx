import React from "react"

const Jumbotron = () => {
    return(
<div className="jumbotron m-5">
    <h1 className="display-4 bg-light-subtle p-3">A warm welcome!</h1>
         <p className="lead p-3">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            <hr className="my-4 "/>
            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg p-3" href="#" role="button">Call to Action</a>
</div>
);
};

export default Jumbotron;