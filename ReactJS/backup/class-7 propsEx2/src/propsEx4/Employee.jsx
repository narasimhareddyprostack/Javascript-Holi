let Employee = (props) => {

    return <div>
        <h1>Employee Component</h1>
        <pre>{JSON.stringify(props)}</pre>
        <h4>Employee Name:{props.ename}</h4>
        <h4>Employee Age:{props.eage}</h4>
    </div>
}
export default Employee