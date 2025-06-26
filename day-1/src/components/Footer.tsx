import facebook from "/fb.png";
import instagram from "/insta.png";
import twitter from "/twitter.png";
import linkedin from "/Linkedin.png";

function FooterComponent() {
    return (
        <footer className="text-center py-16">
            <div>
                <ul className="flex space-x-8 justify-center py-8">
                    <li><img src={facebook} alt="facebook" /></li>
                    <li><img src={instagram} alt="instagram" /></li>
                    <li><img src={twitter} alt="twitter" /></li>
                    <li><img src={linkedin} alt="linkedin" /></li>
                </ul>
            </div>
            <div>
                <p className="text-sm font-normal">Copyright ©2020 All rights reserved </p>
            </div>
        </footer>
    )
}

export default FooterComponent;