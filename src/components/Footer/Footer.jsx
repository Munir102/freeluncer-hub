
const Footer = () => {
    return (
        <footer className="md:p-10 p-2 bg-green_bg text-base-content font-poppins md:mt-24 mt-4">
            <div className="footer max-w-7xl mx-auto md:py-10 py-4 md:p-0 px-4 grid lg:grid-cols-4 grid-cols-2 gap-6">
                <nav>
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form className="col-span-2">
                    <h6 className="footer-title">Newsletter</h6> 
                    <fieldset className="form-control">
                        <label className="label">
                            <span className="label-text">Enter your email address</span>
                        </label> 
                        <div className="join flex md:text-base text-sm">
                            <input type="text" placeholder="username@site.com" className="input input-bordered join-item mb-2 md:mb-0" /> 
                            <button className="btn bg-primary_color text-neutral-50 join-item">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </footer>

    );
};

export default Footer;