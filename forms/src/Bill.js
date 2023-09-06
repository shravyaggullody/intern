import Button from "./Button";
import Details from "./Details";
import Payment from "./Payment";
function Bill(){
    return(
        <div className="col-md-8 order-md-1 col-sm-12">
                  <h4 className="mb-3">Billing address</h4>
                  
                  <form className="needs-validation" noValidate>
                    <Details/>
                    <Payment/>
                    <Button/>                  
                    </form>
                </div>
    );
}
export default Bill;