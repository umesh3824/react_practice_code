

function CondRenderIf(){
    let data;
    if(false)
        data=<h1>With True</h1>
    else
        data=<h1>With False</h1>
    return(
        <div>
                <h1>CondRenderIf</h1>
                {data}
        </div>
    );
}

function CondRenderInline(){
    return(
        <div>
                <h1>CondRenderInline</h1>
                {true && <h1>With true</h1>}
                {!false && <h1>With false</h1>}
        </div>
    );
}

function CondRender3Op(){
    return(
        <div>
                <h1>CondRender3Op</h1>
                {true? <h1>with true</h1>:<h1>with false</h1>}
                {false? <h1>with true</h1>:<h1>with false 9</h1>}

                <CondRenderWithPropAlert show={true}/>
        </div>
    );
}

function CondRenderWithPropAlert(props){
    if(!props.show){
        return null;
    }
    else{
        return <h1>With props</h1>
    }
}

export default CondRender3Op;