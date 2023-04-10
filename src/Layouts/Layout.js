const Layout = ( props )=> {
    return(
        <div className="">
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">{props.children}</div>
                <div className="col-md-4"></div>
            </div>
        </div>
    )
}

export default Layout;