import Buttons from "./Buttons";
function Headers(props) {
    return(
        <div>
                <section className="jumbotron text-center py-5">
                    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '0 15px' }}>
                        <h1>{props.title}</h1>
                        <p className="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
                        <Buttons/>
                    </div>
                </section>
        </div>
    );
}
export default Headers;