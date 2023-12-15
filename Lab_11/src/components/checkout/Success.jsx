import './success.css'

const SuccessFormik = () => {
    return (
        <div>
            <div className={'background_color'}>
                <div className={'success_wrapper'}>
                    <h2 className={'page_title'}>Success</h2>
                    <p className={'page_text'}>Your order was sent to processing!</p>
                    <p className={'page_text'}>Check your email box for further information.</p>
                    <button className={'success_button'}><a className={'button_text'} href="/catalog">Go back to
                        Catalog</a></button>
                </div>
            </div>
        </div>
    );
}


export default SuccessFormik