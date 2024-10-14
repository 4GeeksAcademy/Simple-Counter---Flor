import React from "react";

const Card = (props) => {
    return (<div class="card text-bg-dark mb-3 m-1">
        <div class="card-body">
            <h5 class="card-title" style={{ fontSize: '100px' }}>{props.digito}</h5>
        </div>
    </div>
    )
};

const SecondsCounter = (props) => {
    return (
        <div className="bg-black d-flex justify-content-center fontSize">
        <div className="d-flex p-3">           
            <div className="card text-bg-dark mb-3 m-1">
                <div className="card-body d-flex align-items-center">
                    <h5 className="card-title"><i class="far fa-clock" style={{ fontSize: '80px'}}></i></h5>
                </div>
            </div>
            <Card digito={Math.floor(props.counter / 100000 % 10)} />
            <Card digito={Math.floor(props.counter / 10000 % 10)} />
            <Card digito={Math.floor(props.counter / 1000 % 10)} />
            <Card digito={Math.floor(props.counter / 100 % 10)} />
            <Card digito={Math.floor(props.counter / 10 % 10)} />
            <Card digito={props.counter % 10} />
        </div>
        </div>)
}

export default SecondsCounter;